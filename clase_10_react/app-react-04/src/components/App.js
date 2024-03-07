// import logo_variable_name from '../images/logo.svg';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo_variable_name} className="App-logo" alt="logo" /> */}
        <p>
          Hola <code>%PUBLIC_URL%</code> mundo!
        </p>
        {/* <a
          className="App-link"
          id='IDName'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a> */}
      </header>
    </div>
  );
}

export default App;
