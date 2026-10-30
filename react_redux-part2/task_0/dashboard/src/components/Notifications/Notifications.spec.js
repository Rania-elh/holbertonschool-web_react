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
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'Old urgent notification' },
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

  test('toggles the Aphrodite visible class without re-rendering the drawer', () => {
    const { store } = renderNotifications({
      notifications: apiNotifications,
    });
    const drawer = getDrawer();
    const visibleClass = visibleClassName();
    const stateBeforeToggle = store.getState();

    expect(drawer.classList.contains(visibleClass)).toBe(false);

    fireEvent.click(screen.getByText(/your notifications/i));

    expect(drawer.classList.contains(visibleClass)).toBe(true);
    expect(drawer.isConnected).toBe(true);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(store.getState()).toBe(stateBeforeToggle);

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(drawer.classList.contains(visibleClass)).toBe(false);
    expect(store.getState()).toBe(stateBeforeToggle);
  });

  test('removes a notification from the list when it is marked as read', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { store } = renderNotifications({
      notifications: apiNotifications,
    });

    fireEvent.click(screen.getByText('New course available'));

    expect(store.getState().notifications.notifications.map((item) => item.id)).toEqual([
      2,
      3,
    ]);
    expect(screen.queryByText('New course available')).not.toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
