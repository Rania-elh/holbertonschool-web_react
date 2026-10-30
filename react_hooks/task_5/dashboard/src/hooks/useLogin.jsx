import { useRef, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function canSubmit(email, password) {
  return (
    email !== ''
    && password !== ''
    && emailRegex.test(email)
    && password.length >= 8
  );
}

export function useLogin(onLogin = () => {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleChangeEmail = (event) => {
    const nextEmail = event.target.value;
    emailRef.current = nextEmail;
    setEmail(nextEmail);
    setEnableSubmit(canSubmit(nextEmail, passwordRef.current));
  };

  const handleChangePassword = (event) => {
    const nextPassword = event.target.value;
    passwordRef.current = nextPassword;
    setPassword(nextPassword);
    setEnableSubmit(canSubmit(emailRef.current, nextPassword));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    onLogin(emailRef.current, passwordRef.current);
  };

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
}

export default useLogin;
