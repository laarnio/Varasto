import React from "react";
import axios from "axios";

export class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
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

    log() {
        console.log(this.state.data);

    }

    render() {
        return (
            <div>
                <h3>Lainatavarat</h3>
                <ul className="list-group">
                    {this.state.data.map(category =>
                        <li className="list-group-item" key={category.category.id}>{category.category.name}
                            <ul>
                                {
                                    category.items.map(item => {
                                        if(!item.borrowed) {
                                            return (<a href="#" className="list-group-item list-group-item-success" key={item.id}>{item.name} </a> );
                                        }
                                        return (<a href="#" className="list-group-item list-group-item-danger" key={item.id}>{item.name} </a> );
                                    })
                                }
                                    <a href={"/categories/"+category.category.id+"/add"} className="list-group-item list-group-item-info">Lisää uusi +</a>
                            </ul>

                        </li>
                    )}
                </ul>
                <button onClick={this.log.bind(this)}>Kukkuu</button>
            </div>
        );
    }
}