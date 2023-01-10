import "./App.css";
import Weather from "./Weather";
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a react app</h1>
        <Logo />
        <Weather />
        <p>
          {" "}
          <a
            href="https://github.com/denashams/my-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>
          , by Dena Shams{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
