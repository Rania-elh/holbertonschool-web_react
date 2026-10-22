import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import newContext from '../Context/context';

describe('Footer component', () => {
  test('renders "Copyright {currentYear} - Holberton School" in a p element', () => {
    render(
      <newContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Footer />
      </newContext.Provider>
    );
    const expectedText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    const paragraph = screen.getByText(expectedText);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });

  test('does not display the "Contact us" link when the user is logged out', () => {
    render(
      <newContext.Provider
        value={{
          user: { email: '', password: '', isLoggedIn: false },
          logOut: () => {},
        }}
      >
        <Footer />
      </newContext.Provider>
    );
    expect(screen.queryByRole('link', { name: /contact us/i })).not.toBeInTheDocument();
  });

  test('displays the "Contact us" link when the user is logged in', () => {
    render(
      <newContext.Provider
        value={{
          user: {
            email: 'test@example.com',
            password: 'password123',
            isLoggedIn: true,
          },
          logOut: () => {},
        }}
      >
        <Footer />
      </newContext.Provider>
    );
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
  });
});
