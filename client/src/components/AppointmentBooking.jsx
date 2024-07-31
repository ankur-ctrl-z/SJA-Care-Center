import React from 'react';
import { InlineWidget } from 'react-calendly';

const AppointmentBooking = () => {
  return (
    <div id="appointment-section" style={{ height: '100vh' , padding: '20px'}}>
      <h1>Book an Appointment</h1>
      <InlineWidget url="https://calendly.com/ankur143513/30min" />
    </div>
  );
};

export default AppointmentBooking;
