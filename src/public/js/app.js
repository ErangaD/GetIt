import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Header} from "./components/Header";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Checker/>
                </div>
                <Router history={browserHistory}>
                    <Route path={"login"} component={Login}/>
                    <Route path={"signUp"} component={SignUp}/>
                </Router>
            </div>
        );

    }
}
render(<App/>,window.document.getElementById("app"));