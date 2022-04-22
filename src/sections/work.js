/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import { rgba } from "polished";
import Grid from "@mui/material/Grid";
import SectionHeading from "components/section-heading";
import data, {brands} from "../data";
import WorkTab from "../components/tabbed";

const Work = () => {
  return (
    <Box as="section" className="shadow-xl"  id="work" sx={styles.section}>
      <Box sx={styles.sectionHead}>
        <SectionHeading sx={{fontWeight: [475, null, null, 600,], marginBottom: '15px'}} title="Work" />
      </Box>
      <Container className="rounded-md shadow-lg" xs={12} md={6} sx={styles.container}>
        <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
          {data?.map((item, i) => (
            <TabPane
              key={i}
              // tab={<Heading as="h4">{item.brandName}</Heading>}
              tab={<Image sx={styles.tabs.image} src={item.logo} alt="brand"/>}
            >
              <Box sx={{minWidth: 'unset'}}>
                <WorkTab data={data} mainTab={i} />
              </Box>
              <Box sx={styles.illustration}>
                <Image className="rounded-md" src={item.img} alt="illustration" />
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
      <Container xs={12} sx={{my: 8}}>
        <Grid container spacing={2} sx={styles.grid} alignItems="center">
          {brands?.map((item, i) => (
            <Grid key={i} item xs={4} sm={2.4} md={2.4}>
              <Image sx={styles.image}  src={item.icon} alt="logo"/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;

const styles = {
  container: {
    maxWidth: ["95%", null, null, null, null],
    backgroundColor: "#fff",
  },
  image: {
    maxWidth: ["80%", null, "70%", "50%"],
    margin: "auto",
    display: "flex",
    filter: "grayscale(100%)",
    ":hover": {
      filter: "unset"
    }
  },
  sectionHead: {
    pt: [8],
    pb: [3, null, null, 5],
    margin: "auto",
    h2: {// textDecoration: 'underline #C8ADA7',
    }
  },
  section: {
    pt: [8],
    backgroundColor: rgba('#C8ADA7', 0.5),
    pb: [8],
    minHeight: "100vh"
  },
  tabs: {
    border: "none",
    image: {
        maxWidth: ["30%", null, null, "20%"]
      },
    ".rc-tabs-content-holder": {
      minHeight: "400px",
      mb: 20
    },
    ".rc-tabs-ink-bar": {
      backgroundColor: "primary"
    },
    ul: {
      backgroundColor: "primary",
      justifyContent: "center"
    },
    ".rc-tabs rc-tabs-top": {
      border: "none",
      height: "400px"
    },
    ".rc-tabs-nav": {
      mb: [8, null, null, 9, 10, 9, 10]
    },
    ".rc-tabs-nav-wrap": {
      borderBottom: `1px solid ${rgba("#01070D", 0.1)}`,
      justifyContent: "center"
    },
    ".rc-tabs-nav-list": {
      flexGrow: 1,
      justifyContent: "space-evenly",
      py: [3, null, null, 5, null, 6]
    },
    ".rc-tabs-tab-btn": {
      outline: 0,
      alignItems: "center",
      img: {
        outline: 0
      }
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      m: [0, null, '0 10px'],
      textAlign: "-webkit-center",
      h4: {
        fontFamily: "body",
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ["center", null, null, null, "left"],
        whiteSpace: ["break-spaces", null, null, null, "unset"]
      }
    },
    ".rc-tabs-tabpane": {
      display: ["flex", null, "flex", "grid"],
      flexDirection: ["column", null, null, "unset"],
      alignItems: "center",
      justifyContent: "center",
      gridTemplateColumns: [null, null, null, "0.9fr 1.1fr"],
      outline: 0,
      gap: [5],
      h2: {
        color: "heading",
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, "0.5px", null, "-1px"],
        textAlign: ["center", null, null, "left"]
      },
      p: {
        color: "textSecondary",
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ["center", null, null, "left"],
        mt: [4]
      },
      ".list-item": {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: "flex",
        alignItems: "center"
      }
    }
  },
  list: {
    mt: [5],
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: ["repeat(2, 164px)", null, null, "repeat(2, 180px)"]
  },
  illustration: {
    display: ["flex"],
    alignItems: "center",
    justifyContent: "center",
    textAlign: [null, null, null, null, null, "center"],
    // m: "30px auto",
    p: "15px"
    // img: {
    //   maxWidth: ["30%", null, null, "40%"],
    // },

  },
  grid: {
    px: ["20px", null, "unset"],
    placeContent: "center"
  }
};