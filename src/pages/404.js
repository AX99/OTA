/** @jsx jsx */
// import React from "react";

import { jsx, Container, Box } from "theme-ui";
import Layout from "components/layout";
import Search from "components/seo";

const NotFoundPage = () => (
  <Layout>
    <Search title="404: Not found" />
    <Container sx={styles}>
      <Box>
        <h1>NOT FOUND</h1>
      </Box>
      <Box>
        <p>You just hit a route that doesn&#39;t exist... sorry.</p>
      </Box>
    </Container>
  </Layout>
);

const styles = {
  pt:11,
  minHeight: "70vh",
  textAlign: "center",
  div: {
    h1: {
      fontWeight: "800",
      fontFamily: "body"
    },
    mt: 11,
    py: 4
  }

};

export default NotFoundPage;
