import './App.css';
import MyArt from './sketches/MyArt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyArt />

        <p>
          Hello Sweets
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
