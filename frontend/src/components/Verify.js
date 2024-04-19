import React, { useContext } from 'react';
import Header from './Header'
import Footer from './Footer'
import { userContext } from '../context/userContext';
import Error from './Error';


const Verify= () => {
  const values= useContext(userContext)
  const email=values.user.email
  
  console.log(values.user)
  

  return (<>
   {localStorage.getItem("token") && email?
   <>
  <Header/>
    <div className="flex justify-center text-center items-center h-screen md:h-full md:p-28">
      <div className="bg-white p-8 w-full lg:max-w-screen-lg">
        <h1 className="md:text-4xl text-3xl font-bold mb-4">Please verify your email...</h1>
        <div className="flex justify-center mb-4">
          <div className="bg-gray-400 rounded-full p-4">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Please verify your email address. We've sent a confirmation email to:
          <span className="font-bold">{email}</span>
        </p>
        <p className="text-gray-600 mb-4">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="text-gray-600 mb-4">
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you
          still don't see it, you can{' '}
          <a href="/" className="text-pink-500 hover:underline">
            resend the confirmation email.
          </a>
        </p>
        <p className="text-gray-600 mb-4">
          Wrong email address?{' '}
          <a href="/" className="text-pink-500 hover:underline">
            Change it.
          </a>
        </p>
      </div>
    </div>
    <Footer/></>:<Error text="The Connection Has Timed Out"/>}
    </>
  );
};

export default Verify;