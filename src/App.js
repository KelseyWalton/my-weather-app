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
      </header>
    </div>
  );
}

export default App;
