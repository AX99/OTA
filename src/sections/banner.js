/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from "theme-ui";
import { rgba } from "polished";
import { Link } from "react-scroll";
import SectionHeading from "components/section-heading";
import illustration from "assets/images/icons/favicon.png";
import illustration_logo from "assets/images/logos/logo.png";
import down from "assets/images/icons/chevron-down.svg";
// import { height } from "@mui/system";

const Banner = () => {
  return (
    <Box as="section" id="home" className="shadow-md" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
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
          </Box>
          <SectionHeading
            sx={styles.heading}
            description="Music-led brand partnerships agency properly representing real and diverse lifestyles and cultures."
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
    position: "relative",
    height: ["100vh"],
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
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
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    "> div": {
      mt:["50px", null, "25px", null ],
    },
  },
  heading: {
    mb: [30],
    // maxWidth: [null, null, null, 500, 560, 730],
    // maxWidth: [null, null, null, '75%', '75%'],
    pb: [50],
    h2: {
      fontFamily: "Be Vietnam Pro",
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      // fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
      fontSize: ["18px", "20px", "25px"],
      color: "#C8ADA7",
      m: ["40px auto", null],
      maxWidth: "unset",
    },
  },
  illustration: {
    display: ["block", null, "flex", "flex"],
    position: "relative",
    img_logo: {
      display: ["none", "none", "block", "block"],
      maxWidth: [null, null, "75%", "75%"],
      m: ["0 auto"],
    },
    img_: {
      display: ["block", "block", "none"],
      maxWidth: ["45%", "35%", null, null],
      m: ["0 auto"],
    },
  },
  button: {
    borderRadius: "50%",
    backgroundColor: "secondary",
    color: "primary",
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
        transform: "scale(1.3)"
      },
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    position: ["static", null, null, "absolute"],
    left: "50%",
    top: 0,
    transform: ["unset", null, null, "translateX(-50%)"],
  },
};
