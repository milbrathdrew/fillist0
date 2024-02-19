import React from "react";
import { useSession, signOut, getSession } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Welcome to Fillist, {session.user.name}</p> <img src={session.user.image} alt="" style={{ borderRadius: '50px', width: '30px', height: '30px', marginLeft: '10px' }} />
        </div>
        <br></br>
        <div>
          <p>We are excited you're here! Fillist is a light weight application that allows you to build a pitch list from your Google Workspace account.</p>
          <br></br> 
          <p>Since you're already logged in, just follow the steps for authentication and we'll grab those pesky emails for you!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>We are excited you're here, but it looks like you are not logged in yet!</p>
        <br></br>
        <p>Click "account" to sign in!</p>
        <br></br>
      </div>
    );
  }

};

export default Home;