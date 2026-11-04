import { memo, Fragment, useContext } from 'react';
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import {
  hideDrawer,
  markNotificationAsRead,
  showDrawer,
} from '../../features/notifications/notificationsSlice.js';
import '../../../styles/Notifications.css';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem.jsx';

function NotificationsView({
  notifications = [],
  displayDrawer = false,
  handleDisplayDrawer = () => {},
  handleHideDrawer = () => {},
  markNotificationAsRead = () => {},
}) {
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

function NotificationsConnected() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const displayDrawer = useSelector((state) => state.notifications.displayDrawer);

  return (
    <NotificationsView
      notifications={notifications}
      displayDrawer={displayDrawer}
      handleDisplayDrawer={() => dispatch(showDrawer())}
      handleHideDrawer={() => dispatch(hideDrawer())}
      markNotificationAsRead={(id) => dispatch(markNotificationAsRead(id))}
    />
  );
}

function Notifications(props) {
  const redux = useContext(ReactReduxContext);
  const hasProps = props.notifications !== undefined
    || props.displayDrawer !== undefined
    || props.markNotificationAsRead !== undefined;

  if (hasProps || !redux) {
    return <NotificationsView {...props} />;
  }

  return <NotificationsConnected />;
}

export default memo(Notifications);
