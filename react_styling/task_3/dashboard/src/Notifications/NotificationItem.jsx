import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const { id, type = 'default', html, value, markAsRead } = this.props;
    const colorClass =
      type === 'urgent'
        ? 'text-(--urgent-notification-item)'
        : 'text-(--default-notification-item)';

    const handleClick = () => {
      if (typeof markAsRead === 'function') {
        markAsRead(id);
      }
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={colorClass}
          onClick={handleClick}
          dangerouslySetInnerHTML={html}
        />
      );
    }

    return (
      <li data-notification-type={type} className={colorClass} onClick={handleClick}>
        {value}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  id: null,
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
};

export default NotificationItem;
