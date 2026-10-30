import { useSelector } from 'react-redux';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

function Footer() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <footer className="App-footer">
      <p>
        Copyright{' '}
        {getCurrentYear()}{' '}
        -{' '}
        {getFooterCopy(true)}
      </p>

      {isLoggedIn && user && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
