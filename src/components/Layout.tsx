import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "John's GitHub Portfolio", description = "A showcase of my work" }) => {
  return (
    <>
      {/* Meta Tags and Page Title */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Structure with full height background */}
      <div className="min-h-screen flex flex-col bg-neutral dark:bg-gray-900 text-primary dark:text-white">
        <Header /> {/* Site-wide navigation and branding */}
        
        {/* Main Content with spacing between components */}
        <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
          {children}
        </main>

        <Footer /> {/* Footer with social links and copyright */}
      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
};

export default Layout;












