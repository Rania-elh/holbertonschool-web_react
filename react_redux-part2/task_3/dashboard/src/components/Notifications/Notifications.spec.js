import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StyleSheetTestUtils, css } from 'aphrodite';
import mockAxios from 'jest-mock-axios';
import Notifications, { styles } from './Notifications';

jest.mock('axios', () => require('jest-mock-axios'));
import notificationsReducer, {
  fetchNotifications,
} from '../../features/notifications/notificationsSlice';

const apiNotifications = [
  {
    id: 'read-1',
    context: {
      isRead: true,
      type: 'default',
      value: 'Already read notification',
    },
  },
  {
    id: '1',
    context: {
      isRead: false,
      type: 'default',
      value: 'New course available',
    },
  },
  {
    id: '2',
    context: {
      isRead: false,
      type: 'urgent',
      value: 'New resume available',
    },
  },
];

const storedNotifications = [
  { id: '1', type: 'default', isRead: false, value: 'New course available' },
  { id: '2', type: 'urgent', isRead: false, value: 'New resume available' },
  { id: '3', type: 'urgent', isRead: false, value: 'Old urgent notification' },
];

function visibleClassName() {
  return css(styles.visible).split(' ').filter(Boolean)[0];
}

function getDrawer() {
  const notificationsClass = css(styles.notifications).split(' ').filter(Boolean)[0];
  return document.getElementsByClassName(notificationsClass)[0];
}

function renderNotifications(preloadedState) {
  const store = configureStore({
    reducer: { notifications: notificationsReducer },
    preloadedState: preloadedState
      ? { notifications: preloadedState }
      : undefined,
  });

  const view = render(
    <Provider store={store}>
      <Notifications />
    </Provider>
  );

  return { store, ...view };
}

describe('Notifications component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('displays Loading... while notifications are fetched, then the unread list', async () => {
    const { store } = renderNotifications();
    let request;

    act(() => {
      request = store.dispatch(fetchNotifications());
    });

    expect(store.getState().notifications.loading).toBe(true);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    expect(screen.queryByText('New course available')).not.toBeInTheDocument();

    await act(async () => {
      mockAxios.mockResponse({ data: apiNotifications });
      await request;
    });

    expect(store.getState().notifications.loading).toBe(false);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.queryByText('Already read notification')).not.toBeInTheDocument();
  });

  test('hides the loading indicator when fetching notifications fails', async () => {
    const { store } = renderNotifications();
    let request;

    act(() => {
      request = store.dispatch(fetchNotifications());
    });

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await act(async () => {
      mockAxios.mockError({ message: 'Network Error' });
      await request;
    });

    expect(store.getState().notifications.loading).toBe(false);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  test('displays the notification items returned by the API', async () => {
    const { store } = renderNotifications();

    await act(async () => {
      const request = store.dispatch(fetchNotifications());
      mockAxios.mockResponse({ data: apiNotifications });
      await request;
    });

    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('toggles the displayed notifications between urgent and default', () => {
    renderNotifications({
      notifications: storedNotifications,
      loading: false,
    });

    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText('Old urgent notification')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Urgent' }));

    expect(screen.queryByText('New course available')).not.toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText('Old urgent notification')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Urgent' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    fireEvent.click(screen.getByRole('button', { name: 'Default' }));

    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.queryByText('New resume available')).not.toBeInTheDocument();
    expect(screen.queryByText('Old urgent notification')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Default' }));

    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText('Old urgent notification')).toBeInTheDocument();
  });

  test('toggles the Aphrodite visible class without re-rendering the drawer', () => {
    const { store } = renderNotifications({
      notifications: storedNotifications,
      loading: false,
    });
    const drawer = getDrawer();
    const visibleClass = visibleClassName();
    const stateBeforeToggle = store.getState();

    expect(drawer.classList.contains(visibleClass)).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(drawer.classList.contains(visibleClass)).toBe(false);
    expect(drawer.isConnected).toBe(true);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(store.getState()).toBe(stateBeforeToggle);

    fireEvent.click(screen.getByText(/your notifications/i));

    expect(drawer.classList.contains(visibleClass)).toBe(true);
    expect(store.getState()).toBe(stateBeforeToggle);
  });

  test('removes a notification from the list when it is marked as read', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { store } = renderNotifications({
      notifications: storedNotifications,
      loading: false,
    });

    fireEvent.click(screen.getByText('New course available'));

    expect(store.getState().notifications.notifications.map((item) => item.id)).toEqual([
      '2',
      '3',
    ]);
    expect(screen.queryByText('New course available')).not.toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
