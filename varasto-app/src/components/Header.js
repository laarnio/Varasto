import React from "react";
import {Link} from "react-router-dom";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/"}>Etusivu</Link></li>
                        <li><Link to={"/items"}>Lainatavarat</Link></li>
                    </ul>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to={"/login"}><span className="glyphicon glyphicon-log-in"></span> Kirjaudu</Link></li>
                </ul>
            </div>
        </nav>
    );
};