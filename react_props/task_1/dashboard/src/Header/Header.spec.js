import { render, screen } from '@testing-library/react';
import Header from './Header';

test('checks for the Holberton logo', () => {
  render(<Header />);
  const logo = screen.getByAltText(/holberton logo/i);
  expect(logo).toBeInTheDocument();
  expect(logo.tagName).toBe('IMG');
  expect(logo.getAttribute('src')).toMatch(/holberton-logo/i);
});

test('checks for a heading element with the appropriate text', () => {
  render(<Header />);
  const heading = screen.getByRole('heading', {
    level: 1,
    name: /school dashboard/i,
  });
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toBe('School dashboard');
});
