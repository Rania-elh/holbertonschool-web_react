import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

test('renders the notifications title', () => {
  render(<Notifications />);
  expect(
    screen.getByText(/here is the list of notifications/i),
  ).toBeInTheDocument();
});

test('renders 3 notification list items', () => {
  render(<Notifications />);
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(3);
});

test('renders a close button', () => {
  render(<Notifications />);
  expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
});

test('logs a message when the close button is clicked', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<Notifications />);
  fireEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringMatching(/close button has been clicked|hello holbies/i),
  );
  consoleSpy.mockRestore();
});
