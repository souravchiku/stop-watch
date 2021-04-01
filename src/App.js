import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(null);
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="App">
      <h1>React Stopwatch</h1>
      <h2>
        <div id="display">
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
          <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
          <span> {("0" + ((time / 10) % 100)).slice(-2)} </span>
        </div>
      </h2>
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}> Start </button>
        )}
        {timerOn && <button onClick={() => setTimeOn(false)}> Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}> Reset </button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimeOn(true)}> Resume </button>
        )}
      </div>
    </div>
  );
}
