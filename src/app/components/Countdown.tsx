"use client";
import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const targetDate = "2024-02-17T10:00:00+1100";

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      // Target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="z-10 flex flex-col p-4 sm:ml-5  md:ml-10  w-fit rounded-2xl ">
      <span className="text-white text-3xl font-bold">
        Next MegaLan -&quot;Might and Magic&quot; Begins in:
      </span>

      <div className="text-4xl sm:text-6xl w-fit mt-5 font-extrabold text-white">
        <div>
          {formatTime(timeLeft.days)} D : {formatTime(timeLeft.hours)} H :{" "}
          {formatTime(timeLeft.minutes)} M : {formatTime(timeLeft.seconds)} S
        </div>
      </div>
    </div>
  );

  return <></>;
};

export default Countdown;
