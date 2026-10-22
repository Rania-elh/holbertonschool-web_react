import './Footer.css';
import { useContext } from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import newContext from '../Context/context';

const Footer = () => {
  const { user } = useContext(newContext);

  return (
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
      )
    }

export default Footer;