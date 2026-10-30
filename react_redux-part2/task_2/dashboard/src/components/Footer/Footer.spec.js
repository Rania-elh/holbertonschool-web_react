import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Footer from './Footer';
import authReducer from '../../features/auth/authSlice';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

function renderFooter(isLoggedIn) {
  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState: {
      auth: {
        user: { email: '', password: '' },
        isLoggedIn,
      },
    },
  });

  return render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
}

describe('Footer component', () => {
  test('displays the copyright text', () => {
    renderFooter(false);

    expect(
      screen.getByText(
        `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`
      )
    ).toBeInTheDocument();
  });

  test('displays the Contact us link when isLoggedIn is true', () => {
    renderFooter(true);
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
  });

  test('does not display the Contact us link when isLoggedIn is false', () => {
    renderFooter(false);
    expect(
      screen.queryByRole('link', { name: /contact us/i })
    ).not.toBeInTheDocument();
  });
});
