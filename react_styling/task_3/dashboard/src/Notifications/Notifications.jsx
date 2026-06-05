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
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <Fragment>
        <div className="notification-title text-right">Your notifications</div>
        {displayDrawer && (
          <div className="notification-items relative ml-auto w-1/4 border-2 border-dashed border-(--main-color) p-1.5">
            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <Fragment>
                <p>Here is the list of notifications</p>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => console.log('Close button has been clicked')}
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
};

export default Notifications;
