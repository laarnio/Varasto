import React from "react";
import axios from "axios";

export class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            current: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/categories')
            .then(res => {
                let temp = '';
                res.data.forEach(category => {
                    if(category.id.toString() === this.props.match.params.id) {
                        temp = category.name;
                    }
                });
                this.setState({categories: res.data,
                current: temp})
            });
    }
    getCurrentCategory() {
        this.state.categories.forEach(category => {
            if(category.id.toString() === this.props.match.params.id) {
                console.log(category.name);
                return category.name;
            }
        });


    }

    render() {
        return (
            <div>
                <h3>Lisää uusi tavara</h3>
                Category: {this.state.current}
            </div>
        );
    }
}
