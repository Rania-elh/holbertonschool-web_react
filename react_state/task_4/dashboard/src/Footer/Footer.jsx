import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import newContext from '../Context/context';

function Footer() {
  return (
    <newContext.Consumer>
      {({ user }) => (
        <footer className="App-footer">
          <p>
            Copyright
            {' '}
            {getCurrentYear()}
            {' '}
            -
            {' '}
            {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && (
            <p>
              <a href="#">Contact us</a>
            </p>
          )}
        </footer>
      )}
    </newContext.Consumer>
  );
}

export default Footer;
