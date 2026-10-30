import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173';

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await axios.get(ENDPOINTS.notifications);
    const notifications = response.data
      .filter((notification) => notification?.context?.isRead === false)
      .map((notification) => ({
        id: notification.id,
        type: notification.context.type,
        isRead: notification.context.isRead,
        value: notification.context.value,
      }));

    return notifications;
  }
);

const initialState = {
  notifications: [],
  loading: false,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markNotificationAsRead(state, action) {
      console.log(`Notification ${action.payload} has been marked as read`);
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
        state.loading = false;
      })
      .addCase(fetchNotifications.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { markNotificationAsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;
