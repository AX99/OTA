/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon1 from "assets/images/icons/handshake.png";
import icon2 from "assets/images/icons/music.png";
import icon3 from "assets/images/icons/diversity.png";
import { aboutInfo } from "../data";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Grid from "@mui/material/Grid";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Brand Partnerships",
    description: `Creating culturally relevant and authentic influencer, celebrity and lifestyle campaigns for brands.`,
  },
  {
    id: 3,
    icon: icon2,
    title: "Music Partnerships",
    description: `Leveraging the power of social, influencers and PR to amplify music projects`,
  },
  {
    id: 4,
    icon: icon3,
    title: "Equity and Inclusion Consultancy",
    description: `Ensuring brand campaigns are representative and inclusive, whilst capturing realistic portrayals.`,
  },
];

const Services = () => {
  return (
    <Box
      as="section"
      className="shadow-md rounded-lg"
      id="what-we-do"
      sx={styles.section}
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What We Do"
          description="Rather than being a trend, we live and breathe inclusion and this is at the forefront of everything One Twelve Agency stands for."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
        <Grid
          item
          xs={12}
          lg={12}
          sx={{ ml: { xs: -2, lg: "0" }, mt: { xs: 6, lg: 4 } }}
        >
          <Box sx={styles.listIcon}>
            {aboutInfo?.map((item) => (
              <Box key={item} sx={styles.listItem}>
                <RiCheckboxCircleFill
                  color="#C8ADA7"
                  size="20px"
                  sx={{ mr: 2 }}
                />
                <span>{item}</span>
              </Box>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  listIcon: {
    mt: ["40px", null, null, "100px"],
    display: "grid",
    justifyContent: "center",
    textAlign: "-webkit-center",
    gridTemplateColumns: ["repeat(2,180px)", null, "repeat(2, 300px)", null, null, null, "repeat(4, 300px)"],
    width: "100%",
  },
  listItem: {
    margin: ["20px", "10px"]
  },
  section: {
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
    // borderBottom: '1px solid #D9E0E7',
    minHeight: "95vh",
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [8, null, null, 8, null, 9, 12],
    h2: {
      // textDecoration: "underline #C8ADA7",
    },
    p: {
      fontWeight: [480],
    }
  },
  contentWrapper: {
    gap: 30,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
    my: ["20px", null, "60px"]
  },
};
