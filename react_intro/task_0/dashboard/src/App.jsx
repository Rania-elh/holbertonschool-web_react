import './App.css';
import logo from './assets/holberton-logo.jpg';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright {currentYear} - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
