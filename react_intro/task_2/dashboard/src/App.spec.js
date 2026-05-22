import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the login paragraph with case-insensitive match', () => {
    render(<App />);
    expect(
      screen.getByText(/login to access the full dashboard/i),
    ).toBeInTheDocument();
  });

  test('renders 2 inputs for email and password', () => {
    render(<App />);
    const inputs = screen.getAllByLabelText(/email|password/i);
    expect(inputs).toHaveLength(2);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders a button with the text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /^ok$/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
});
