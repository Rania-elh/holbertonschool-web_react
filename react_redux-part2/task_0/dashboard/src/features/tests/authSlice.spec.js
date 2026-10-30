import mockAxios from 'jest-mock-axios';
import authReducer, { login, logout } from '../auth/authSlice';

afterEach(() => {
  mockAxios.reset();
});

const initialState = {
  user: {
    email: '',
    password: '',
  },
  isLoggedIn: false,
};

describe('authSlice', () => {
  test('returns the correct initial state by default', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('updates the state when the login action is dispatched', () => {
    const state = authReducer(
      initialState,
      login({ email: 'test@example.com', password: 'password123' })
    );

    expect(state.user.email).toBe('test@example.com');
    expect(state.user.password).toBe('password123');
    expect(state.isLoggedIn).toBe(true);
  });

  test('resets the state when the logout action is dispatched', () => {
    const loggedInState = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
      isLoggedIn: true,
    };

    const state = authReducer(loggedInState, logout());

    expect(state.user.email).toBe('');
    expect(state.user.password).toBe('');
    expect(state.isLoggedIn).toBe(false);
  });
});
