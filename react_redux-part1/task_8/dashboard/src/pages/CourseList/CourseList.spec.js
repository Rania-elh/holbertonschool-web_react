import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import CourseList from './CourseList';

jest.mock('axios', () => require('jest-mock-axios'));
import coursesReducer, { fetchCourses } from '../../features/courses/coursesSlice';
import { logout } from '../../features/auth/authSlice';

const courses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

function renderCourseList(preloadedCourses = []) {
  const store = configureStore({
    reducer: { courses: coursesReducer },
    preloadedState: {
      courses: { courses: preloadedCourses },
    },
  });

  const view = render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  return { store, ...view };
}

describe('CourseList component', () => {
  test('displays the courses list returned by the API', async () => {
    const { store } = renderCourseList();

    await act(async () => {
      const request = store.dispatch(fetchCourses());
      mockAxios.mockResponse({ data: courses });
      await request;
    });

    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  test('resets the courses array when the logout action is dispatched', () => {
    const { store } = renderCourseList(courses);

    expect(screen.getByText('ES6')).toBeInTheDocument();

    act(() => {
      store.dispatch(logout());
    });

    expect(screen.getByText('No course available yet')).toBeInTheDocument();
    expect(store.getState().courses.courses).toEqual([]);
  });
});
