/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

// src/App.jsx
/*/import React from 'react';
import Timer from "./src/timer";
 // Adjust path according to your project structure
import './app.css'; // Optional: For additional styling

function App() {
  return (
    <div className="App">
      <h1>TIMER</h1>
      <Timer />
    </div>
  );
}

export default App;*/


import React from "react";
import PasswordStrengthChecker from "./Password";
import './app.css';
function App() {
  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <PasswordStrengthChecker/>
    </div>
  );
}

export default App;
