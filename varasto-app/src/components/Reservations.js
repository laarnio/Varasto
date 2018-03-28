import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {ReservationCmp} from "./ReservationCmp";


//List of all the reservations made by users.
export class Reservations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }

    componentWillMount() {

    }
    //Get all reservations from API
    componentDidMount() {
        axios.get('http://localhost:8080/api/reservations/')
            .then(res => {
                this.setState({data: res.data});
                console.log(res.data);
            });
    }
    //Display the reservations as a list of ReservationComponents
    render() {

        return (
            <div className="container">
                <div className="col-xm-6 list-group-item">
                    <h3>Varaukset</h3>
                    <ul>
                        {
                            this.state.data.slice(0).reverse().map(reservation => {
                                return (
                                    <div key={reservation.id}>
                                        <ReservationCmp reservation={reservation}/>
                                    </div>
                                );
                            })

                        }
                    </ul>
                </div>
            </div>
        );
    }
}