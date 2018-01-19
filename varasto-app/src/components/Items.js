import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {CategoryCmp} from "./CategoryCmp";
import {ItemCart} from "./ItemCart"

export class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categoryMounted: false,
            itemCart: []
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

    emptyCartCallback = () => {
        this.setState({itemCart: []})
    };

    addToCartCallback = (item) => {
        let duplicate = false;
        this.state.itemCart.forEach(i => {
            if(i.id === item.id){
                alert("Tuote on jo korissa!");
                duplicate = true;
            }
        });
        if(!duplicate) {
            let temp = this.state.itemCart;
            temp.push(item);
            this.setState({itemCart: temp})
        }
    };

    render() {

        return (
            <div className="container">
                <h3>Lainatavarat</h3>
                <Link className="list-group-item list-group-item-info" to={"/categories/add"}>+ Uusi kategoria</Link>
                <ul className="list-group">
                    {this.state.data.map(category =>
                       <CategoryCmp key={category.category.id} category={category} addToCart={this.addToCartCallback} />
                    )}
                </ul>
                <ItemCart itemCart={this.state.itemCart} emptyCart={this.emptyCartCallback} />
            </div>
        );
    }
}