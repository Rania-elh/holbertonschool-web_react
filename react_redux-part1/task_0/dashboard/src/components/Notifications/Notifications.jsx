import '../../../styles/Notifications.css';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import { memo, Fragment } from 'react';

function Notifications(props) {
  const {
    notifications = [],
    displayDrawer = false,
    handleDisplayDrawer = () => {},
    handleHideDrawer = () => {},
    markNotificationAsRead = () => {},
  } = props;

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
