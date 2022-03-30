/** @jsx jsx */
import { jsx, Text, Box, Image, Container } from "theme-ui";
import { rgba } from "polished";
// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionHeading from "components/section-heading";
import logo from "assets/images/icons/favicon.png";

function AboutUs() {
  return (
    <Box
      component="section"
      className="shadow-lg"
      sx={styles.page}
      id="about-us"
    >
      <Box sx={styles.section}>
        <SectionHeading
          title="About Us"
          description="Black and Brown Female owned brand partnerships agency properly
                representing real and diverse lifestyles and cultures."
          sx={styles.heading}
        />
      </Box>
      <Container>
        <Grid container alignItems="center" sx={styles.container}>
          <Grid item xs={12} lg={8} sx={styles.grid}>
            <Text variant="body2" color="text" px={8} mb={2}>
              As founders of OTa having worked in marketing and advertising for
              a number of years and fed up with the lack of interest in
              diversity, we decided to set up One Twelve to truly make a
              difference.
            </Text>

            <Text variant="body2" color="text" px={8} mb={2}>
              We have a passion to ensure that people who look like us are
              properly represented and the stories being told are accurate.
            </Text>

            <Text variant="body2" color="text" px={8} mb={2}>
              We believe that the only way that brands will truly create diverse
              and inclusive campaigns is to work with creators and agencies from
              diverse backgrounds.
            </Text>
          </Grid>
          <Grid item xs={12} lg={4} sx={styles.logo}>
            <Box as="figure" sx={styles.figure}>
              <Image src={logo} alt="logo" />
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
    backgroundColor: rgba("#C8ADA7", 0.5),
    pt: "50px",
    pb: ["50px", null, null, null, null, "150px"],
    minHeight: "100vh"
  },
  heading: {
    mb: [6, null, null, null, ],
    p: {
    fontWeight: [475, null, null, 600,],
    }
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    my: [6, null, null, null, null, 0],
    textAlign: "-webkit-center",
    img: {
      maxWidth: [64, 64, 64, 100, 120, "80%"],
    },
  },
  section: {
    pt: [7, 7, 7],
    pb: [3, 3, 3],
    maxWidth: ["95%", ],
    margin: "auto",
    h2: {
      textDecoration: "underline #21223B",
    },
  },
  grid: {
    pb: ["20px", null, null, null, null, "unset"],
    div: {
      textAlign: ["center", null, null, null, null, "center"],
      px: [4, 8, null, null, "unset"],
    },
  },
  container: {
    display: ["flex"],
    flexDirection: ["column"],
  },
};
