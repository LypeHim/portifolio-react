import './App.css';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-Y217MX4SM5');
  return (
    
    <div className="App">
      <ul>
        <li>
            <a
            href="https://pt.wikipedia.org/wiki/Valorant"
            target="_blank"
            rel="noreferrer"
            title="link externo 1"
            >
            Link externo teste Analytics
          </a>
        </li>
        <li>
          <a
            href="https://pt.wikipedia.org/wiki/Valorant"
            target="_blank"
            rel="noreferrer"
            title="link externo 2"
            >
            Segundo link de teste
          </a>
        </li>      
      </ul>
      
      <p>teste</p>
    </div>
  );
}

export default App;
