import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('checks the existence of 2 labels, 2 inputs and 1 button', () => {
  const { container } = render(<Login />);
  expect(container.querySelectorAll('label')).toHaveLength(2);
  expect(container.querySelectorAll('input')).toHaveLength(2);
  expect(container.querySelectorAll('button')).toHaveLength(1);
});

test('checks whether the email input gets focused when its label is clicked', async () => {
  const user = userEvent.setup();
  render(<Login />);
  await user.click(screen.getByText(/email:/i));
  expect(screen.getByLabelText(/email/i)).toHaveFocus();
});

test('checks whether the password input gets focused when its label is clicked', async () => {
  const user = userEvent.setup();
  render(<Login />);
  await user.click(screen.getByText(/password:/i));
  expect(screen.getByLabelText(/password/i)).toHaveFocus();
});
