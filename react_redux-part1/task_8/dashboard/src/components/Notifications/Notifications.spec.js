import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import Notifications from './Notifications';
import notificationsReducer, {
  fetchNotifications,
} from '../../features/notifications/notificationsSlice';

const apiNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'Old urgent notification' },
];

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

  test('sets displayDrawer to false when the drawer is closed', () => {
    const { store } = renderNotifications({
      notifications: apiNotifications,
      displayDrawer: true,
    });

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(store.getState().notifications.displayDrawer).toBe(false);
    expect(screen.queryByText('New course available')).not.toBeInTheDocument();
  });

  test('sets displayDrawer to true when the drawer is opened', () => {
    const { store } = renderNotifications({
      notifications: apiNotifications,
      displayDrawer: false,
    });

    fireEvent.click(screen.getByText(/your notifications/i));

    expect(store.getState().notifications.displayDrawer).toBe(true);
    expect(screen.getByText('New course available')).toBeInTheDocument();
  });

  test('removes a notification from the list when it is marked as read', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { store } = renderNotifications({
      notifications: apiNotifications,
      displayDrawer: true,
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
