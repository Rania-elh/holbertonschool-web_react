import { createSelector } from '@reduxjs/toolkit';

const EMPTY_NOTIFICATIONS = [];

const selectNotifications = (state) =>
  state.notifications?.notifications ?? EMPTY_NOTIFICATIONS;

export const getFilteredNotifications = createSelector(
  [selectNotifications, (state, filter) => filter],
  (notifications, filter) => {
    if (filter === 'all') {
      return notifications;
    }

    return notifications.filter((notification) => notification.type === filter);
  }
);
