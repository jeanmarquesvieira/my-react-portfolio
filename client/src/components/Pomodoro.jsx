import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      if (!isBreak) {
        setTime(300);
        setIsBreak(true);
      } else {
        setTime(1500);
        setIsBreak(false);
      }
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
    setIsBreak(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pb-32 bg-gray-100 font-fira">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-16 lg:mb-20 flex justify-center tracking-wider">
        Pomodoro Timer
      </h1>
      <div className="text-5xl lg:text-7xl bg-secondaryBlue rounded-lg shadow-2xl border-solid border-mainBlue border-4 p-10 mb-8 ">
        {formatTime(time)}
      </div>
      <div className="space-x-4 pt-10">
        <button
          onClick={startTimer}
          className="bg-mainBlue hover:bg-[#00728A] text-white font-semibold py-2 px-4 rounded"
        >
          Start
        </button>
        <button
          onClick={pauseTimer}
          className="bg-secondaryBlue hover:bg-[#01A6CC] text-white font-semibold py-2 px-4 rounded"
        >
          Pause
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
