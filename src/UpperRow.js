import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Register from "./Register";

export default function UpperRow(){
    if (true) {
        return (

            <Router>
            <div className="row">
                <div className="not-auth-box">
                    <div className="not-auth-text">ВЫ АВТОРИЗОВАНЫ</div>

                </div>
                <button className="not-auth-button">
                    <a href={"/signup"} className="not-auth-button-text" >ИМЯ</a>
                </button>
                <Switch>
                    <Route exact path="/signup" component={Register}/>
                </Switch>
            </div>
            </Router>
        );
    }
    return (
        <Router>
        <div className="upper-row">
            <div className="not-auth-box">
                <div className="not-auth-text">
                    ВЫ НЕ АВТОРИЗОВАНЫ
                </div>

            </div>
            <button className="not-auth-button">
                <a href={"/login"} className="not-auth-button-text">ВОЙТИ</a>
            </button>
            <Switch>
                <Route exact path="/signup" component={Register} />
            </Switch>
        </div>
</Router>
    );
};