import React from "react";
import {ItemCmp} from "./ItemCmp";
import {Link} from "react-router-dom";


export class CategoryCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
            showItem: false,
            itemCart: this.props.itemCart
        };
    }

    handleClick() {
        this.setState({showItem: !this.state.showItem});
    }

    addToCartCallback = (item) => {
        this.props.addToCart(item);
    };

    render() {
        if(!this.state.showItem){
            return (<li onClick={this.handleClick.bind(this)} className="list-group-item" >{this.state.category.category.name}</li>)
        }
        return(
            <li onClick={this.handleClick.bind(this)} className="list-group-item" >{this.state.category.category.name}
                <ul>
                    {
                        this.state.category.items.map(item => {
                            return (
                                <ItemCmp addToCart={this.addToCartCallback} key={item.id} item={item} categoryId={this.state.category.category.id} />
                            );
                        })

                    }
                    <Link className="list-group-item list-group-item-info" to={"/categories/"+this.state.category.category.id+"/add"}>+ Lisää uusi</Link>
                </ul>

            </li>
        )


    }
}