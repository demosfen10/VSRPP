import React, {Component} from 'react';
import '../Auth_form.css';
import {Redirect} from 'react-router-dom'
import { logIn } from '../redux/actions';


class Auth_form extends React.Component{
    state = {
      login: '',
      password: '',
    }

    onInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        })
      }
    
      onAuthSubmit = (e) => {
        const {login, password} = this.state;
        if (login === "ilya@mail.ru" && password === "demosfen10"){
          e.preventDefault();
          this.props.login(true);
        } else {
          this.props.login(false);
          alert ("Введите правильные данные")
        }
      }
    
      render(){
        if (this.props.logInf){
          return <Redirect to="/users"/>
        }
        return(
         <div className="container">
          <div className="row">
            <form className="form-horizontal" onSubmit={this.onAuthSubmit}>
              <span className="heading">Авторизация</span>
              <div className="form-group">
              <input type="text" className="form-control" id="inputLogin" placeholder="Login" name="login" onChange={this.onInputChange}/>
              <i className="fa fa-user"></i>
              </div>
              <div className="form-group help">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={this.onInputChange}/>
              <i className="fa fa-lock"></i>
              </div>
              <button type="submit" className="btn btn-default">Вход</button>
            </form>
          </div>
          </div>
        )
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
      return{
        login: (log) => dispatch(logIn(log))
      }
    }
    
    const mapStateToProps = (state) => {
      return{
        logInf: state.authorizationReducer.logged
      }
    }

// render() {
//     const { Email, Password } = this.state; 
//     return (
//         <form onSubmit={this.onFormSubmit}>
//         <div className ="container">
//         {/*  <div className ='LogIn_form'> */}
//             <div classname = 'Welcome'>
//                 Welcome
//             </div>
//             <div classname = 'text_to_login'>
//                 Login to get started!
//             </div>
//             <label for ="email">Email:</label>
//             <input
//             type = "email"
//             name ="email"
//             id="email"/>
//             <label for ="password">Password:</label>
//             <input
//             type = "text"
//             name ="password"
//             id="password"/>
//             <button>LogIn</button>
//         </div>
//         </form>
//     )
// }
//}
export default Auth_form;
// export default connect(mapStateToProps, mapDispatchToProps)(AutorizationForm);