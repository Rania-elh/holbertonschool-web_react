import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login paragraph', () => {
  render(<App />);
  const login = screen.getByText(/login to access the full dashboard/i);
  expect(login).toBeInTheDocument();
});

test('renders the copyright footer', () => {
  render(<App />);
  const footer = screen.getByText(/copyright/i);
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
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});
