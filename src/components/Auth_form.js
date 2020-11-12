import React, {Component} from 'react';
import '../Auth_form.css';

class Auth_form extends Component
{

    render() {
        return (
            <div className ="container">
            {/*  <div className ='LogIn_form'> */}
                <div classname = 'Welcome'>
                    Welcome
                </div>
                <div classname = 'text_to_login'>
                    Login to get started!
                </div>
                <label for ="email">Email:</label>
                <input
                type = "email"
                name ="email"
                id="email"/>
                <label for ="password">Password:</label>
                <input
                type = "text"
                name ="password"
                id="password"/>
                <button>LogIn</button>
            </div>
        )
    }
    };

export default Auth_form;