import React from "react";
import axios from "axios";

export class ItemCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCart: this.props.itemCart,
            content1: '',
            content2: '',
            users: [],
            selectedUser: ''
        };
    }
    componentDidMount() {
        let button = <button onClick={this.handleBorrow.bind(this)} className="btn btn-primary">Lainaa</button>;
        axios({
            method: 'get',
            url: 'http://localhost:8080/users'
        }).then(res => {

            this.setState({
                content1: button,
                users: res.data
            });
        });

    }

    handleEmpty(ev) {
        ev.stopPropagation();
        this.props.emptyCart();
    }
    handleNewSubmit = (e) => {
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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("valitsit tämän", this.state.selectedUser);
    };

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ selectedUser: e.target.value });
    }

    handleBorrow() {
        let content1 =(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Valitse listasta lainaaja:
                    <select value={this.state.selectedUser.name} onChange={this.handleChange.bind(this)}>
                        <option value="" defaultValue />
                        {this.state.users.map(user => {
                            if(user.id === this.state.selectedCategory) {
                                console.log(user.name);
                                return(<option value={user.id} key={user.id}>{user.name}</option>)
                            }
                            else {
                                return(<option value={user.id} key={user.id}>{user.name}</option>)
                            }
                        })}
                    </select>
                </label>
                <br/>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>);

        let content2 = (
            <form onSubmit={this.handleNewSubmit.bind(this)}>
                Tai lisää uusi:
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
        this.setState({
            content1: content1,
            content2: content2
        });
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

                {this.state.content1}
                {this.state.content2}
                <button onClick={this.handleEmpty.bind(this)} className="btn btn-primary">Tyhjennä lainauskori</button>
            </div>
        )
    }
}