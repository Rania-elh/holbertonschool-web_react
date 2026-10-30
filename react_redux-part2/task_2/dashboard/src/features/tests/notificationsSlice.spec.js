import mockAxios from 'jest-mock-axios';
import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
} from '../notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';

jest.mock('axios', () => require('jest-mock-axios'));

afterEach(() => {
  mockAxios.reset();
});

const initialState = {
  notifications: [],
  loading: false,
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
    expect(state.loading).toBe(false);
    expect(state).toEqual({
      notifications: fetchedNotifications,
      loading: false,
    });
  });

  test('sets loading while fetchNotifications is pending and clears it when the request settles', () => {
    const pendingState = notificationsReducer(initialState, {
      type: fetchNotifications.pending.type,
    });

    expect(pendingState.loading).toBe(true);
    expect(pendingState.notifications).toEqual([]);

    const fulfilledState = notificationsReducer(pendingState, {
      type: fetchNotifications.fulfilled.type,
      payload: fetchedNotifications,
    });

    expect(fulfilledState.loading).toBe(false);
    expect(fulfilledState.notifications).toEqual(fetchedNotifications);

    const rejectedState = notificationsReducer(pendingState, {
      type: fetchNotifications.rejected.type,
    });

    expect(rejectedState.loading).toBe(false);
    expect(rejectedState.notifications).toEqual([]);
  });

  test('removes a notification when markNotificationAsRead is dispatched', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const stateWithNotifications = {
      notifications: fetchedNotifications,
      loading: false,
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
    expect(state.loading).toBe(false);

    consoleSpy.mockRestore();
  });
});
