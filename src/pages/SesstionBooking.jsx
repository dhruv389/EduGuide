import React, { useState } from 'react';

const SessionBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [sessionType, setSessionType] = useState('video');

  const availableSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSessionTypeChange = (type) => {
    setSessionType(type);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Session booked on ${selectedDate} at ${selectedTime} via ${sessionType === 'video' ? 'Video Call' : 'Chat'}`);
    } else {
      alert('Please select a date and time for the session.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book Your Session</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Date</label>
          <input 
            type="date" 
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedDate || ''} 
            onChange={handleDateChange} 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Available Time Slots</label>
          <select 
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedTime || ''} 
            onChange={handleTimeChange}
          >
            <option value="">Select a time</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Session Type</label>
          <div className="flex justify-around">
            <button 
              className={`px-4 py-2 rounded-lg ${sessionType === 'video' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSessionTypeChange('video')}
            >
              Video Call
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${sessionType === 'chat' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSessionTypeChange('chat')}
            >
              Chat
            </button>
          </div>
        </div>

        <button 
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-bold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 ease-in-out"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SessionBooking;
