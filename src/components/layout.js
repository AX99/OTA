/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
// import BasicModal from 'components/modal';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      {/* <BasicModal /> */}
      <Footer />
    </React.Fragment>
  );
}
