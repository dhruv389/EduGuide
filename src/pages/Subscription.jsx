import React from 'react';

const SubscriptionPage = () => {
  const plans = [
    {
      name: 'Basic',
      priceMonthly: 15,
      priceYearly: 150,
      features: [
        'Career Planning',
        'Health & Wellness',
        'Limited Exam Prep',
        'Access to 1-on-1 Chat',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      priceMonthly: 30,
      priceYearly: 300,
      features: [
        'Everything in Basic',
        'Unlimited Exam Prep',
        'Video Call with Experts',
        'Priority Support',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      priceMonthly: 50,
      priceYearly: 500,
      features: [
        'All Pro Features',
        'Dedicated Career Mentor',
        'Personalized Study Plans',
        'Health and Wellness Sessions',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Choose Your Subscription Plan</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Get expert guidance and tailored support for your academic and career needs. Unlock all features and start your journey to success today!
        </p>
      </div>

      {/* Subscription Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg bg-white ${
              plan.popular ? 'border-4 border-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
            <div className="text-gray-600 mb-6">
              <p className="text-lg">
                <span className="font-bold text-3xl text-blue-600">${plan.priceMonthly}</span>/month
              </p>
              <p className="text-gray-400">
                Or <span className="font-bold">${plan.priceYearly}</span>/year
              </p>
            </div>

            <ul className="mb-6 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-8.707a1 1 0 011.414 0l2.293 2.293 4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0L8.293 10.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="text-center mt-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Why Choose EduGuide?</h2>
        <p className="text-lg text-gray-600 mb-12">
          With a subscription, you'll have access to our top mentors and comprehensive resources, tailored to your personal needs.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex items-start space-x-4">
            <svg className="h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold">1-on-1 Mentorship</h3>
              <p className="text-gray-600">Personalized advice for your academic and career journey.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <svg className="h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2a2 2 0 100 4h-1m6-6h1m-6-3a9 9 0 11-6.707 15.707M12 3v6" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Flexible Learning</h3>
              <p className="text-gray-600">Access materials and guidance anytime, anywhere.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <svg className="h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7M5 7l7 7 7-7" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Proven Success</h3>
              <p className="text-gray-600">Thousands of students have achieved their goals with EduGuide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
