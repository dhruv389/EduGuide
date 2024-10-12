import React from 'react';

const Professionals = () => {
  const professionals = [
    {
      name: 'Dr. Emily Watson',
      title: 'Career Counselor',
      bio: 'With 10+ years of experience in guiding students toward successful career paths, Dr. Watson is a certified career coach specializing in STEM fields.',
      expertise: 'Career Planning, Job Search, Resume Building',
      img: 'https://randomuser.me/api/portraits/women/81.jpg',
    },
    {
      name: 'Mr. Alex Turner',
      title: 'Health & Wellness Expert',
      bio: 'A certified wellness coach, Alex specializes in helping students balance physical and mental health during their academic journey.',
      expertise: 'Physical Health, Mental Health, Stress Management',
      img: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      name: 'Ms. Sarah Collins',
      title: 'Exam Preparation Specialist',
      bio: 'Sarah has been tutoring students for over 8 years with a focus on effective exam strategies and time management techniques.',
      expertise: 'Exam Strategies, Subject Tutoring, Time Management',
      img: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
 
  {
    name: 'Dr. Aarti Mehta',
    title: 'Psychologist & Wellness Coach',
    bio: 'Aarti specializes in student mental health and wellness, providing personalized counseling for academic and personal challenges.',
    expertise: 'Counseling, Stress Relief, Mental Health',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Mr. Rohan Kapoor',
    title: 'Mathematics Expert',
    bio: 'With a PhD in Mathematics, Rohan has been teaching advanced concepts and exam preparation for over a decade.',
    expertise: 'Mathematics, Exam Preparation, Problem Solving',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    name: 'Ms. Shreya Iyer',
    title: 'Nutritionist & Wellness Specialist',
    bio: 'Shreya provides customized nutrition plans for students to help them stay healthy and energized during their academic journey.',
    expertise: 'Nutrition, Wellness Coaching, Healthy Habits',
    img: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'Mr. Arjun Verma',
    title: 'Physics Mentor',
    bio: 'Arjun is an experienced physics tutor with a passion for making difficult concepts easy to understand for students.',
    expertise: 'Physics, Science Tutoring, Exam Strategies',
    img: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    name: 'Dr. Neha Gupta',
    title: 'Career Development Specialist',
    bio: 'Neha has 12 years of experience in career development, helping students plan and pursue the right career paths.',
    expertise: 'Career Planning, Job Search, Personal Branding',
    img: 'https://randomuser.me/api/portraits/women/36.jpg',
  },
  {
    name: 'Ms. Sneha Deshmukh',
    title: 'Study Skills Coach',
    bio: 'Sneha helps students enhance their study skills through personalized coaching, focusing on productivity and learning techniques.',
    expertise: 'Study Techniques, Time Management, Productivity',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Mr. Rahul Bhatia',
    title: 'Software Engineering Mentor',
    bio: 'Rahul is a seasoned software engineer who mentors students on coding, project management, and technical skills.',
    expertise: 'Software Engineering, Programming, Technical Skills',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Ms. Deepika Malhotra',
    title: 'Public Speaking Coach',
    bio: 'Deepika has helped students develop public speaking and presentation skills to boost their confidence in academic settings.',
    expertise: 'Public Speaking, Communication, Confidence Building',
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    name: 'Mr. Sanjay Nair',
    title: 'Financial Literacy Advisor',
    bio: 'Sanjay educates students on financial planning, budgeting, and making smart money decisions for their future.',
    expertise: 'Financial Planning, Budgeting, Money Management',
    img: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
  {
    name: 'Dr. Kavya Chawla',
    title: 'Academic Tutor & Mentor',
    bio: 'With 15 years of academic experience, Kavya provides tutoring and mentorship to students in a wide range of subjects.',
    expertise: 'Subject Tutoring, Exam Prep, Academic Mentoring',
    img: 'https://randomuser.me/api/portraits/women/51.jpg',
  }


  ];

  return (
    <div className="bg-gray-100 w-screen flex justify-start items-center flex-col py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Experts</h1>
      <div className="grid w-[80%] text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {professionals.map((pro, index) => (
          <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={pro.img} alt={pro.name} className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{pro.name}</h2>
              <h3 className="text-lg text-indigo-500">{pro.title}</h3>
              <p className="mt-4 text-gray-700">{pro.bio}</p>
              <div className="mt-4">
                <h4 className="text-gray-800 font-medium">Expertise:</h4>
                <p className="text-gray-600">{pro.expertise}</p>
              </div>
              <button className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">Schedule a Session</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
