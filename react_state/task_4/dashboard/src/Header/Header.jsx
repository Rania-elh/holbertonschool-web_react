import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import { Component, Fragment } from 'react';
import newContext from '../Context/context';

class Header extends Component {
  static contextType = newContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        {user.isLoggedIn && (
          <div id="logoutSection">
            Welcome
            {' '}
            {user.email}
            {' '}
            (
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                logOut();
              }}
            >
              logout
            </a>
            )
          </div>
        )}
      </Fragment>
    );
  }
}

export default Header;
