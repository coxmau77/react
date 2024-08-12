import logo from './logo.svg';
import './App.css';

// Esto es a lo que llamamos componente en React
function App() {
  return (
    <div className="App">
      <header className="App-header p-3">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola <code>mundo react</code> !.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende react para construir tus aplicaciones frontend
        </a>
      </header>
    </div>
  );
}

export default App;
