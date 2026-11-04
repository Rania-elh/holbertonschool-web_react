import { useContext } from 'react';
import { ReactReduxContext, useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice.js';
import '../../../styles/Login.css';
import useLogin from '../../hooks/useLogin.jsx';

function LoginForm({ onLogin }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  } = useLogin(onLogin);

  return (
    <div className="Login">
      <p>Login to access the full dashboard</p>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />

        <input
          type="submit"
          value="OK"
          disabled={!enableSubmit}
        />
      </form>
    </div>
  );
}

function LoginConnected() {
  const dispatch = useDispatch();

  const onLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  return <LoginForm onLogin={onLogin} />;
}

function Login({ logIn }) {
  const redux = useContext(ReactReduxContext);

  if (!redux) {
    return <LoginForm onLogin={logIn} />;
  }

  return <LoginConnected />;
}

export default Login;
