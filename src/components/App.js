import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth_form from './Auth_form';
import User_form from './User_form';


class App extends Component{
    render(){
        return(
            <Router>
            <Switch>
                <Route exact path ='/auth' component={Auth_form}/>
                <Route exact path ='/userform' component={User_form}/>
                <Route exact path ='/' component={Auth_form}/>
            </Switch>
            </Router>
        )
    }
}

export default App;