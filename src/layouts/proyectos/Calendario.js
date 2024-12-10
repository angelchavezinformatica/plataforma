import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay } from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => (
    <div className="flex justify-between items-center p-4">
      <button
        onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        className="text-lg font-bold px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        &lt;
      </button>
      <h2 className="text-xl font-semibold">
        {format(currentDate, "MMMM yyyy")}
      </h2>
      <button
        onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        className="text-lg font-bold px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );

  const daysOfWeek = () => (
    <div className="grid grid-cols-7 text-center text-gray-600 font-medium">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
        <div key={index} className="py-2">
          {day}
        </div>
      ))}
    </div>
  );

  const days = () => {
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);
    const startDate = startOfWeek(startMonth);
    const days = [];
    let day = startDate;

    while (day <= endMonth || days.length % 7 !== 0) {
      days.push(day);
      day = addDays(day, 1);
    }

    return (
      <div className="grid grid-cols-7 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-4 border hover:bg-gray-100 cursor-pointer ${
              isSameMonth(day, currentDate)
                ? ""
                : "text-gray-400"
            } ${
              isSameDay(day, selectedDate)
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg">
      {header()}
      {daysOfWeek()}
      {days()}
    </div>
  );
};

export default Calendar;
