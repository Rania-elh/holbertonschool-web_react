import mockAxios from 'jest-mock-axios';
import coursesReducer, { fetchCourses } from '../courses/coursesSlice';

jest.mock('axios', () => require('jest-mock-axios'));
import { logout } from '../auth/authSlice';

afterEach(() => {
  mockAxios.reset();
});

const initialState = {
  courses: [],
};

const courses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('coursesSlice', () => {
  test('returns the correct initial state by default', () => {
    expect(coursesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('fetches courses data correctly', async () => {
    const dispatch = jest.fn();
    const thunkPromise = fetchCourses()(dispatch, () => ({}), undefined);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://localhost:5173/courses.json'
    );

    mockAxios.mockResponse({ data: courses });

    const action = await thunkPromise;
    const state = coursesReducer(initialState, action);

    expect(action.type).toBe('courses/fetchCourses/fulfilled');
    expect(action.payload).toEqual(courses);
    expect(state.courses).toEqual(courses);
  });

  test('resets the courses array to empty when logout is dispatched', () => {
    const loadedState = { courses };
    const state = coursesReducer(loadedState, logout());

    expect(state).toEqual(initialState);
    expect(state.courses).toEqual([]);
  });
});
