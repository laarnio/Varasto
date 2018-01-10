import React from "react";

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        };
    }

    handleClick() {
        let tmp ='';
        if(this.props.item.borrowed) {
            tmp = (
                <div className="list-group-item list-group-item-warning">
                    <button className="btn btn-primary">Palauta</button>
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

    render() {
        if(this.props.item.borrowed) {
            return (
                <div>
                    <li onClick={this.handleClick.bind(this)} className="list-group-item list-group-item-danger"
                       key={this.props.item.id}>{this.props.item.name} (Lainassa) </li>
                    {this.state.info}
                </div>
            );
        }
        else {
            return (
                <div>
                    <li onClick={this.handleClick.bind(this)} className="list-group-item list-group-item-success"
                        key={this.props.item.id}>{this.props.item.name} </li>
                    {this.state.info}
                </div>
            );
        }
    }
}