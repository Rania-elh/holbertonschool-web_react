import './Header.css';
import logo from '../../assets/holberton-logo.jpg';

function Header({ user, logOut }) {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      {user.isLoggedIn && (
        <div id="logoutSection">
          Welcome{' '}
          {user.email}{' '}
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
    </>
  );
}

export default Header;
