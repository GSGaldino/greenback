import Head from 'next/head';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import Form from '../components/Form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greenback | Consultoria financeira</title>
      </Head>
      <Header />
      <FirstSection />
      <Form />
    </div>
  )
}
