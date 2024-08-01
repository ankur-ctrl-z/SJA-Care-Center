import React from 'react';
import { InlineWidget } from 'react-calendly';

const AppointmentBooking = () => {
  return (
    <div id="appointment-section" className='mt-20 mb-10 example' style={{ height: '100vh' , padding: '20px'}}>
      <h1>Book an Appointment</h1>
      <InlineWidget url="https://calendly.com/spinejoint-mumbai/45min" />
    </div>
  );
};

export default AppointmentBooking;