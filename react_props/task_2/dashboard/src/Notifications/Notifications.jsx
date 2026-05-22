import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({ notifications = [] }) {
  return (
    <div className="notification-items">
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
            type={type}
            value={value}
            html={html}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
