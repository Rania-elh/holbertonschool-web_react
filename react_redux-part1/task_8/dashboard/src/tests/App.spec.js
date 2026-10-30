import { render, screen, act, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import App from '../App';
import rootReducer from '../app/rootReducer';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'Old urgent notification' },
];

function renderApp(isLoggedIn) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      auth: {
        user: { email: '', password: '' },
        isLoggedIn,
      },
    },
  });

  const view = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return { store, ...view };
}

describe('App component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    console.log.mockRestore();
  });

  test('displays the Login component when isLoggedIn is false', async () => {
    renderApp(false);

    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/available courses/i)).not.toBeInTheDocument();

    await act(async () => {
      mockAxios.mockResponse({ data: [] });
    });
  });

  test('displays the CourseList component when isLoggedIn is true', async () => {
    renderApp(true);

    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/login to access the full dashboard/i)
    ).not.toBeInTheDocument();

    await act(async () => {
      mockAxios.mockResponseFor(
        { url: 'http://localhost:5173/notifications.json' },
        { data: [] }
      );
      mockAxios.mockResponseFor(
        { url: 'http://localhost:5173/courses.json' },
        { data: [] }
      );
    });
  });

  test('displays notification items when notifications are fetched on mount', async () => {
    renderApp(false);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://localhost:5173/notifications.json'
    );

    await act(async () => {
      mockAxios.mockResponse({ data: notifications });
    });

    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });
});
