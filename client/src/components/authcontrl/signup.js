import React from 'react'
import {signUp} from '../../api/authmanagement'

export class Signup extends React.Component {
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : ''
    }
    
    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        console.log(this.state)
        // let signupData = new FormData()
        // signupData.append('c', 'login');
        // signupData.append('email', this.state.email)
        // signupData.append('password', this.state.password)
        // signupData.append('firstname', this.state.firstName)
        // signupData.append('lastname', this.state.lastName)
        // let signupData = new FormData()

        // console.log(this.state)
        // console.log(signupData)

        // signUp(signupData)
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h4>Sign up</h4>
                {/* <form action="http://localhost:10001/api/signup" method="POST" className="white">
                <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" required />
                </div>
                <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" required />
                </div>
                <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" required />
                </div>
                <button type="submit">Sign up</button> */}
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                </div>
                </form>
            </div>
        );
    }
    
}