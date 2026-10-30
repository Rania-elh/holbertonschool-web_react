import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import './Login.css';
import useLogin from '../../hooks/useLogin';

function Login() {
  const dispatch = useDispatch();

  const onLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

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

export default Login;
