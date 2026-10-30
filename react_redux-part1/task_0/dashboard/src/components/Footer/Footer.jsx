import { useContext } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import '../../../styles/Footer.css';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

function FooterView({ isLoggedIn }) {
  return (
    <footer className="App-footer">
      <p>
        Copyright{' '}
        {getCurrentYear()}{' '}
        -{' '}
        {getFooterCopy(true)}
      </p>

      {isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

function FooterConnected() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return <FooterView isLoggedIn={isLoggedIn} />;
}

function Footer({ user }) {
  const redux = useContext(ReactReduxContext);

  if (!redux) {
    return <FooterView isLoggedIn={Boolean(user && user.isLoggedIn)} />;
  }

  return <FooterConnected />;
}

export default Footer;
