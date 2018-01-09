import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';
import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {Login} from "./components/Login";
import {Items} from "./components/Items";
import {AddItem} from "./components/AddItem";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login} />
                <Route path={"/items"} component={Items} />
                <Route path={"/categories/:id/add"} component={AddItem} />
            </div>
        </Router>
    );
  }
}

export default App;