import React from 'react';
import './App.css';
import FacebookLogin from './components/Facebook'

function App() {
  return (
    <div className="App">
      <h1>
        Facebook Authentication
      </h1>
      <FacebookLogin />
    </div>
  );
}

export default App;
