import { memo, Fragment, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { markNotificationAsRead as markNotificationAsReadAction } from '../../features/notifications/notificationsSlice.js';
import { getFilteredNotifications } from '../../features/selectors/notificationSelector.js';
import NotificationItem from '../NotificationItem/NotificationItem.jsx';

const closeIcon = '/close-icon.png';

const styles = StyleSheet.create({
  notifications: {
    position: 'relative',
    border: '2px dashed #e1003c',
    padding: '16px 32px 16px 24px',
    backgroundColor: '#fff',
    minWidth: '320px',
    opacity: 0,
    visibility: 'hidden',
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
});

function Notifications() {
  const dispatch = useDispatch();
  const DrawerRef = useRef(null);
  const [currentFilter, setCurrentFilter] = useState('all');
  const filteredNotifications = useSelector((state) =>
    getFilteredNotifications(state, currentFilter)
  );
  const loading = useSelector(
    (state) => state.notifications?.loading ?? false
  );

  const handleToggleDrawer = () => {
    const drawer = DrawerRef.current;
    if (!drawer) {
      return;
    }

    const visibleClass = css(styles.visible);
    if (drawer.classList.contains(visibleClass)) {
      drawer.classList.remove(visibleClass);
    } else {
      drawer.classList.add(visibleClass);
    }
  };

  const handleSetFilterUrgent = () => {
    setCurrentFilter((filter) => (filter === 'urgent' ? 'all' : 'urgent'));
  };

  const handleSetFilterDefault = () => {
    setCurrentFilter((filter) => (filter === 'default' ? 'all' : 'default'));
  };

  const markNotificationAsRead = (id) => {
    dispatch(markNotificationAsReadAction(id));
  };

  return (
    <Fragment>
      <div className="notification-title" onClick={handleToggleDrawer}>
        Your notifications
      </div>

      <div
        ref={DrawerRef}
        className={`notification-items ${css(styles.notifications)} ${css(styles.visible)}`}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            <p>
              {filteredNotifications.length === 0
                ? 'No new notification for now'
                : 'Here is the list of notifications'}
            </p>

            <button
              type="button"
              aria-label="Close"
              onClick={handleToggleDrawer}
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

            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button
                type="button"
                aria-label="Urgent"
                aria-pressed={currentFilter === 'urgent'}
                onClick={handleSetFilterUrgent}
              >
                ‼️
              </button>
              <button
                type="button"
                aria-label="Default"
                aria-pressed={currentFilter === 'default'}
                onClick={handleSetFilterDefault}
              >
                💠
              </button>
            </div>

            {filteredNotifications.length > 0 && (
              <ul>
                {filteredNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    markAsRead={markNotificationAsRead}
                  />
                ))}
              </ul>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export { styles };
export default memo(Notifications);
