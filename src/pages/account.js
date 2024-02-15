import React from "react";
import { useSession, signOut, getSession } from 'next-auth/react';

const account = () => {
    //using required true will redirect us automatically
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
                destination: '/login'
            }
        }
    }
}