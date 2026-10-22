import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders "Copyright {currentYear} - Holberton School" in a p element', () => {
    render(<Footer user={{ email: '', password: '', isLoggedIn: false }} />);
    const expectedText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    const paragraph = screen.getByText(expectedText);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });

  test('does not display the "Contact us" link when the user is logged out', () => {
    render(
      <Footer user={{ email: '', password: '', isLoggedIn: false }} />
    );
    expect(screen.queryByRole('link', { name: /contact us/i })).not.toBeInTheDocument();
  });

  test('displays the "Contact us" link when the user is logged in', () => {
    render(
      <Footer
        user={{
          email: 'test@example.com',
          password: 'password123',
          isLoggedIn: true,
        }}
      />
    );
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
  });
});
