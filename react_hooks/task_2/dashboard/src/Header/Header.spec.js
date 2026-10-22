import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import newContext from '../Context/context';

describe('Header component', () => {
  test('contains the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
    expect(logo.getAttribute('src')).toMatch(/holberton-logo/i);
  });

  test('contains the h1 heading with the correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('School dashboard');
  });

  test('does not render the logoutSection when using the default context value', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('#logoutSection')).toBeNull();
  });

  test('renders the logoutSection when the user is logged in', () => {
    const user = {
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true,
    };

    const { container } = render(
      <newContext.Provider value={{ user, logOut: () => {} }}>
        <Header />
      </newContext.Provider>
    );

    expect(container.querySelector('#logoutSection')).toBeInTheDocument();
    expect(screen.getByText(/welcome test@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
  });

  test('calls logOut when the logout link is clicked', () => {
    const logOut = jest.fn();
    const user = {
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true,
    };

    render(
      <newContext.Provider value={{ user, logOut }}>
        <Header />
      </newContext.Provider>
    );

    fireEvent.click(screen.getByRole('link', { name: /logout/i }));

    expect(logOut).toHaveBeenCalled();
  });
});
