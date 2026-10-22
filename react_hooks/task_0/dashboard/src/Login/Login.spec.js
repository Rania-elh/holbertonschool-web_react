import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 submit input', () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll('label')).toHaveLength(2);
    expect(container.querySelectorAll('input[type="email"]')).toHaveLength(1);
    expect(container.querySelectorAll('input[type="password"]')).toHaveLength(1);
    expect(container.querySelectorAll('input[type="submit"]')).toHaveLength(1);
  });

  test('focuses the email input when its label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email/i);
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });

  test('focuses the password input when its label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    const passwordLabel = screen.getByText(/password:/i);
    const passwordInput = screen.getByLabelText(/password/i);
    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });

  test('disables the submit button by default', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
  });

  test('enables the submit button when email and password meet the required criteria', async () => {
    const user = userEvent.setup();
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    expect(submitButton).toBeDisabled();

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');

    expect(submitButton).toBeEnabled();
  });

  test('calls the logIn prop with email and password when the form is submitted', async () => {
    const user = userEvent.setup();
    const logIn = jest.fn();
    render(<Login logIn={logIn} />);

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /ok/i }));

    expect(logIn).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
