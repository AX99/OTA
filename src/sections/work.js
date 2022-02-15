/** @jsx jsx */
import { jsx, Box, Container, Heading, Image, Divider } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import { rgba } from "polished";
import tabImage1 from "assets/images/tab-illustration-1.png";
import Grid from "@mui/material/Grid";
import SectionHeading from "components/section-heading";
import data, {brands} from "../test-data";
import Test from "../components/tabbed";

const datla = [
  {
    id: 1,
    tabTitle: "Why you choose our service?",
    title: `We will turn your idea in the successful business model framework`,
    description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
    moreLink: "#explore-more",
    image: tabImage1,
    list: [
      "Medical and vision",
      "Life insurance",
      "HSAs and FSAs",
      "Commuter benefits",
    ],
  },
  {
    id: 2,
    tabTitle: "What’s our business promise?",
    title: `We will turn your idea in the successful business model framework`,
    description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
    moreLink: "#explore-more",
    image: tabImage1,
    list: [
      "Medical and vision",
      "Life insurance",
      "HSAs and FSAs",
      "Commuter benefits",
    ],
  },
  {
    id: 3,
    tabTitle: "What’s our role model plan?",
    title: `We will turn your idea in the successful business model framework`,
    description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
    moreLink: "#explore-more",
    image: tabImage1,
    list: [
      "Medical and vision",
      "Life insurance",
      "HSAs and FSAs",
      "Commuter benefits",
    ],
  },
];

const Work = () => {
  return (
    <Box as="section" id="work" sx={styles.section}>
      <Box sx={styles.sectionHead}>
        <SectionHeading title="Work" description="Work subheading" />
      </Box>
      <Container xs={12} md={6}>
        <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={<Heading as="h4">{item.brandName}</Heading>}
            >
              <Box>
                <Test data={data} mainTab={item.id} />
              </Box>
              <Box sx={styles.illustration}>
                <Image src={item.logo} alt="illustration" />
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
      <Divider my={8} />
      <Container xs={12}>
        <Grid container spacing={2} alignItems="center">
          {brands?.map((item) => (
            <Grid item xs={2.4} sm={2.4} md={2.4}>
              <Image sx={styles.image}  src={item.icon} alt="logo"/>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider mt={8} />
    </Box>
  );
};

export default Work;

const styles = {
  image: {
    maxWidth: ['100%', null, '70%', '50%'],
    margin: 'auto',
    display: 'flex',
    filter: 'grayscale(100%)',
    ":hover": {
      filter: 'unset'
    }
  },
  sectionHead: {
    backgroundColor: "#FFF",
    pt: [7, 7, 7, 9, 9, 9, 9],
    pb: [3, 3, 3, 7, 7, 9, 9],
    margin: "auto",
  },
  section: {
    // pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
    minHeight: '100vh'
  },
  tabs: {
    ".rc-tabs rc-tabs-top": {
      border: 'none',
      height: '400px',
    },
    ".rc-tabs-nav": {
      mb: [8, null, null, 9, 10, 9, 10],
    },
    ".rc-tabs-nav-wrap": {
      borderBottom: `1px solid ${rgba("#01070D", 0.1)}`,
      justifyContent: "center",
    },
    ".rc-tabs-nav-list": {
      flexGrow: 1,
      justifyContent: "space-evenly",
      pb: [3, null, null, 5, null, 6],
    },
    ".rc-tabs-tab-btn": {
      outline: 0,
      alignItems: "center",
      img: {
        outline: 0,
      },
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      // m: ['0 45px'],
      h4: {
        fontFamily: "body",
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ["center", null, null, null, "left"],
        whiteSpace: ["break-spaces", null, null, null, "unset"],
      },
    },
    ".rc-tabs-tabpane": {
      display: ["flex", null, null, "grid"],
      flexDirection: ["column-reverse", null, null, "unset"],
      alignItems: "center",
      justifyContent: "center",
      gridTemplateColumns: [null, null, null, "0.9fr 1.1fr"],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: "heading",
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, "0.5px", null, "-1px"],
        textAlign: ["center", null, null, "left"],
      },
      p: {
        color: "textSecondary",
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ["center", null, null, "left"],
        mt: [4],
      },
      ".list-item": {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: "flex",
        alignItems: "center",
      },
    },
  },
  list: {
    mt: [5],
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: ["repeat(2, 164px)", null, null, "repeat(2, 180px)"],
  },
  illustration: {
    display: ["flex"],
    alignItems: "center",
    justifyContent: "center",
    textAlign: [null, null, null, null, null, "center"],
    img: {
      maxWidth: ["65%", null, null, "100%", null, "75%", "75%"],
    },
  },
};
