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
import { Link } from "components/link";

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
        debug={true}
        overlay={true}
      >
        We use cookies on this website to enhance your user experience. By
        continuing on this website you are agreeing to the use of these cookies.{" "}
        <Link
          path="https://www.privacypolicies.com/live/2419c67c-502a-4c72-a39c-29efa479a217"
          target="_blank"
        >
          Click to view our Cookies Policy
        </Link>
        .
      </CookieConsent>
    </Layout>
  );
}
