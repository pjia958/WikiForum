import React from 'react'
import {signUp} from '../../api/authmanagement'
import {userSignup} from '../../redux/actions/authactions'
import {connect} from 'react-redux'


class Signup extends React.Component {
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
        //console.log(this.state)
        this.props.userSignup(this.state)
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h4>Sign up</h4>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                </div>
                </form>
            </div>
        );
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignup: (user) => dispatch(userSignup(user))
    }
}

export default connect(null, mapDispatchToProps)(Signup)