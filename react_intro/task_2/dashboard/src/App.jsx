import './App.css';
import logo from './assets/holberton-logo.jpg';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
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
