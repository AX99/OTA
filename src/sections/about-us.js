/** @jsx jsx */
import { jsx, Text, Box, Container, Grid } from "theme-ui";
import { rgba } from "polished";
// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import SectionHeading from "components/section-heading";
import G from "assets/images/g.png";
import Hannah from "assets/images/hannah.png";
import Profile from "components/cards/profile";

const staff = [
  {
    name: "G",
    title: "Co-Founder",
    pic: G,
    linkedin: "http://linkedin.com"
  },
  {
    name: "Hannah",
    title: "Co-Founder",
    pic: Hannah,
    linkedin: "http://linkedin.com"
  },
];

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
          title="ABOUT US"
          description="FOUNDED BY BLACK & BROWN WOMEN WHO HAVE A TRUE UNDERSTANDING OF THE LIFESTYLES AND CULTURES ASSOCIATED WITH GEN Z MARKETING AND RELEVANT SUBCULTURES, ALONGSIDE A PASSION TO SEE THIS PROPERLY REPRESENTED"
          sx={styles.heading}
        />
      </Box>
      <Container>
        <Grid container alignItems="center" sx={styles.container}>
          <Grid item xs={12} lg={5} sx={styles.portrait}>
            {staff?.map((item, i) => (
              <Profile key={i} item={item} />
            ))}
          </Grid>
          <Grid item xs={12} lg={7} sx={styles.grid}>
            <Text as="p" variant="body2" color="text" px={8} mb={2}>
              With over 15 years combined experience working in
              marketing and advertising and seeing the lack of interest in
              authentic cultural marketing, we decided to set up One Twelve Agency
              to truly make a difference.
            </Text>

            <Text as="p" variant="body2" color="text" px={8} mb={2}>
              We have a passion to ensure that people who look like us are
              properly represented and the stories being told are accurate.
            </Text>

            <Text as="p" variant="body2" color="text" px={8} mb={2}>
              We believe that the only way that brands will truly create
              inclusive campaigns is to work with creators and agencies from
              diverse backgrounds.
            </Text>
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
    minHeight: "100vh",
  },
  heading: {
    mb: [6, null, null, null],
    p: {
      maxWidth: [null, null, null, "none"],
    },
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
    pt: [8],
    pb: [3, 3, 6],
    maxWidth: ["95%", null, null, null, "100%"],
    margin: "auto",
    p: {
      maxWidth: "none",
    },
  },
  grid: {
    pb: ["20px", null, null, null, null, "unset"],
    p: {
      textAlign: ["center", null, null, null, null, "center"],
      px: [4, 8, null, null, "unset"],
      fontFamily: "body",
      fontSize: [16],
    },
    mt: [5, null, null, null, 30],
  },
  portrait: {
    display: "inline-flex",
    justifyContent: "center",
    margin: "auto",
    mb: [5, null, null, null],
  },
  container: {
    display: ["block"],
    textAlign: "center",
    "figure:not(:last-child)": {
      mr: [40, null, null, null, 80],
    },
  },
};
