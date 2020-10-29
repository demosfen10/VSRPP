import React, { Component } from 'react';
import Auth_form from './Auth_form';
import User_form from './User_form';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <Switch>
                <Route exact path ='/auth' component={Auth_form}/>
                <Route exact path ='/userform' component={User_form}/>
            </Switch>
        )
    }
}

export default App;