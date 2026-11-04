import { useContext } from 'react';
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice.js';
import '../../../styles/Header.css';
import logo from '../../assets/holberton-logo.jpg';

function HeaderView({ user, isLoggedIn, onLogout }) {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      {isLoggedIn && (
        <div id="logoutSection">
          Welcome{' '}
          {user.email}{' '}
          (
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onLogout();
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

function HeaderConnected() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <HeaderView
      user={user}
      isLoggedIn={isLoggedIn}
      onLogout={() => dispatch(logout())}
    />
  );
}

function Header({ user, logOut }) {
  const redux = useContext(ReactReduxContext);

  if (!redux) {
    return (
      <HeaderView
        user={user}
        isLoggedIn={Boolean(user && user.isLoggedIn)}
        onLogout={logOut}
      />
    );
  }

  return <HeaderConnected />;
}

export default Header;
