import { getFilteredNotifications } from '../selectors/notificationSelector';

const notifications = [
  { id: '1', type: 'default', isRead: false, value: 'New course available' },
  { id: '2', type: 'urgent', isRead: false, value: 'New resume available' },
  { id: '3', type: 'urgent', isRead: false, value: 'Old urgent notification' },
];

const state = {
  notifications: {
    notifications,
    loading: false,
  },
};

describe('getFilteredNotifications', () => {
  test('returns every notification when the filter is all', () => {
    expect(getFilteredNotifications(state, 'all')).toEqual(notifications);
    expect(getFilteredNotifications(state, 'all')).toBe(notifications);
  });

  test('returns only urgent or default notifications for those filters', () => {
    expect(getFilteredNotifications(state, 'urgent')).toEqual([
      notifications[1],
      notifications[2],
    ]);
    expect(getFilteredNotifications(state, 'default')).toEqual([
      notifications[0],
    ]);
  });

  test('returns the same array reference when the inputs do not change', () => {
    const firstUrgent = getFilteredNotifications(state, 'urgent');
    const secondUrgent = getFilteredNotifications(state, 'urgent');

    expect(secondUrgent).toBe(firstUrgent);
  });
});
