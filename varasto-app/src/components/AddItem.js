import React from "react";
import axios from "axios";


export class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategory: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/categories')
            .then(res => {
                this.setState({
                    categories: res.data
                })
            });
    }

    handleSubmit = (e) => {
        if(!this.name.value) {
            alert("Aseta nimi!");
            return;
        }
        if(!this.state.selectedCategory){
            alert('Aseta Kategoria!');
        }
        let newItemRef = {
            name: this.name.value,
            borrowed: false,
            meta: ''
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/categories/' + this.state.selectedCategory+ '/items',
            data: newItemRef
        });
    };

    handleChange(e) {
        this.setState({ selectedCategory: e.target.value});
    }
    render() {
        return (
            <div className="list-group-item">
                <h3>Lisää uusi tavara</h3>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Kategoria:
                        <select onChange={this.handleChange.bind(this)}>
                            <option value="" defaultValue />
                            {this.state.categories.map(category => {
                                return(<option value={category.id} key={category.id}>{category.name}</option>)
                                })}
                        </select>
                    </label>

                    <br/>
                    <br/>

                    <label>
                        Nimi:
                        <input ref={(name) => this.name = name} type='text' />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <br/>



            </div>
        );
    }
}
