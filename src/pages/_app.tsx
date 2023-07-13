import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@components/navbar/Navbar';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={` w-screen`}>
      <div className='w-full absolute top-0   flex justify-center z-[-1] '></div>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
}
