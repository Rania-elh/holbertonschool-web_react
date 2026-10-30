import '../../../styles/Login.css';
import useLogin from '../../hooks/useLogin';

function Login({ logIn }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  } = useLogin(logIn);

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
