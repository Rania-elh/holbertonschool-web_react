import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173';

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export function toUnreadNotifications(payload) {
  const notifications = Array.isArray(payload)
    ? payload
    : payload?.notifications ?? payload?.data ?? [];

  if (!Array.isArray(notifications)) {
    return [];
  }

  return notifications
    .filter((notification) => {
      if (notification?.context) {
        return notification.context.isRead === false;
      }
      return notification?.isRead !== true;
    })
    .map((notification) => {
      if (!notification?.context) {
        return notification;
      }

      return {
        ...notification,
        id: notification.id,
        type: notification.context.type,
        isRead: notification.context.isRead,
        value: notification.context.value,
      };
    });
}

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await axios.get(ENDPOINTS.notifications);
    return toUnreadNotifications(response.data);
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
        const unread = toUnreadNotifications(action.payload).filter(
          (notification) => {
            if (notification?.context) {
              return notification.context.isRead === false;
            }
            return notification?.isRead !== true;
          }
        );
        state.notifications = unread;
        state.loading = false;
      })
      .addCase(fetchNotifications.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { markNotificationAsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;
