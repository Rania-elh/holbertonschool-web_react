import './Login.css';
import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    const { email = '', password = '' } = props;
    this.state = {
      email,
      password,
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  validateForm(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      email !== ''
      && password !== ''
      && emailRegex.test(email)
      && password.length >= 8
    );
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({
      email,
      enableSubmit: this.validateForm(email, this.state.password),
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({
      password,
      enableSubmit: this.validateForm(this.state.email, password),
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;
    logIn(email, password);
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    );
  }
}

Login.defaultProps = {
  email: '',
  password: '',
  logIn: () => {},
};

export default Login;
