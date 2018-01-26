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
                let temp = '';
                res.data.forEach(category => {
                    if(category.id.toString() === this.props.match.params.id) {
                        temp = category.id;
                    }
                });
                this.setState({
                    categories: res.data,
                    selectedCategory: temp
                })
            });
    }

    handleSubmit = (e) => {
        if(!this.name.value) {
            alert("Aseta nimi!");
            return;
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
    //TODO: miksi nuo selectissä olevat iffit.
    render() {
        return (
            <div className="container">
                <h3>Lisää uusi tavara</h3>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Kategoria:
                        <select value={this.state.selectedCategory} onChange={this.handleChange.bind(this)}>
                            {this.state.categories.map(category => {
                                if(category.id === this.state.selectedCategory) {
                                    console.log(category.name);
                                    return(<option value={category.id} key={category.id}>{category.name}</option>)
                                }
                                else {
                                    return(<option value={category.id} key={category.id}>{category.name}</option>)
                                }
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
