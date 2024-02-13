import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import MultiCounter from '../components/MultiCounter';




export default function Home() {
  return (
    <>
      <Head>
        <title>Counter</title>
        <meta name="description" content="Browse a list of new counter" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <MultiCounter />
    </>
  );
}
