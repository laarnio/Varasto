import React from "react";
import axios from "axios";

export class ItemCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            showInfo: false,
            itemCart: this.props.itemCart
        };
    }

    handleClick(ev) {
        ev.stopPropagation();
        this.setState({showInfo: !this.state.showInfo});

    }

    handleReturn(ev) {
        ev.stopPropagation();
        let itemRef = this.state.item;
        itemRef.borrowed = false;
        axios({
            method: 'put',
            url: 'http://localhost:8080/categories/' + this.props.categoryId + '/items/' + this.props.item.id,
            data: itemRef
        }).then(() =>
        this.setState({item: itemRef}));
        this.handleClick(ev)
    }
    handleAddToCart(ev) {
        ev.stopPropagation();
        this.props.addToCart(this.props.item);
    }

    render() {
        let tmp ='';
        let listItem = '';
        if(this.props.item.borrowed) {
            listItem = (<li onClick={this.handleClick.bind(this)} className="list-group-item list-group-item-danger">
                {this.props.item.name} (Lainassa) </li>);
            tmp = (
                <div className="list-group-item list-group-item-warning">
                    <button onClick={this.handleReturn.bind(this)} className="btn btn-primary">Palauta</button>
                </div>);
        }
        else {
            listItem = (<li onClick={this.handleClick.bind(this)} className="list-group-item list-group-item-success">
                {this.props.item.name} </li>);
            tmp = (
                <div className="list-group-item list-group-item-warning">
                    <button onClick={this.handleAddToCart.bind(this)} className="btn btn-primary">Lisää lainakoriin</button>
                </div>);
        }
        if(this.state.showInfo) {
            return (
                <div>
                    {listItem}
                    {tmp}
                </div>
            );
        }
        return (
            <div>
                {listItem}
            </div>
        )


    }
}