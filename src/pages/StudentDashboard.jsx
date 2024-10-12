import React from 'react';

const Dashboard = () => {
  const upcomingSessions = [
    {
      id: 1,
      expertName: 'John Doe',
      subject: 'Career Planning',
      date: '12th October, 2024',
      time: '2:00 PM',
      type: 'Video Call',
    },
    {
      id: 2,
      expertName: 'Jane Smith',
      subject: 'Health & Wellness',
      date: '14th October, 2024',
      time: '4:00 PM',
      type: 'Chat Session',
    },
  ];

  const chatMessages = [
    { id: 1, sender: 'You', message: 'What should I focus on for my career?', time: '10:15 AM' },
    { id: 2, sender: 'Expert', message: 'I’d suggest exploring your interests first.', time: '10:16 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">Manage your sessions, chats, and subscriptions in one place.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Sessions */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Upcoming Sessions</h2>
          {upcomingSessions.length > 0 ? (
            upcomingSessions.map(session => (
              <div key={session.id} className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <p className="text-lg font-semibold text-blue-600">{session.subject}</p>
                <p>With: {session.expertName}</p>
                <p>Date: {session.date}</p>
                <p>Time: {session.time}</p>
                <p>Type: {session.type}</p>
                <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Join Session
                </button>
              </div>
            ))
          ) : (
            <p>No upcoming sessions.</p>
          )}
        </div>

        {/* Chat Interface */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Chat with Experts</h2>
          <div className="border border-gray-300 p-4 h-96 overflow-y-scroll bg-gray-50 rounded-lg">
            {chatMessages.map(message => (
              <div key={message.id} className="mb-4">
                <p className={`font-semibold ${message.sender === 'You' ? 'text-blue-500' : 'text-gray-500'}`}>
                  {message.sender}
                </p>
                <p className="bg-gray-100 p-3 rounded-lg mb-2">{message.message}</p>
                <p className="text-xs text-gray-400">{message.time}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Type your message..."
            />
            <button className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Profile Section */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Profile</h2>
          <div>
            <p className="text-lg font-semibold">Name: John Student</p>
            <p>Email: john@student.edu</p>
            <p>Subscription Plan: Pro</p>
            <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Update Profile
            </button>
          </div>
        </div>

        {/* Book New Sessions */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Book New Sessions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-lg font-semibold text-blue-600">Career Planning with John Doe</p>
              <p className="text-gray-600">Book a video call for career guidance.</p>
              <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-lg font-semibold text-blue-600">Health & Wellness with Jane Smith</p>
              <p className="text-gray-600">Get wellness advice through a chat session.</p>
              <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
