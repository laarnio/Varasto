import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {CategoryCmp} from "./CategoryCmp";
import {ItemCart} from "./ItemCart"
import {AddCategory} from "./AddCategory";
import {AddItem} from "./AddItem";


//Items is the parent component of the whole items-page
//It includes:
//  Fetching categories and items from API
//  Displaying Categories / items
//  Displaying adding items/categories
//  Displaying itemcart
export class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categoryMounted: false,
            itemCart: [],
            showAddCategory: false,
            showAddItem: false
        };

    }

    componentWillMount() {

    }

    componentDidMount() {
        this.fetchData();
    }


    //Fetch categories and their items from API
    fetchData() {
        let tempCategories = [];

        axios.get('http://localhost:8080/api/categories')
            .then(res => {
                res.data.forEach(category => {
                    let tempData = {
                        category: '',
                        items: []
                    };
                    tempData.category = category;

                    let id = category.id;
                    let url = 'http://localhost:8080/api/categories/' + id + '/items';

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

    //Check if item is already in itemcart and if not, add it there
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

    //onClick handler to show and hide category adding component
    handleShowNewCategory(){
        this.setState({showAddCategory: !this.state.showAddCategory});
    }
    //onClick handler to show and hide item adding component
    handleShowNewItem(){
        this.setState({showAddItem: !this.state.showAddItem });
    }

    render() {
        let addCategory = '';
        let addItem = '';
        if(this.state.showAddCategory){
            addCategory = (<AddCategory />);
        }
        if(this.state.showAddItem) {
            addItem = (<AddItem />);
        }

        return (
            <div className="container">
                <div className="col-sm-6">
                    <h3>Lainatavarat</h3>
                    <button onClick={this.handleShowNewCategory.bind(this)} className="list-group-item list-group-item-info">+ Uusi kategoria</button>
                    {addCategory}
                    <button onClick={this.handleShowNewItem.bind(this)} className="list-group-item list-group-item-info">+ Uusi tavara</button>
                    {addItem}
                    <ul className="list-group">
                        {this.state.data.map(category =>
                           <CategoryCmp key={category.category.id} category={category} addToCart={this.addToCartCallback} />
                        )}
                    </ul>
                </div>
                <div className="col-sm-6">
                    <ItemCart itemCart={this.state.itemCart} emptyCart={this.emptyCartCallback} />
                </div>
            </div>
        );
    }
}