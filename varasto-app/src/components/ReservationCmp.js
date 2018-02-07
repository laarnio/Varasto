import React from "react";

export class ReservationCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservation: props.reservation
        };
        console.log(this.state.reservation);
    }


    render() {
        return(
            <div className="list-group-item">
                {this.state.reservation.created}
                <br />
                Lainaaja: {this.state.reservation.borrower.name}
                <br />
                Luovuttaja: {this.state.reservation.giver.name}
                <br />
                Tavarat:
                {this.state.reservation.items.map(item => {
                    return(
                        <li>{item.name}</li>
                    );
                })}
                <br />


            </div>
        );


    }
}