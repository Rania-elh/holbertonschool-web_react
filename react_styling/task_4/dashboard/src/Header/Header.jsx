import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className="App-header flex items-center px-8 py-4 border-b-2 border-(--main-color) max-[912px]:flex-col max-[912px]:px-4 max-[912px]:text-center">
      <img
        src={logo}
        className="App-logo h-[200px] w-auto mr-6 max-[912px]:mr-0 max-[912px]:mb-3"
        alt="logo"
      />
      <h1 className="text-(--main-color) text-[2.5rem] m-0 max-[520px]:text-2xl">
        School dashboard
      </h1>
    </header>
  );
}

export default Header;
