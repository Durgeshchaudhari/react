import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="github-link"
          href="www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Deploy
        </a>
      </header>
    </div>
  );
}

export default App;
