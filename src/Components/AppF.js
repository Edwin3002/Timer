import React, { useEffect, useState } from 'react'
import { Timer } from './Timer'

export const App = () => {

const [timerD, setimerD] = useState();
  const [timerH, setimerH] = useState();
  const [timerM, setimerM] = useState();
  const [timerS, setimerS] = useState();

  let interval;

  const start = () => {
    const countDownDate = new Date("Apr 30,2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60 ));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setimerD(days);
        setimerH(hours);
        setimerM(minutes);
        setimerS(seconds);
      }
    });
  };

  useEffect(() => {
    start();
  });

  return (
    <div className="App">
      <Timer
        timerD={timerD}
        timerH={timerH}
        timerM={timerM}
        timerS={timerS}
      />
    </div>
  );
}
