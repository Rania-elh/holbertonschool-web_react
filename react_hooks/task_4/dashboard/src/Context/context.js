import { createContext } from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

function logOut() {}

const newContext = createContext({
  user,
  logOut,
});

export default newContext;
