import mockAxios from 'jest-mock-axios';
import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from '../notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';

afterEach(() => {
  mockAxios.reset();
});

const initialState = {
  notifications: [],
  displayDrawer: true,
};

const apiNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'Outdated notification' },
];

const fetchedNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  {
    id: 3,
    type: 'urgent',
    value: 'Outdated notification',
    html: { __html: getLatestNotification() },
  },
];

describe('notificationsSlice', () => {
  test('returns the correct initial state by default', () => {
    expect(notificationsReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  test('fetches notifications data correctly', async () => {
    const dispatch = jest.fn();
    const thunkPromise = fetchNotifications()(dispatch, () => ({}), undefined);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://localhost:5173/notifications.json'
    );

    mockAxios.mockResponse({ data: apiNotifications });

    const action = await thunkPromise;
    const state = notificationsReducer(initialState, action);

    expect(action.type).toBe('notifications/fetchNotifications/fulfilled');
    expect(action.payload).toEqual(fetchedNotifications);
    expect(state.notifications).toEqual(fetchedNotifications);
    expect(state.displayDrawer).toBe(true);
  });

  test('removes a notification when markNotificationAsRead is dispatched', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const stateWithNotifications = {
      notifications: fetchedNotifications,
      displayDrawer: true,
    };

    const state = notificationsReducer(
      stateWithNotifications,
      markNotificationAsRead(1)
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );
    expect(state.notifications).toEqual([
      fetchedNotifications[1],
      fetchedNotifications[2],
    ]);

    consoleSpy.mockRestore();
  });

  test('toggles displayDrawer when showDrawer and hideDrawer are dispatched', () => {
    const hiddenState = notificationsReducer(initialState, hideDrawer());
    expect(hiddenState.displayDrawer).toBe(false);
    expect(hiddenState.notifications).toEqual([]);

    const shownState = notificationsReducer(hiddenState, showDrawer());
    expect(shownState.displayDrawer).toBe(true);
  });
});
