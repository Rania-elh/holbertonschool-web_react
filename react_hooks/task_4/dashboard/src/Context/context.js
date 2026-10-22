import { createContext } from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

function logOut() {}

const newContext = createContext({
  user: defaultUser,
  logOut,
});

export default newContext;
