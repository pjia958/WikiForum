import React from 'react'
import logIn from '../../api/authmanagement'
import {userLogin} from '../../redux/actions/authactions'


class Login extends React.Component {
    state = {
        email : '',
        password : ''
    }
    
    handleChange = (e) => {
        console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.userLogin(this.state)

    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h4>Sign in</h4>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
                </form>
            </div>
        );
    }
    
}

export default Login