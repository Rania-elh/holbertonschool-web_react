import './App.css';
import logo from '../assets/holberton-logo.jpg';
import Notifications from '../Notifications/Notifications';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="button">OK</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
