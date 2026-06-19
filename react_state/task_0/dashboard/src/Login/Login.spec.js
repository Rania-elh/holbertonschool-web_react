import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll('label')).toHaveLength(2);
    expect(container.querySelectorAll('input')).toHaveLength(2);
    expect(container.querySelectorAll('button')).toHaveLength(1);
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
});
