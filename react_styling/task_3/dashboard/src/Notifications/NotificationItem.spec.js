import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('renders a blue li with data-notification-type="default" when type is "default"', () => {
    render(
      <ul>
        <NotificationItem type="default" value="New course available" />
      </ul>
    );
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'default');
    expect(item).toHaveTextContent('New course available');
  });

  test('renders a red li with data-notification-type="urgent" when type is "urgent"', () => {
    render(
      <ul>
        <NotificationItem type="urgent" value="New resume available" />
      </ul>
    );
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
    expect(item).toHaveTextContent('New resume available');
  });

  test('calls markAsRead prop when the li is clicked', () => {
    const markAsRead = jest.fn();
    render(
      <ul>
        <NotificationItem
          id={1}
          type="default"
          value="New course available"
          markAsRead={markAsRead}
        />
      </ul>
    );

    fireEvent.click(screen.getByRole('listitem'));
    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
