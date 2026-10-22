
import { memo } from 'react';

function NotificationItem(props) {
  const {
    id,
    type = 'default',
    html,
    value,
    markAsRead,
  } = props;

  const style = {
    color: type === 'urgent' ? 'red' : 'blue',
  };

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
    <li
      data-notification-type={type}
      style={style}
      onClick={handleClick}
    >
      {value}
    </li>
  );
}

NotificationItem.defaultProps = {
  id: null,
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
};

export default memo(NotificationItem);
