import { Fragment, useReducer, useCallback, useEffect } from 'react';
import './App.css';
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

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

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

  useEffect(() => {
    dispatch({
      type: APP_ACTIONS.SET_NOTIFICATIONS,
      payload: notificationsList,
    });

    dispatch({
      type: APP_ACTIONS.SET_COURSES,
      payload: coursesList,
    });
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
        <Notifications />
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
