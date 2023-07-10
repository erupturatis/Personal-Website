import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@components/navbar/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={` w-screen`}>
      <div className='w-full absolute top-0   flex justify-center z-[-1] '>
        <div className=' blur-[250px] md:blur-[500px]  z-[-1] mt-[-100px]  bg-[#1F96EC] w-[300px] md:w-[1000px] h-32 '></div>
      </div>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
}
