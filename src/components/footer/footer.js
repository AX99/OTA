/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
// import Logo from 'components/logo';
import logo from 'assets/images/icons/favicon.png';
import { Link } from 'components/link';
import Widget from './widget';
import { menuItems } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              {/* <Logo /> */}
              <img src={logo} sx={styles.image} alt='logo'/>
            </Box>
            {/* <Box sx={styles.terms}>
              <Link path="#!">Terms of use</Link>
              <Text as="span">|</Text>
              <Link path="#!">Privacy</Link>
            </Box> */}
            <Text as="p" sx={styles.copyright}>
              Website by <Link path="https://ax99.tech"
              target="_blank" rel="noopener noreferrer"
              >AX99</Link> | {new Date().getFullYear()}
            </Text>
          </Box>
          {menuItems.map(({ id, title, items }) => (
            <Widget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
  },
  footerTopInner: {
    // gap: [30, null, 50, '20px 50px', 17, 50],
    gap: ['30px 0px', null, 50, 20],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      // 'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    display: [null, null, null, null, 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', null, 'unset'],
    gridColumn: ['1/3', null, '1/2', null, 'unset'],
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, 'left'],
    gridColumn: '1/2',
  },
  image:{
    height: '50px',
  },
  // terms: {
  //   display: ['flex'],
  //   gridColumn: '3/4',
  //   alignItems: ['center', null, null, null, 'flex-start', 'center'],
  //   flexDirection: ['row', null, null, null, 'row'],
  //   justifyContent: [
  //     'center',
  //     null,
  //     'flex-start',
  //     null,
  //     'left',
  //     'flex-start',
  //   ],
  //   mt: [4],
  //   a: {
  //     color: 'heading',
  //     textDecoration: 'none',
  //   },
  //   span: {
  //     display: ['inline-flex', null, null, null, 'inline'],
  //     m: ['0 10px'],
  //   },
  // },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3],
    mr: [null, null, null, null, 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left'],
    a: {
      textDecoration: 'underline',
      ':hover': {
        color: 'primary',
        textDecoration: 'none',
    },
  },
},
}