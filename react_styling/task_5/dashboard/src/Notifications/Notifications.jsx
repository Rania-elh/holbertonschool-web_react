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
    const shouldBounce = notifications.length > 0 && !displayDrawer;

    return (
      <Fragment>
        <div
          className={`notification-title text-right${
            shouldBounce ? ' animate-bounce' : ''
          }`}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className="notification-items relative ml-auto w-1/4 border-2 border-dashed border-(--main-color) p-1.5 bg-white max-[912px]:fixed max-[912px]:inset-0 max-[912px]:z-50 max-[912px]:m-0 max-[912px]:h-screen max-[912px]:w-screen max-[912px]:border-none max-[912px]:p-3">
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
                <ul className="list-disc pl-5 max-[912px]:list-none max-[912px]:pl-0">
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
