import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { logout } from '../auth/authSlice.js';

const API_BASE_URL = 'http://localhost:5173';

const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

const initialState = {
  courses: [],
};

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await axios.get(ENDPOINTS.courses);
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourse(state, action) {
      const courseId = String(action.payload);
      const course = state.courses.find((item) => String(item.id) === courseId);
      if (course) {
        course.isSelected = true;
      }
    },
    unSelectCourse(state, action) {
      const courseId = String(action.payload);
      const course = state.courses.find((item) => String(item.id) === courseId);
      if (course) {
        course.isSelected = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload.map((course) => ({
          ...course,
          isSelected: false,
        }));
      })
      .addCase(logout, () => ({
        courses: [],
      }));
  },
});

export const { selectCourse, unSelectCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
