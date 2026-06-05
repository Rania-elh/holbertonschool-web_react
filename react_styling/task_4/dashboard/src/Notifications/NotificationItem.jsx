import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const { id, type = 'default', html, value, markAsRead } = this.props;
    const colorClass =
      type === 'urgent'
        ? 'text-(--urgent-notification-item)'
        : 'text-(--default-notification-item)';
    const responsiveClass =
      'max-[912px]:text-xl max-[912px]:py-3 max-[912px]:border-b max-[912px]:border-gray-300';
    const itemClass = `${colorClass} ${responsiveClass}`;

    const handleClick = () => {
      if (typeof markAsRead === 'function') {
        markAsRead(id);
      }
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={itemClass}
          onClick={handleClick}
          dangerouslySetInnerHTML={html}
        />
      );
    }

    return (
      <li data-notification-type={type} className={itemClass} onClick={handleClick}>
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
