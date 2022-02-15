import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import AboutUs from '../sections/about-us';
import Work from 'sections/work';
import SubscribeUs from 'sections/subscribe-us';
import "@material-tailwind/react/tailwind.css";
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.min.css';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="One Twelve Agency" />
      <Banner />
      <AboutUs />
      <Services />
      <Work />
      <SubscribeUs />
    </Layout>
  );
}
