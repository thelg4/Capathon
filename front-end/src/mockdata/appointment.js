import React, { useState } from 'react';

 

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

 

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

 

  const getCellStyle = (date) => {
    if (date === selectedDate) {
      return 'p-4 bg-primary text-white font-semibold';
    } else {
      return 'p-4';
    }
  };

 

  const renderDates = () => {
    const currentDate = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const dates = [];

 

    for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
      dates.push(
<div
          className={getCellStyle(date.getDate())}
          onClick={() => handleDateClick(date.getDate())}
>
          {date.getDate()}
</div>
      );
    }

 

    return dates;
  };

 

  return (
<div className="p-10">
<div className="text-xl font-bold mb-4">Calendar</div>
<div className="bg-white shadow-lg rounded-lg">
<div className="flex items-center justify-between p-4 border-b">
<div className="text-lg font-semibold">
            {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
</div>
</div>
<div className="grid grid-cols-7">
<div className="p-4 bg-gray-100 font-semibold">Sun</div>
<div className="p-4 bg-gray-100 font-semibold">Mon</div>
<div className="p-4 bg-gray-100 font-semibold">Tue</div>
<div className="p-4 bg-gray-100 font-semibold">Wed</div>
<div className="p-4 bg-gray-100 font-semibold">Thu</div>
<div className="p-4 bg-gray-100 font-semibold">Fri</div>
<div className="p-4 bg-gray-100 font-semibold">Sat</div>
          {renderDates()}
</div>
</div>
</div>
  );
};

 

export default Calendar;