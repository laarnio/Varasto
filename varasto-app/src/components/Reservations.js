import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {ReservationCmp} from "./ReservationCmp";

export class Reservations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }

    componentWillMount() {

    }

    componentDidMount() {
        axios.get('http://localhost:8080/reservations/')
            .then(res => {
                this.setState({data: res.data});
                console.log(res.data);
            });
    }

    render() {

        return (
            <div className="container">
                <div className="col-xm-6 list-group-item">
                    <h3>Varaukset</h3>
                    <ul>
                        {
                            this.state.data.slice(0).reverse().map(reservation => {
                                return (
                                    <div>
                                        <ReservationCmp key={reservation.id} reservation={reservation}/>
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