import React, { useEffect, useState } from "react";
import "./Clock.css"; // Importing the CSS for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update the time every second

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5; // 30° per hour, plus a small adjustment for minutes
  const minuteDeg = time.getMinutes() * 6; // 6° per minute
  const secondDeg = time.getSeconds() * 6; // 6° per second

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format time as HH:MM:SS
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="clock-container">
      <div className="clock">
        <div
          className="hour-hand"
          style={{ transform: `translate(-50%, -50%) rotate(${hourDeg}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `translate(-50%, -50%) rotate(${minuteDeg}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `translate(-50%, -50%) rotate(${secondDeg}deg)` }}
        ></div>
        <div className="center-dot"></div>
        {/* Numbers on the clock */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="clock-number"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-80px)`,
              transformOrigin: "50% 100%",
            }}
          >
            {i + 1}
          </div>
        ))}
        {/* Tick marks between each hour */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`tick ${i % 5 === 0 ? "large" : "small"}`}
            style={{
              transform: `rotate(${i * 6}deg) translateY(-90px)`,
              transformOrigin: "50% 100%",
            }}
          />
        ))}
      </div>
      <div className="time-display">{formattedTime}</div>
    </div>
  );
};

export default Clock;
