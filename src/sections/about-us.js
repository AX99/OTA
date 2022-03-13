import React from "react";
import { rgba } from 'polished';
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionHeading from "components/section-heading";
import { Text, Box } from "theme-ui";
import {aboutInfo} from "../data";
import { RiCheckboxCircleFill } from "react-icons/ri";

function AboutUs() {
  return (
    <Box component="section" className="shadow-lg" sx={styles.page} id="about-us" py={{ xs: 3, md: 12 }}>
      <Box sx={styles.section}>
        <SectionHeading
          title="About Us"
          description="Black and Brown Female owned brand partnerships agency properly
                representing real and diverse lifestyles and cultures."
        />
      </Box>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={8} sx={styles.grid}>
            <Text variant="body2" color="text" px={8} mb={2}>
              As founders of OTa having worked in marketing and advertising for
              a number of years and fed up with the lack of interest in
              diversity, we decided to set up One Twelve to truly make a
              difference.
            </Text>  

            <Text variant="body2" color="text" px={8} mb={2}>
              We have a passion to ensure that people who look like
              us are properly represented and the stories being told are
              accurate. 
            </Text>  

            <Text variant="body2" color="text" px={8} mb={2}>
              
              We believe that the only way that brands will truly
              create diverse and inclusive campaigns is to work with creators
              and agencies from diverse backgrounds.
            </Text>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
          >
            <Box sx={styles.list}>
              {aboutInfo?.map((item) => (
                <Box key={item} className="list-item">
                  <RiCheckboxCircleFill
                    color="#3FDBB1"
                    size="20px"
                    sx={{ mr: 2 }}
                  />
                  <span>{item}</span>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;

const styles = {
  page: {
    backgroundColor:  rgba('#C8ADA7', 0.5),
  },
  section: {
    // backgroundColor: "#FFF",
    pt: [7, 7, 7, 9, 9, 9, 9],
    pb: [3, 3, 3, 7, 7, 9, 9],
    margin: "auto",
  },
  grid:{
    'p': {
      textAlign: 'center',
    }
  },
  list: {
    mt: [5],
    display: "grid",
    justifyContent: "center",
    textAlign: "-webkit-center",
    gridTemplateColumns: ["repeat(2, 164px)", null, null, "repeat(2, 180px)"],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
};
