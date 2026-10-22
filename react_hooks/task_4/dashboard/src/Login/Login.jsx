
import './Login.css';
import { useState } from 'react';

function Login(props) {
  const { email = '', password = '', logIn = () => {} } = props;

  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({
    email,
    password,
  });

  const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      email !== ''
      && password !== ''
      && emailRegex.test(email)
      && password.length >= 8
    );
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    const password = formData.password;

    setFormData({
      ...formData,
      email,
    });

    setEnableSubmit(validateForm(email, password));
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    const email = formData.email;

    setFormData({
      ...formData,
      password,
    });

    setEnableSubmit(validateForm(email, password));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password);
  };

  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    </div>
  );
}

export default Login;
