/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from 'theme-ui';
import { rgba } from 'polished';
// import SectionHeading from 'components/section-heading';
// import illustration from 'assets/images/banner-illustration.png';
import illustration from 'assets/images/icons/favicon.png';
import illustration_logo from 'assets/images/logos/logo.png';

const Banner = () => {
  return (
    <Box as="section" id="home" className="shadow-md" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image src={illustration} alt="illustration" sx={styles.illustration.img}/>
            <Image src={illustration_logo} alt="illustration logo" sx={styles.illustration.img_logo} />
          </Box>
          {/* <SectionHeading
            sx={styles.heading}
            title="One Twelve Agency"
            description="Black and Brown Female owned brand partnerships agency, properly representing real and diverse lifestyles and cultures."
          /> */}

          <Box sx={styles.illustration}>
            <Box sx={styles.buttonWrapper}>
              <Button onclick="#work">Get Started</Button>
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
    position: 'relative',
    height:['100vh'],
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    mb: [30],
    // maxWidth: [null, null, null, 500, 560, 730],
    maxWidth: [null, null, null, '75%', '75%'],
    pb: [50],
    h2: {
      fontFamily: 'Be Vietnam Pro',
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ['block', null, 'flex', 'flex'],
    position: 'relative',
    img_logo: {
      display: ['none', 'none', 'block', 'block'],
      maxWidth: [null, null, '75%', '75%'],
      m: ['0 auto'],
    },
    img: {
      display: ['block', 'block', 'none', 'none'],
      maxWidth: ['25%', '25%', null, null],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
};
