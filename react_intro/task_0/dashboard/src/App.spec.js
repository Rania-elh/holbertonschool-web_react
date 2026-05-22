import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the h1 with text School dashboard', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /school dashboard/i }),
  ).toBeInTheDocument();
});

test('renders the login paragraph', () => {
  render(<App />);
  expect(
    screen.getByText(/login to access the full dashboard/i),
  ).toBeInTheDocument();
});

test('renders the footer with Holberton School copyright', () => {
  render(<App />);
  expect(screen.getByText(/holberton school/i)).toBeInTheDocument();
  expect(screen.getByText(/copyright/i)).toBeInTheDocument();
});

test('renders an img element with a logo alt text', () => {
  render(<App />);
  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
});
