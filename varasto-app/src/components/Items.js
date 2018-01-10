import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Item} from "./Item";

export class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categoryMounted: false
        };

    }

    componentWillMount() {

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let tempCategories = [];

        axios.get('http://localhost:8080/categories')
            .then(res => {
                res.data.forEach(category => {
                    let tempData = {
                        category: '',
                        items: []
                    };
                    tempData.category = category;

                    let id = category.id;
                    let url = 'http://localhost:8080/categories/' + id + '/items';

                    axios.get(url)
                        .then(res => {
                            tempData.items = res.data;
                            tempCategories.push(tempData);
                            this.setState({ data: tempCategories });
                        });
                })
            }
        )
    }

    render() {

        return (
            <div className="container">
                <h3>Lainatavarat</h3>
                <Link className="list-group-item list-group-item-info" to={"/categories/add"}>+ Uusi kategoria</Link>
                <ul className="list-group">
                    {this.state.data.map(category =>
                        <li className="list-group-item" key={category.category.id}>{category.category.name}
                            <ul>
                                {
                                    category.items.map(item => {
                                            return (
                                                <Item item={item} />
                                            );
                                    })

                                }
                                <Link className="list-group-item list-group-item-info" to={"/categories/"+category.category.id+"/add"}>+ Lisää uusi</Link>
                            </ul>

                        </li>
                    )}
                </ul>
            </div>
        );
    }
}