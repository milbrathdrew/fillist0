/*
import React from "react";
import Link from 'next/link';

import { useSession, signOut, getSession } from 'next-auth/react';

const account = () => {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>

            </div>
        );
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <br></br>
                <Link href="/login" className="rounded-full bg-purple-800 text-white p-2 mt-2 shadow-lg hover:shadow-xl">Login</Link>
            </div>
        );
    }
};

export default account;

//server side rendering
//redirect a user if not logged in

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
};
*/