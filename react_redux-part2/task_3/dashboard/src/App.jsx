import { Fragment, useContext, useEffect } from 'react';
import { Provider, ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import './App.css';
import './components/Notifications/Notifications.css';
import store from './app/store.js';
import Notifications from './components/Notifications/Notifications.jsx';
import Header from './components/Header/Header.jsx';
import Login from './pages/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import CourseList from './pages/CourseList/CourseList.jsx';
import BodySection from './components/BodySection/BodySection.jsx';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom.jsx';
import WithLogging from './components/HOC/WithLogging.jsx';
import { fetchNotifications } from './features/notifications/notificationsSlice.js';
import { fetchCourses } from './features/courses/coursesSlice.js';

const CourseListWithLogging = WithLogging(CourseList);
const LoginWithLogging = WithLogging(Login);

function AppContent() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications />
      </div>

      <Header />

      {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseListWithLogging />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <LoginWithLogging />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer />
    </Fragment>
  );
}

export default function App() {
  const reduxContext = useContext(ReactReduxContext);

  if (!reduxContext) {
    return (
      <Provider store={store}>
        <AppContent />
      </Provider>
    );
  }

  return <AppContent />;
}
