import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login paragraph', () => {
  render(<App />);
  const login = screen.getByText(/login to access the full dashboard/i);
  expect(login).toBeInTheDocument();
});

test('renders the copyright footer', () => {
  render(<App />);
  const footerRegex = /copyright \d{4}.*holberton school/i;
  const footer = screen.getByText(footerRegex);
  expect(footer).toBeInTheDocument();
});

test('renders the title', () => {
  render(<App />);
  const title = screen.getByRole('heading', {
    level: 1,
    name: /school dashboard/i,
  });
  expect(title).toBeInTheDocument();
});

test('renders the logo', () => {
  render(<App />);
  const logo = screen.getByAltText(/holberton logo/i);
  expect(logo).toBeInTheDocument();
});
