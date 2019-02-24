import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../action/loginAction';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.userSignupRequest(this.state)
  }

  render() {
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <h1>Join our community!</h1>

          <div className="form-group">
            <label className="control-label">Username</label>

            <input
                value={this.state.username}
                onChange={this.onChange.bind(this)}
                type="text"
                name="username"
                className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Email</label>

            <input
                value={this.state.email}
                onChange={this.onChange.bind(this)}
                type="email"
                name="email"
                className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>

            <input
                value={this.state.password}
                onChange={this.onChange.bind(this)}
                type="password"
                name="password"
                className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Password Confirmation</label>

            <input
                value={this.state.passwordConfirmation}
                onChange={this.onChange.bind(this)}
                type="password"
                name="passwordConfirmation"
                className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
    );
  }
}

export default connect(null, { userSignupRequest })(Login);
