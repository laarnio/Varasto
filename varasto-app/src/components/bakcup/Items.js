import React from "react";
import axios from "axios";
import Promise from 'bluebird'

export class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: []
        };
    }
    componentWillMount() {
        this.fetchCategories();
    }
    componentDidMount() {

    }
    fetchCategories() {

        let categorii = [];
        axios.get('http://localhost:8080/categories')
            .then(res => {
                const categories = res.data.map(obj => obj);
                categories.forEach(function(element) {
                    let category = {
                        category: '',
                        items: []
                    };
                    category.category = element;
                    categorii[element.id] = category;
                })
            }).then(() => {
                this.setState(this.state.temp = categorii);
                this.fetchItems();
            }

        );
    }

    fetchItems() {
        let items = [];
        let categories = this.state.temp;

        console.log("cat: ", this.state.temp);
        categories.forEach(function(element) {
            console.log(element);
            let id = element.category.id;
            console.log("id: ", id);
            let url = 'http://localhost:8080/categories/' + id + '/items';
            axios.get(url)
                .then(res => {
                    console.log('another:', id);
                    items[id] = res.data.map(obj => obj);
                    console.log("idems: ", items);
                    categories[id].items = items[id];
                })
        });

    }
    log() {
        console.log(this.state.temp);

    }

    render() {
        return (
            <div>
                <h3>Lainatavarat</h3>
                <ul>
                    {this.state.temp.map((category, i) =>
                        <li key={category.category.id}>{category.category.name}</li>

                    )}
                </ul>

                <button onClick={this.log.bind(this)}>Kukkuu</button>
            </div>
        );
    }
}