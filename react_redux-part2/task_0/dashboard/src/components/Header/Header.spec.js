import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';
import authReducer, { login } from '../../features/auth/authSlice';

function renderHeader(authState) {
  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState: authState ? { auth: authState } : undefined,
  });

  const view = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  return { store, ...view };
}

describe('Header component', () => {
  test('displays the logout link when isLoggedIn is true', () => {
    renderHeader({
      user: { email: 'test@example.com', password: 'password123' },
      isLoggedIn: true,
    });

    expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
  });

  test('displays a welcome message with the email after the login action', () => {
    const store = configureStore({
      reducer: { auth: authReducer },
    });

    store.dispatch(login({ email: 'test@example.com', password: 'password123' }));

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText(/welcome test@example.com/i)).toBeInTheDocument();
  });

  test('sets isLoggedIn to false when the user logs out', () => {
    const { store } = renderHeader({
      user: { email: 'test@example.com', password: 'password123' },
      isLoggedIn: true,
    });

    fireEvent.click(screen.getByRole('link', { name: /logout/i }));

    expect(store.getState().auth.isLoggedIn).toBe(false);
  });
});
