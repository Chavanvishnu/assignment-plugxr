import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
