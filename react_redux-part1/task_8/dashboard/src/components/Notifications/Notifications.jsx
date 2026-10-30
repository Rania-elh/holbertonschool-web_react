import { memo, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideDrawer,
  markNotificationAsRead as markNotificationAsReadAction,
  showDrawer,
} from '../../features/notifications/notificationsSlice.js';
import './Notifications.css';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem.jsx';

function Notifications() {
  const dispatch = useDispatch();
  const selectedNotifications = useSelector(
    (state) => state.notifications?.notifications
  );
  const notifications = Array.isArray(selectedNotifications)
    ? selectedNotifications
    : [];
  const displayDrawer = useSelector(
    (state) => state.notifications?.displayDrawer ?? true
  );

  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  const markNotificationAsRead = (id) => {
    dispatch(markNotificationAsReadAction(id));
  };

  return (
    <Fragment>
      <div
        className="notification-title"
        onClick={handleDisplayDrawer}
      >
        Your notifications
      </div>

      {displayDrawer && (
        <div className="notification-items">
          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <Fragment>
              <p>Here is the list of notifications</p>

              <button
                type="button"
                aria-label="Close"
                onClick={handleHideDrawer}
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
                <img
                  src={closeIcon}
                  alt="close"
                  width="12"
                  height="12"
                />
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
      )}
    </Fragment>
  );
}

export default memo(Notifications);
