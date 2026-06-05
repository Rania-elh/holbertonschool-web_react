import { Component } from 'react';

class NotificationItem extends Component {
  render() {
    const { id, type = 'default', html, value, markAsRead } = this.props;
    const style = { color: type === 'urgent' ? 'red' : 'blue' };

    const handleClick = () => {
      if (typeof markAsRead === 'function') {
        markAsRead(id);
      }
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          style={style}
          onClick={handleClick}
          dangerouslySetInnerHTML={html}
        />
      );
    }

    return (
      <li data-notification-type={type} style={style} onClick={handleClick}>
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
