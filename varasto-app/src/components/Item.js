import React from "react";
import axios from "axios";

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            info: ''
        };
    }

    handleClick() {
        let tmp ='';
        if(this.state.item.borrowed) {
            tmp = (
                <div className="list-group-item list-group-item-warning">
                    <button onClick={this.handleReturn.bind(this)} className="btn btn-primary">Palauta</button>
                </div>);
        }
        else{
            tmp = (
                <div className="list-group-item list-group-item-warning">
                    <button className="btn btn-primary">Lainaa</button>
                </div>);
        }
        if(this.state.info === ''){
            this.setState({info: tmp});
        }
        else {
            this.setState({info: ''});
        }

    }
    handleReturn() {
        let itemRef = this.state.item;
        itemRef.borrowed = false;
        axios({
            method: 'put',
            url: 'http://localhost:8080/categories/' + this.props.categoryId + '/items/' + this.props.item.id,
            data: itemRef
        }).then(() =>
        this.setState({item: itemRef}));
    }

    render() {
        let listItem = '';
        if(this.props.item.borrowed) {
            listItem = (<li onClick={this.handleClick.bind(this)} className="list-group-item list-group-item-danger"
                                  key={this.props.item.id}>{this.props.item.name} (Lainassa) </li>);
        }
        else {
            listItem = (<li onClick={this.handleClick.bind(this)} className="list-group-item list-group-item-success"
                          key={this.props.item.id}>{this.props.item.name} </li>);
        }
        return (
            <div>
                {listItem}
                {this.state.info}
            </div>
        );


    }
}