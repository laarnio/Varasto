import React from "react";
import axios from "axios";
import {MetaInfoCmp} from "./MetaInfoCmp"

export class ItemCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            showItem: false,
            showMeta: false,
            itemCart: this.props.itemCart
        };
    }
    //TODO: Tästä sitten clearit
    handleClick(ev) {
        ev.stopPropagation();

    }
    handleShowItem(ev) {
        ev.stopPropagation();
        this.setState({showItem: !this.state.showItem});
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
        this.handleClick(ev);
    }

    handleAddToCart(ev) {
        ev.stopPropagation();
        this.props.addToCart(this.props.item);
    }
    handleShowMeta(ev) {
        ev.stopPropagation();
        this.setState({showMeta: !this.state.showMeta});
    }
    handleNewMeta = (ev) => {
        ev.preventDefault();
        if(!this.meta.value) {
            alert("Metatieto ei voi olla tyhjä!");
            return;
        }
        let tmp = this.state.item;
        axios({
            method: 'post',
            url: 'http://localhost:8080/categories/' + this.props.categoryId + '/items/' + this.props.item.id + '/metainfos/',
            data: {meta: this.meta.value}
        }).then(res => {
                tmp.metaInfos.push(res.data);
                console.log(tmp);
                axios({
                    method: 'put',
                    url: 'http://localhost:8080/categories/' + this.props.categoryId + '/items/' + this.props.item.id,
                    data: tmp
                });
                this.setState({item: tmp});
            }
        );
    };

    render() {
        let tmp ='';
        let listItem = '';
        let showMetaBtn = (<button onClick={this.handleShowMeta.bind(this)} className="btn btn-primary">Näytä tietoja</button>);
        let meta = '';
        let newMetaBtn = '';

        //TODO: oma CMP Metainfolle tästä.
        if(this.state.showMeta) {
            meta = this.state.item.metaInfos.map(metaInfo => {
                showMetaBtn = (<button onClick={this.handleShowMeta.bind(this)} className="btn btn-primary">Piilota tiedot</button>);
                console.log(metaInfo.meta);
                return( <li key={metaInfo.id} className="list-group-item">{metaInfo.created}: {metaInfo.meta}</li>);
            });
            newMetaBtn = (
                <form onSubmit={this.handleNewMeta.bind(this)}>
                    <label>
                        Lisää uusi metatieto:
                        <input ref={(meta) => this.meta = meta} type='text' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }

        if(this.props.item.borrowed) {
            listItem = (<li onClick={this.handleShowItem.bind(this)} className="list-group-item list-group-item-danger">
                {this.props.item.name} (Lainassa) </li>);
            tmp = (
                <div onClick={this.handleClick} className="list-group-item list-group-item-warning">
                    <button onClick={this.handleReturn.bind(this)} className="btn btn-primary">Palauta</button>
                </div>);
        }
        else {
            listItem = (<li onClick={this.handleShowItem.bind(this)} className="list-group-item list-group-item-success">
                {this.props.item.name} </li>);
            tmp = (
                <div onClick={this.handleClick} className="list-group-item list-group-item-warning">
                    <button onClick={this.handleAddToCart.bind(this)} className="btn btn-primary">Lisää lainakoriin</button>
                    {showMetaBtn}
                    {meta}
                    {newMetaBtn}

                </div>);
        }
        if(this.state.showItem) {
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
        );


    }
}