// src/Timer.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // For styling

const Timer = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Effect to handle the timer logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Start or pause the timer
  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Convert time to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(time)}</h1>
      <div className="controls">
        <button onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
