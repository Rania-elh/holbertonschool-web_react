import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('Notifications component', () => {
  describe('when displayDrawer is false (default)', () => {
    test('always displays the "Your notifications" title', () => {
      render(<Notifications />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });

    test('does not display the close button', () => {
      render(<Notifications notifications={notifications} />);
      expect(
        screen.queryByRole('button', { name: /close/i })
      ).not.toBeInTheDocument();
    });

    test('does not display the "Here is the list of notifications" text', () => {
      render(<Notifications notifications={notifications} />);
      expect(
        screen.queryByText(/here is the list of notifications/i)
      ).not.toBeInTheDocument();
    });

    test('does not display the notification items', () => {
      render(<Notifications notifications={notifications} />);
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true', () => {
    test('displays the "Your notifications" title', () => {
      render(<Notifications displayDrawer={true} notifications={notifications} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });

    test('displays the close button', () => {
      render(<Notifications displayDrawer={true} notifications={notifications} />);
      expect(
        screen.getByRole('button', { name: /close/i })
      ).toBeInTheDocument();
    });

    test('displays the "Here is the list of notifications" text', () => {
      render(<Notifications displayDrawer={true} notifications={notifications} />);
      expect(
        screen.getByText(/here is the list of notifications/i)
      ).toBeInTheDocument();
    });

    test('displays the 3 notification items with the correct content', () => {
      render(<Notifications displayDrawer={true} notifications={notifications} />);
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(3);
      expect(items[0]).toHaveTextContent('New course available');
      expect(items[1]).toHaveTextContent('New resume available');
      expect(items[2].innerHTML).toBe(getLatestNotification());
      expect(screen.getByText(/complete by EOD/i)).toBeInTheDocument();
    });

    test('logs "Close button has been clicked" when the close button is clicked', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      render(<Notifications displayDrawer={true} notifications={notifications} />);
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
      consoleSpy.mockRestore();
    });

    test('logs "Notification {id} has been marked as read" when a notification item is clicked', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      render(<Notifications displayDrawer={true} notifications={notifications} />);

      const items = screen.getAllByRole('listitem');
      fireEvent.click(items[0]);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Notification 1 has been marked as read'
      );
      consoleSpy.mockRestore();
    });
  });

  describe('when displayDrawer is true and notifications prop is empty', () => {
    test('still displays the "Your notifications" title', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });

    test('displays the "No new notification for now" text', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(
        screen.getByText(/no new notification for now/i)
      ).toBeInTheDocument();
    });

    test('does not display the "Here is the list of notifications" text', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(
        screen.queryByText(/here is the list of notifications/i)
      ).not.toBeInTheDocument();
    });

    test('does not display any notification items', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });
});
