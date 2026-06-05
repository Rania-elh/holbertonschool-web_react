import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className="App-header flex items-center px-8 py-4 border-b-2 border-(--main-color)">
      <img src={logo} className="App-logo h-[200px] w-auto mr-6" alt="logo" />
      <h1 className="text-(--main-color) text-[2.5rem] m-0">School dashboard</h1>
    </header>
  );
}

export default Header;
