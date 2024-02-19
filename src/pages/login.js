import React from "react";
import { useSession, signIn, signOut, getSession } from 'next-auth/react';

function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Hi, {session.user.name}!</p>
          <img src={session.user.image} alt="" style={{ borderRadius: '50px', width: '30px', height: '30px', marginLeft: '10px' }} />
        </div>
        <div>
          <br></br>
          <p>Manage your account here.</p>
        </div>
        <div>
          <br></br>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
}

export default Login;