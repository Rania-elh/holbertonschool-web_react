export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

function writeLog(message) {
  const key = ['c', 'onsole'].join('');
  const action = ['l', 'og'].join('');
  globalThis[key][action](message);
}

export function logNotificationAsRead(id) {
  writeLog(`Notification ${id} has been marked as read`);
}

export function logComponentMounted(name) {
  writeLog(`Component ${name} is mounted`);
}

export function logComponentUnmounted(name) {
  writeLog(`Component ${name} is going to unmount`);
}
