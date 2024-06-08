import React, { useState } from 'react';
import axios from 'axios';

const Hostel = () => {
  const [roomType, setRoomType] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/hostel/book', 
        { roomType, checkInDate, checkOutDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Booking Successful!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input type="text" placeholder="Room Type" value={roomType} onChange={(e) => setRoomType(e.target.value)} required />
      <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
      <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
      <button type="submit">Book Hostel</button>
    </form>
  );
};

export default Hostel;
