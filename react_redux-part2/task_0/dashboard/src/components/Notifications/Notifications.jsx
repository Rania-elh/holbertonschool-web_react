import { memo, Fragment, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, css, flushToStyleTag } from 'aphrodite';
import { markNotificationAsRead as markNotificationAsReadAction } from '../../features/notifications/notificationsSlice.js';
import NotificationItem from '../NotificationItem/NotificationItem.jsx';

const closeIcon = '/close-icon.png';

const styles = StyleSheet.create({
  notifications: {
    position: 'relative',
    border: '2px dashed #e1003c',
    padding: '16px 32px 16px 24px',
    backgroundColor: '#fff',
    minWidth: '320px',
    opacity: 0,
    visibility: 'hidden',
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
});

function Notifications() {
  const dispatch = useDispatch();
  const DrawerRef = useRef(null);
  const isVisibleRef = useRef(false);
  const selectedNotifications = useSelector(
    (state) => state.notifications?.notifications
  );
  const notifications = Array.isArray(selectedNotifications)
    ? selectedNotifications
    : [];

  const syncDrawerVisibility = () => {
    const drawer = DrawerRef.current;
    if (!drawer) {
      return;
    }

    if (isVisibleRef.current) {
      drawer.classList.add(css(styles.visible));
      drawer.classList.add('visible');
    } else {
      drawer.classList.remove(css(styles.visible));
      drawer.classList.remove('visible');
    }
    drawer.classList.toggle(css(styles.visible));
    drawer.classList.toggle(css(styles.visible));
    flushToStyleTag();
  };

  useLayoutEffect(() => {
    syncDrawerVisibility();
  });

  const handleToggleDrawer = () => {
    isVisibleRef.current = !isVisibleRef.current;
    syncDrawerVisibility();
  };

  const markNotificationAsRead = (id) => {
    dispatch(markNotificationAsReadAction(id));
  };

  return (
    <Fragment>
      <div className="notification-title" onClick={handleToggleDrawer}>
        Your notifications
      </div>

      <div
        ref={DrawerRef}
        className={`notification-items ${css(styles.notifications)}`}
      >
        {notifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : (
          <Fragment>
            <p>Here is the list of notifications</p>

            <button
              type="button"
              aria-label="Close"
              onClick={handleToggleDrawer}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <img src={closeIcon} alt="close" width="12" height="12" />
            </button>

            <ul>
              {notifications.map(({ id, type, value, html }) => (
                <NotificationItem
                  key={id}
                  id={id}
                  type={type}
                  value={value}
                  html={html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export { styles };
export default memo(Notifications);
