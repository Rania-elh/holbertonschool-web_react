import { Fragment, useContext, useEffect } from 'react';
import { Provider, ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import '../styles/App.css';
import Notifications from './components/Notifications/Notifications';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import CourseList from './pages/CourseList/CourseList';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import WithLogging from './components/HOC/WithLogging';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';
import { logout } from './features/auth/authSlice';
import store from './app/store';

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'h') {
        alert('Logging you out');
        dispatch(logout());
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

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

function App() {
  const parentStore = useContext(ReactReduxContext);

  if (parentStore) {
    return <AppContent />;
  }

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
