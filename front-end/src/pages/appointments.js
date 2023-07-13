import React, { useState } from 'react';
import './InteractiveCalendar.css';

function InteractiveCalendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const [selectedDate, setSelectedDate] = useState(null);
  const [appointment, setAppointment] = useState({
    pickupTime: '',
    dropoffTime: '',
    centerId: '',
    driverId: '',
    userId: '',
  });
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);
  const [displayedYear, setDisplayedYear] = useState(currentYear);
  const [validationError, setValidationError] = useState(false);
  const [repeatWeekly, setRepeatWeekly] = useState(false);

  const handleSelectDate = (day) => {
    setSelectedDate(day);
  };

  const handleMakeAppointment = () => {
    if (selectedDate && validateForm()) {
      // Perform the desired action with the appointment data
      // Here, we'll just log the appointment to the console
      console.log('Appointment:', appointment);
      if (repeatWeekly) {
        console.log('Repeat weekly:', repeatWeekly);
      }
    } else {
      setValidationError(true);
    }
  };

  const validateForm = () => {
    return (
      appointment.pickupTime.trim() !== '' &&
      appointment.dropoffTime.trim() !== '' &&
      appointment.centerId.trim() !== '' &&
      appointment.driverId.trim() !== '' &&
      appointment.userId.trim() !== ''
    );
  };

  const handlePreviousMonth = () => {
    if (displayedMonth === 0) {
      setDisplayedMonth(11);
      setDisplayedYear((prevYear) => prevYear - 1);
    } else {
      setDisplayedMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (displayedMonth === 11) {
      setDisplayedMonth(0);
      setDisplayedYear((prevYear) => prevYear + 1);
    } else {
      setDisplayedMonth((prevMonth) => prevMonth + 1);
    }
  };

  function generateCalendarDays(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = firstDay.getDay();

    const calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="calendar-day empty" />
      );
    }

    for (let day = 1; day <= lastDay; day++) {
      const calendarDay = (
        <div
          key={day}
          className={`calendar-day${selectedDate === day ? ' selected' : ''}`}
          onClick={() => handleSelectDate(day)}
        >
          {day}
        </div>
      );
      calendarDays.push(calendarDay);
    }

    return calendarDays;
  }

  return (
    <div className="calendar">
      <h1 className="calendar-title">Interactive Calendar</h1>
      <div className="calendar-controls">
        <button className="calendar-nav-button" onClick={handlePreviousMonth}>
          &lt;
        </button>
        <div className="current-month-year">
          {new Date(displayedYear, displayedMonth).toLocaleString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <button className="calendar-nav-button" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-header">Sun</div>
        <div className="calendar-header">Mon</div>
        <div className="calendar-header">Tue</div>
        <div className="calendar-header">Wed</div>
        <div className="calendar-header">Thu</div>
        <div className="calendar-header">Fri</div>
        <div className="calendar-header">Sat</div>
        {generateCalendarDays(displayedYear, displayedMonth)}
      </div>
      {selectedDate && (
        <div className="appointment-form">
          <h2 className="form-title">Make an Appointment</h2>
          <div className="selected-date">
            Selected Date:{' '}
            {new Date(displayedYear, displayedMonth, selectedDate).toLocaleString(
              'en-US',
              {
                month: 'long',
                day: 'numeric',
              }
            )}
          </div>
          {validationError && (
            <div className="error-message">Please fill out all fields.</div>
          )}
          <div className="form-inputs">
            <div className="form-field">
              <label>Pickup Time:</label>
              <input
                type="text"
                value={appointment.pickupTime}
                onChange={(e) =>
                  setAppointment({ ...appointment, pickupTime: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label>Dropoff Time:</label>
              <input
                type="text"
                value={appointment.dropoffTime}
                onChange={(e) =>
                  setAppointment({ ...appointment, dropoffTime: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label>Center ID:</label>
              <input
                type="text"
                value={appointment.centerId}
                onChange={(e) =>
                  setAppointment({ ...appointment, centerId: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label>Driver ID:</label>
              <input
                type="text"
                value={appointment.driverId}
                onChange={(e) =>
                  setAppointment({ ...appointment, driverId: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label>User ID:</label>
              <input
                type="text"
                value={appointment.userId}
                onChange={(e) =>
                  setAppointment({ ...appointment, userId: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label>
                Repeat Weekly:
                <input
                  type="checkbox"
                  checked={repeatWeekly}
                  onChange={() => setRepeatWeekly(!repeatWeekly)}
                />
              </label>
            </div>
          </div>
          <button onClick={handleMakeAppointment} className="form-button">
            Make Appointment
          </button>
        </div>
      )}
      <div className="current-date">
        Today is{' '}
        {new Date().toLocaleString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>
    </div>
  );
}

export default InteractiveCalendar;
