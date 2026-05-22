import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notifications component', () => {
  test('renders the notifications title "Here is the list of notifications"', () => {
    render(<Notifications notifications={notifications} />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders a close button element', () => {
    render(<Notifications notifications={notifications} />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders 3 li elements with the appropriate text from the notifications prop', () => {
    render(<Notifications notifications={notifications} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('New course available');
    expect(items[1]).toHaveTextContent('New resume available');
    expect(items[2].innerHTML).toBe(getLatestNotification());
  });

  test('logs "Close button has been clicked" when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={notifications} />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  test('renders no list items when notifications prop is not provided', () => {
    render(<Notifications />);
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });
});
