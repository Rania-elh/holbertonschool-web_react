import { Fragment, useState, useCallback, useEffect } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
import { getLatestNotification, logNotificationAsRead } from '../utils/utils';
import newContext, { defaultUser } from '../Context/context';

const CourseListWithLogging = WithLogging(CourseList);
const LoginWithLogging = WithLogging(Login);

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(defaultUser);
  const [notifications, setNotifications] = useState(notificationsList);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    logNotificationAsRead(id);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'h') {
        alert('Logging you out');
        logOut();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [logOut]);

  const contextValue = { user, logOut };

  return (
    <newContext.Provider value={contextValue}>
      <Fragment>
        <div className="root-notifications">
          <Notifications
            notifications={notifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>

        <Header />

        {user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWithLogging courses={coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <LoginWithLogging
              logIn={logIn}
              email={user.email}
              password={user.password}
            />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>

        <Footer />
      </Fragment>
    </newContext.Provider>
  );
}

export default App;
