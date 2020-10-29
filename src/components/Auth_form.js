import React, {Component} from 'react';

class Auth_form extends Component
{

    render() {
        return (
            <div className ="container">
                <label for ="firstName">FirstName</label>
                <input
                type = "text"
                name ="firstName"
                id="firstName"/>
                <label for ="lastName">LastName</label>
                <input
                type = "text"
                name ="lastName"
                id="lastName"/>
                <button>Auth_form</button>
            </div>
        )
    }
    };

export default Auth_form;