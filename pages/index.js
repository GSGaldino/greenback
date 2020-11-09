import Head from 'next/head';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import Articles from '../components/Articles';
import Transformations from '../components/Transformations';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greenback | Consultoria financeira</title>
      </Head>
      <Header />
      <FirstSection />
      <Articles />
      <Transformations />
      <Footer />
    </div>
  )
}
