import '../index.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/landing-page.png" />
        <title>Portfolio</title>
        <meta name="author" content="Kirill Nosov" />
        <meta name="description" content="Portfolio" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
