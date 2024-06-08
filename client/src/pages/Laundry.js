import React, { useState } from 'react';
import axios from 'axios';

const Laundry = () => {
  const [laundryType, setLaundryType] = useState('');
  const [pickupDate, setPickupDate] = useState('');

  const handleLaundryRequest = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/laundry/request', 
        { laundryType, pickupDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Laundry Request Successful!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLaundryRequest}>
      <input type="text" placeholder="Laundry Type" value={laundryType} onChange={(e) => setLaundryType(e.target.value)} required />
      <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
      <button type="submit">Request Laundry</button>
    </form>
  );
};

export default Laundry;
