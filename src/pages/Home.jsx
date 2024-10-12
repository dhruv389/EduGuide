import React from 'react'
import home1 from '../Images/home1.png'

const Home = () => {


    const categories = [
    { name: 'Career Planning', emoji: '🎯', bgColor: 'bg-red-100', textColor: 'text-red-600' },
    { name: 'Health & Wellness', emoji: '🧘‍♀️', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { name: 'Exam Preparation', emoji: '📚', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { name: 'Mental Health Support', emoji: '💆‍♂️', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' },
    { name: 'Academic Subjects', emoji: '📖', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { name: 'Skill Development', emoji: '🛠️', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
    { name: 'Time Management', emoji: '⏳', bgColor: 'bg-teal-100', textColor: 'text-teal-600' },
    { name: 'Stress Management', emoji: '💆‍♀️', bgColor: 'bg-pink-100', textColor: 'text-pink-600' },
    { name: 'Physical Fitness', emoji: '🏋️‍♂️', bgColor: 'bg-gray-100', textColor: 'text-gray-600' },
    { name: 'Diet & Nutrition', emoji: '🍎', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
    { name: 'Self-Discipline', emoji: '🎓', bgColor: 'bg-cyan-100', textColor: 'text-cyan-600' },
    { name: 'Public Speaking', emoji: '🎤', bgColor: 'bg-fuchsia-100', textColor: 'text-fuchsia-600' },
    { name: 'Creative Arts', emoji: '🎨', bgColor: 'bg-rose-100', textColor: 'text-rose-600' },
  ];

const sessions = [
  { name: "Career Guidance", mentor: "Dr. Emily Jones", price: "$25.00", image: "https://img.freepik.com/free-photo/employees-business-meeting_23-2148738297.jpg?t=st=1728742369~exp=1728745969~hmac=3110917f0a96b5e3e293dfd59ca6f072cc0372e814988cbacf8564b9a426e7ef&w=996", rating: "4.9" },
  { name: "Stress Management", mentor: "Sarah Lee", price: "$20.00", image: "https://i.pinimg.com/564x/68/aa/f6/68aaf6862de2f0845985588912577118.jpg", rating: "4.8" },
  { name: "Math Exam Prep", mentor: "Prof. Alex Smith", price: "$15.00", image: "https://i.pinimg.com/736x/41/7f/f4/417ff4bee657f51d8c127c9421de78a2.jpg", rating: "4.7" },
  { name: "Nutrition & Wellness", mentor: "Jane Doe", price: "$18.00", image: "https://i.pinimg.com/564x/55/00/39/550039199af2c799ac62f3aeb4243ef3.jpg", rating: "4.6" },
  { name: "English Literature", mentor: "Prof. David Kim", price: "$22.00", image: "https://i.pinimg.com/enabled/564x/2c/18/53/2c1853a3db2bef9e0327f86550c967db.jpg", rating: "4.8" },
  { name: "Science Tutoring", mentor: "Dr. Kevin Lee", price: "$17.50", image: "https://i.pinimg.com/736x/21/0e/0e/210e0e3ca36a1ade907b43394bd1b8fe.jpg", rating: "4.7" },
  { name: "Exam Strategy", mentor: "Dr. Lucy Davis", price: "$19.00", image: "https://i.pinimg.com/564x/f6/74/48/f674481a824d02b59f50daf4434175ec.jpg", rating: "4.9" },
  { name: "Mindfulness Techniques", mentor: "John Walker", price: "$16.50", image: "https://i.pinimg.com/enabled/564x/1a/ee/6f/1aee6fcf111d3e3730f9f9323a0ff256.jpg", rating: "4.8" },
];




  return (
    <div className='w-screen flex justify-center items-center flex-col gap-6'>
       <div className="w-full mt-14 flex h-[60vh]  justify-center items-center">
       <div className="h-[12rem] w-[12rem] bg-blue-50 relative rotate-12 -z-20 rounded-full left-9"></div>
        <div className="h-full w-[45%] flex flex-col justify-center items-center">
            <p className='font-bold  text-[2.6rem]'>Unlock Your True Potential with Expert Guidance</p>
            <p className='text-base mt-4 text-gray-500'>Personalized mentorship across career planning, wellness, exam prep, and more. Connect with professionals anytime, anywhere, and thrive with the support you deserve.</p>
        </div>
        <div className="h-full w-[45%]"><img src={home1} alt="" className='h-full w-full object-contain'  /></div>
       </div>



       {/*===================== Second Section ========================================== */}




        <div className="w-screen flex flex-col gap-7 justify-start items-center ">
      {/* Top Categories */}
      <div className="py-8 flex justify-center items-center flex-col w-full">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Categories</h1>
      <div className="flex gap-2 flex-wrap w-[80%] ">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center mt-3 text-sm justify-between p-4 rounded-lg shadow-lg ${category.bgColor} ${category.textColor}`}
          >
            <span className="">{category.emoji}</span>
            <h2 className=" font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>

      {/* Browse Our Top Sessions */}
      <div className="text-center w-[84%] my-8">
        <h1 className="text-4xl font-bold">Browse Our Top Sessions</h1>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="py-2 px-4 bg-gray-200 rounded">Career Planning</button>
          <button className="py-2 px-4 bg-gray-200 rounded">Health & Wellness</button>
          <button className="py-2 px-4 bg-gray-200 rounded">Exam Preparation</button>
          <button className="py-2 px-4 bg-gray-200 rounded">Academic Subjects</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-6">
          {sessions.map((session, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={session.image} alt={session.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{session.name}</h2>
                <p className="text-gray-500">{session.mentor}</p>
                <p className="font-semibold text-blue-600">{session.price}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-400">Rating: {session.rating}</p>
                  <button className="py-1 px-3 bg-blue-600 text-white rounded">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    Home
    
    </div>
  )
}

export default Home