import React from 'react';

const appointments = [
  {
    a_id: 1,
    pickup_time: "7pm",
    dropoff_time: "123 Main Street, Nashville, TN",
    c_id: "Nashville",
    d_id: "Brian",
    u_id: "Dad"
  },
  {
    a_id: 2,
    pickup_time: "8am",
    dropoff_time: "456 Elm Street, Nashville, TN",
    c_id: "Franklin",
    d_id: "Alice",
    u_id: "Mom"
  },
  // Add more appointments here...
];

function AppointmentCalendar() {
  return (
    <div>
      <h1>Appointment Calendar</h1>
      <div id="appointments-container">
        {appointments.map(appointment => (
          <div className="appointment" key={appointment.a_id}>
            <h3>Appointment ID: {appointment.a_id}</h3>
            <p>Pickup Time: {appointment.pickup_time}</p>
            <p>Dropoff Location: {appointment.dropoff_time}</p>
            <p>Customer ID: {appointment.c_id}</p>
            <p>Driver ID: {appointment.d_id}</p>
            <p>User ID: {appointment.u_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentCalendar;
