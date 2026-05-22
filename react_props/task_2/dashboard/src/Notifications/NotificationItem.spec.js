import { render, screen } from '@testing-library/react';
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
    expect(item).toHaveStyle({ color: 'blue' });
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
    expect(item).toHaveStyle({ color: 'red' });
    expect(item).toHaveTextContent('New resume available');
  });
});
