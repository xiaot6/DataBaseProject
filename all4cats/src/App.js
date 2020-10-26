import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='Logo' height='250'></img>
        <p>
          Welcome to CS 411 Final Project - All4Cats.
        </p>
        <a
          className="App-link"
          href="https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      </header>
    </div>
  );
}

export default App;
