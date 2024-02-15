import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react';
import Sidebar from '@/pages/sidebar/sidebar.js';
export default function App({ Component, pageProps, session }) {
  return (
    
    <SessionProvider session={session}>
      <Sidebar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}