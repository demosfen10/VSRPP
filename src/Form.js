import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: 1,
            FirstName: '',
            LastName: '',
            Email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    onClickUp = () => {
        this.setState((prevState) => {
            return {
                id: prevState.id + 1,
            }
        })
};

    render() {
        const { FirstName, LastName, Email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="FirstName">FirstName</label>
                <input 
                    type="text" 
                    name="FirstName" 
                    id="FirstName"
                    value={FirstName} 
                    onChange={this.handleChange} />
                <label for="LastName">LastName</label>
                <input 
                    type="text" 
                    name="LastName" 
                    id="LastName"
                    value={LastName} 
                    onChange={this.handleChange} />
                <label for="Email">Email</label>
                <input 
                    type="email" 
                    name="Email" 
                    id="Email"
                    value={Email} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Add User
                </button>
            </form>
        );
    }
}

export default Form;