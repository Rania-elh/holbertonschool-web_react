import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Login from './Login';
import authReducer from '../../features/auth/authSlice';

function renderLogin() {
  const store = configureStore({
    reducer: { auth: authReducer },
  });

  const view = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  return { store, ...view };
}

describe('Login component', () => {
  test('displays the email field, the password field, and the submit button', () => {
    renderLogin();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
  });

  test('sets isLoggedIn to true when the form is submitted with valid credentials', async () => {
    const user = userEvent.setup();
    const { store } = renderLogin();

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /ok/i }));

    expect(store.getState().auth.isLoggedIn).toBe(true);
    expect(store.getState().auth.user.email).toBe('test@example.com');
  });

  test('keeps isLoggedIn false when the form is submitted with invalid credentials', () => {
    const { store } = renderLogin();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'not-an-email' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'short' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /ok/i }).closest('form'));

    expect(store.getState().auth.isLoggedIn).toBe(false);
  });
});
