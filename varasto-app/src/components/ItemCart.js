import React from "react";
import axios from "axios";

export class ItemCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCart: this.props.itemCart
        };
    }

    handleEmpty(ev) {
        ev.stopPropagation();
        this.props.emptyCart();
    }

    render() {
        return(
            <div>
                <h3>Lainauskori</h3>
                <ul className="list-group">
                    {this.props.itemCart.map(item =>
                        <li className="list-group-item list-group-item-success" key={item.id}> {item.name}</li>
                    )}
                </ul>
                <button onClick={this.handleEmpty.bind(this)} className="btn btn-primary">Tyhjennä lainauskori</button>
            </div>
        )
    }
}