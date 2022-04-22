/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from "theme-ui";
import { rgba } from "polished";
import { Link } from "react-scroll";
import SectionHeading from "components/section-heading";
// import illustration from "assets/images/icons/favicon.png";
// import illustration_logo from "assets/images/logos/logo.png";
import down from "assets/images/icons/chevron-down.svg";

const Banner = () => {
  return (
    <Box as="section" id="home" className="shadow-md" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          {/* <Box sx={styles.illustration}>
            <Image
              src={illustration}
              alt="illustration"
              sx={styles.illustration.img_}
            />
            <Image
              src={illustration_logo}
              alt="illustration logo"
              sx={styles.illustration.img_logo}
            />
          </Box> */}
          <SectionHeading
            sx={styles.heading}
            description="One Twelve Agency
            create brand partnerships and strategies through culturally relevant moments to tell a brand’s story or amplify music projects."
          />

          <Box sx={styles.illustration}>
            <Box sx={styles.buttonWrapper}>
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
              >
                <Button  sx={styles.button}>
                  <Image 
                    src={down}
                    alt="Start Button"
                  />
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    minHeight: ["100vh"],
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
    zIndex: 0,
    ":before": {
      backgroundColor: rgba("#FFF", 0.5),
      content: ["none", null, null, `''`],
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: "flex",
    height: ["80vh",null,  "60vh"],
    pt: [18],
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    "> div": {
      mt:["25px", null, "25px", null ],
    },
  },
  heading: {
    mt: [40, null, 30],
    mb: ["50%", null, 40],
    maxWidth:["unset"],
    p: {
      // fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
      fontFamily: "heading",
      fontSize: ["18px", "20px", "25px", 28, 30, 32, 36],
      fontWeight: "900",
      color: "#C8ADA7",
      pt: 28,
      m: ["15px auto", null, null],
      maxWidth:["unset"]
    },
  },
  illustration: {
    // display: ["flex"],
    display: ["block", null, "flex"],
    position: "relative",
    // img_logo: {
    //   display: ["none", "none", "block"],
    //   maxWidth: [null, null, "75%"],
    //   m: ["0 auto"],
    // },
    // img_: {
    //   display: ["block", "block", "none"],
    //   maxWidth: ["45%", "35%", null, null],
    //   m: ["0 auto"],
    // },
  },
  button: {
    borderRadius: "50%",
    backgroundColor: "transparent",
    p: 6,
    height: "80px",
    width: "80px",
    img: {
      filter: "invert(71%) sepia(35%) saturate(140%) hue-rotate(324deg) brightness(93%) contrast(95%)",
      minWidth: "30px",
      transition: "transform 1s",
    },
    ':hover': {
      img:{
        transform: "scale(1.3)",
        filter: "invert(10%) sepia(6%) saturate(5901%) hue-rotate(199deg) brightness(95%) contrast(89%)",
      },
      backgroundColor: "primary",
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    position: ["static", null, null, "inherit"],
    left: "50%",
    top: 0,
    transform: ["unset", null, null, "translateX(-50%)"],
  },
};
