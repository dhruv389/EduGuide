import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubscriptionPage from './pages/Subscription';
import Error from './pages/Error';
import Dashboard from './pages/StudentDashboard';
import Professionals from './pages/Professionals';
import SessionBooking from './pages/SesstionBooking';

function App() {


  // Define routes, including authentication and protected routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'subscription', element: <SubscriptionPage/> },
        { path: 'studashboard', element: <Dashboard/> },
        { path: 'professionals', element: <Professionals/> },
        { path: 'session', element: <SessionBooking/> },
      
      ],
    },
  ]);

  return (
    <>
   
      
        <RouterProvider router={router} />
    
    
    </>
  );
}

export default App;
