import { render, screen } from '@testing-library/react';
import Header from './Header';

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
});
