import { Fragment, useReducer, useCallback, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css';
import Notifications from './components/Notifications/Notifications';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import CourseList from './pages/CourseList/CourseList';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import WithLogging from './components/HOC/WithLogging';
import { getLatestNotification } from './utils/utils';
import appReducer, { initialState, APP_ACTIONS } from './appReducer';

const CourseListWithLogging = WithLogging(CourseList);
const LoginWithLogging = WithLogging(Login);

const API_BASE_URL = 'http://localhost:5173';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleDisplayDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: true });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: false });
  }, []);

  const logIn = useCallback((email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password },
    });
  }, []);

  const logOut = useCallback(() => {
    const { displayDrawer, notifications, courses } = state;
    dispatch({ type: APP_ACTIONS.LOGOUT });
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: displayDrawer });
    dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, payload: notifications });
    dispatch({ type: APP_ACTIONS.SET_COURSES, payload: courses });
  }, [state]);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_READ,
      payload: id,
    });
  }, []);

  useEffect(() => {
    let mounted = true;

    axios.get(`${API_BASE_URL}/notifications.json`).then((response) => {
      if (!mounted) {
        return;
      }

      const notifications = response.data.map((notification) => {
        if (notification.id === 3) {
          return {
            ...notification,
            html: { __html: getLatestNotification() },
          };
        }
        return notification;
      });

      dispatch({
        type: APP_ACTIONS.SET_NOTIFICATIONS,
        payload: notifications,
      });
    });

    axios.get(`${API_BASE_URL}/courses.json`).then((response) => {
      if (!mounted) {
        return;
      }

      dispatch({
        type: APP_ACTIONS.SET_COURSES,
        payload: response.data,
      });
    });

    return () => {
      mounted = false;
    };
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

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications
          notifications={state.notifications}
          displayDrawer={state.displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
      </div>

      <Header user={state.user} logOut={logOut} />

      {state.user.isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseListWithLogging courses={state.courses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <LoginWithLogging
            logIn={logIn}
            email={state.user.email}
            password={state.user.password}
          />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer user={state.user} />
    </Fragment>
  );
}

export default App;
