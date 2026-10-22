import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  return (
    <footer className="App-footer">
      <p>
        Copyright{' '}
        {getCurrentYear()}{' '}
        -{' '}
        {getFooterCopy(true)}
      </p>

      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
