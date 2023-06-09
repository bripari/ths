import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import Collections from '../components/collections/Collections';
import SocialMedia from '../components/common/SocialMedia';
import Footer from '../components/common/Footer';

const Home = () => (
  <Root>
    <Head>
      <title>The Terrific Heat Collection</title>
    </Head>
    <Collections />

    <ExploreBanner />
    <Footer />
  </Root>
);

export default Home;
