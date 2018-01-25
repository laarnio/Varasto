import React from "react";
import axios from "axios";

export class ItemCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCart: this.props.itemCart,
            borrow: ''
        };
    }
    componentDidMount() {
        let button = <button onClick={this.handleBorrow.bind(this)} className="btn btn-primary">Lainaa</button>;
        this.setState({borrow: button})
    }

    handleEmpty(ev) {
        ev.stopPropagation();
        this.props.emptyCart();
    }
    handleSubmit = (e) => {;
        if(!this.name.value) {
            alert('Aseta lainaajan nimi!');
            return;
        }
        else if(!this.apartment.value) {
            alert('Aseta lainaajan asunto!');
            return;
        }
        else if(!this.phoneNumber.value) {
            alert('Aseta lainaajan puhelinnumero!');
            return;
        }
        else if(!this.state.itemCart){
            alert('Lainakori on tyhjä!');
            return;
        }
        let borrower = {
            id: 2,
            name: this.name.value,
            apartment: this.apartment.value,
            phoneNumber: this.phoneNumber.value
        };
        let placeHolder = {
            id: 1,
            name: 'matti',
            apartment: 'yes',
            phoneNumber: '30'
        };
        let newReservationRef = {
          giver: borrower,
          borrower: placeHolder,
          items: this.state.itemCart
        };
        newReservationRef.items.forEach(item => {
            let temp = item;
            temp.borrowed = true;
            axios({
                method: 'put',
                url: 'http://localhost:8080/categories/' + item.category + '/items/' + item.id,
                data: temp
            });
           item.category = null;
        });
        axios({
            method: 'post',
            url: 'http://localhost:8080/reservations',
            data: newReservationRef
        });
        console.log(this.state.itemCart);



    };
    handleBorrow() {
        let temp = (<form onSubmit={this.handleSubmit.bind(this)}>

            <label>
                Nimi:
                <input ref={(name) => this.name = name} type='text' />
            </label>
            <label>
                Asunto:
                <input ref={(apartment) => this.apartment = apartment} type='text' />
            </label>
            <label>
                Puhelinnumero:
                <input ref={(phoneNumber) => this.phoneNumber = phoneNumber} type='text' />
            </label>
            <br/>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>);
        this.setState({borrow: temp});
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
                {this.state.borrow}
                <button onClick={this.handleEmpty.bind(this)} className="btn btn-primary">Tyhjennä lainauskori</button>
            </div>
        )
    }
}