import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // The Layout component wraps all the pages for consistent styling and structure.
  return (
    <Layout>
      <Component {...pageProps} /> {/* Dynamically loads the current page's content */}
    </Layout>
  );
}

export default MyApp;









