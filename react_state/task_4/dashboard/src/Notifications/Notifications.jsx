import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

import { PureComponent, Fragment } from 'react';

class Notifications extends PureComponent {
  render() {
    const {
      notifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

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
        )}
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;
