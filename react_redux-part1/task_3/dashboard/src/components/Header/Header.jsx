import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice.js';
import './Header.css';
import logo from '../../assets/holberton-logo.jpg';

function Header() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
              handleLogout();
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
