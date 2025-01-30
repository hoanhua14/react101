import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, 1000 * targetTime);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "stop" : "start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {" "}
          {timerStarted ? "running" : "timer inactive"}
        </p>
      </section>
    </>
  );
}
