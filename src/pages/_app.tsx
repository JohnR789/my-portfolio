// src/pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

