import { memo } from 'react';

function NotificationItem({
  id = null,
  type = 'default',
  value = '',
  markAsRead = () => {},
}) {
  const style = {
    color: type === 'urgent' ? 'red' : 'blue',
  };

  const handleClick = () => {
    markAsRead(id);
  };

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

export default memo(NotificationItem);
