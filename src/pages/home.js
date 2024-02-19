import React from "react";
import { useSession, signOut, getSession } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();

  const handleButtonClick = async () => {
    console.log('Current session:', session); // Log the session object
  
    if (!session) {
      console.error('No session found. User is not authenticated.');
      return;
    }
  
    try {
      const response = await fetch('/api/extract_emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include the session token in the request headers
          'Authorization': `Bearer ${session.accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Emails retrieved:', data);
      // Handle the data as needed
    } catch (error) {
      console.error('There was an error fetching the emails:', error);
    }
  };

  if (status === 'authenticated') {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Welcome to Fillist, {session.user.name}</p> 
          <img src={session.user.image} alt="" style={{ borderRadius: '50px', width: '30px', height: '30px', marginLeft: '10px' }} />
        </div>
        <br />
        <div>
          <p>We are excited you're here! Fillist is a light weight application that allows you to build a pitch list from your Google Workspace account.</p>
          <br /> 
          <p>Since you're already logged in, just follow the steps for authentication and we'll grab those pesky emails for you!</p>
          <br></br>
          <button onClick={handleButtonClick}>Fetch Sent Emails</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>We are excited you're here, but it looks like you are not logged in yet!</p>
        <br />
        <p>Click "account" to sign in!</p>
        <br />
      </div>
    );
  }
};

export default Home;