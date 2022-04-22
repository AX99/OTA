import React from "react";
import Search from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import AboutUs from "../sections/about-us";
import Work from "sections/work";
import "@material-tailwind/react/tailwind.css";
import "rc-tabs/assets/index.css";
import "swiper/swiper-bundle.min.css";
import CookieConsent from "react-cookie-consent";

export default function IndexPage() {
  return (
    <Layout>
      <Search title="One Twelve Agency" />
      <Banner />
      <AboutUs />
      <Services />
      <Work />
      <CookieConsent
        buttonText="I Agree"
        cookieName="cookieAgreement"
        overlay={true}
        acceptOnScroll={true}
      >
        We use cookies on this website to enhance your user experience. By
        continuing on this website you are agreeing to the use of these cookies. Click{" "}
        <a
          href="https://www.privacypolicies.com/live/2419c67c-502a-4c72-a39c-29efa479a217"
          target="_blank"
          rel="noopener noreferrer"
          sx={styles.cookie}
        >
          here
        </a>
        {" "}to view our cookie policy.
      </CookieConsent>
    </Layout>
  );
}

const styles = {
  cookie: {
    textDecoration: "underline !important"

  },
}