import '@/styles/globals.css'; // Using the alias @/* 

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
