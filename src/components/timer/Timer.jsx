import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

function Timer() {
  
  const [timer, setTimer] = useState(0)

  const format = (time) => {
    let hours = Math.floor((time / 60 / 60) % 24);
    let minutes = Math.floor((time / 60) % 60);
    let secondes = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    return hours + ":" + minutes + ":" + secondes;
  };

  useEffect(() => {
    setTimeout(() => {
      setTimer(t => t + 1);
    }, 1000);
  }, [timer]);
  
  return (
    <div className="timer">
      <p className="timer_info">You have </p>
      <h1 className="timer_content" >
        {format(timer)}
      </h1>
      <p className="timer_info">On this site</p>
      <p className="timer_info">What are you waiting for ?</p>
    </div>
  );
}

export default Timer;
