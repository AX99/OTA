/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from "react";
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import ScrollToTop from "react-scroll-to-top";
import { rgba } from 'polished';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const toggleHandle = () => setOpen(!open);
  return (
    <React.Fragment>
      <Header open={open} toggleHandle={toggleHandle} />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer open={open} toggleHandle={toggleHandle} />
      <ScrollToTop 
      top = "800"
      smooth
      viewBox = "0 0 140 300"
      style={styles.scroll}
    />
    </React.Fragment>
  );
}


const styles = {
  scroll: {
    backgroundColor: rgba('#fff', 0.4),
    zIndex: 50
  }
}