import React from "react";
import axios from "axios";


export class AddCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    handleSubmit = (e) => {
        if(!this.name.value){
            alert("Aseta nimi!");
            return;
        }
        let newCategoryRef = {
            name: this.name.value,
            description: this.description.value,
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/categories/',
            data: newCategoryRef
        });
    };

    render() {
        return (
            <div className="container">
                <h3>Lisää uusi kategoria</h3>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Nimi:
                        <input ref={(name) => this.name = name} type='text' />
                    </label>
                    <label>
                        Kuvaus:
                        <input ref={(description) => this.description = description} type='textarea' />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <br/>



            </div>
        );
    }
}
