/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from "react";
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <Header open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </React.Fragment>
  );
}
