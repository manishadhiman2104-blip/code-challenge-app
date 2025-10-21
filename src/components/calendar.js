// src/components/Calendar.js
import React, { useState, useEffect } from "react";
import "./calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [streakDays] = useState([1, 2, 3, 5, 6, 10, 12, 15]); // sample solved days

  useEffect(() => {
    // Update date every minute to handle day change dynamically
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();

  const monthYear = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <h3 className="calendar-month">{monthYear}</h3>
      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day 
              ${streakDays.includes(day) ? "solved" : ""} 
              ${day === today ? "today" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
