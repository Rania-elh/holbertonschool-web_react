import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer className="App-footer fixed bottom-0 left-0 right-0 border-t-2 border-(--main-color) py-4 px-8 text-center italic bg-white text-base max-[520px]:text-sm max-[520px]:py-3">
      <p className="m-0">Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
}

export default Footer;
