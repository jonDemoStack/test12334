import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  useEffect(() =>{
    fetch('https://dev.demostats.tools/.netlify/functions/cookei').then((res) =>console.log(res)).catch((e)=> console.log(e))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => window.location.href="/editor"}> testt</button>
      </header>
    </div>
  );
}

export default App;
