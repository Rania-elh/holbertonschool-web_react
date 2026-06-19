import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

import { Component, Fragment } from 'react';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length
      || nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const {
      notifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
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
                      markAsRead={this.markAsRead}
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
};

export default Notifications;
