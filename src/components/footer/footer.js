/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import logo from "assets/images/icons/favicon.png";
import Widget from "./widget";
import { menuItems } from "./footer.data";
import { rgba } from "polished";

export default function Footer({ open, toggleHandle }) {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              {/* <Logo /> */}
              <img src={logo} sx={styles.image} alt="logo" />
            </Box>
            <Box sx={styles.terms}>
              <a
                href="https://www.privacypolicies.com/live/6eeb2257-3d89-458b-9f31-80d563401a7b"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of use
              </a>
              <Text as="span">|</Text>
              <a
                href="https://www.privacypolicies.com/live/924dc302-7689-432a-9f1d-519380ff5092"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>
            </Box>
            <Text as="p" sx={styles.copyright}>
              Website by{" "}
              <a
                href="https://ax99.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                AX99
              </a>{" "}
              | {new Date().getFullYear()}
            </Text>
            <Box sx={styles.copyright}>
              <Text as="p">
                © One Twelve Agency Ltd. 2022 | All rights reserved
              </Text>
            </Box>
          </Box>
          <Box sx={styles.widget}>
            {menuItems.map(({ id, title, items }) => (
              <Widget
                key={id}
                title={title}
                items={items}
                open={open}
                toggleHandle={toggleHandle}
              />
            ))}
            <Text as="p" sx={styles.address}>
              71-75 SHELTON STREET, COVENT GARDEN LONDON WC2H 9JQ
            </Text>
          </Box>
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
    gap: ["30px 0px", null, 50, 20],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      null,
      null,
      // 'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 40px",
  },
  about: {
    display: [null, null, null, null, "block"],
    gridTemplateColumns: "205px 1fr 1fr",
    alignItems: ["center"],
    gridRow: ["1/2", null, "1/1"],
    gridColumn: ["1/2"],
  },
  logo: {
    display: ["flex"],
    justifyContent: ["center", null, "left"],
    gridColumn: "1/2",
  },
  image: {
    height: "50px",
  },
  terms: {
    display: ["flex"],
    gridColumn: "3/4",
    alignItems: ["center", null, null, null, "flex-start", "center"],
    flexDirection: ["row", null, null, null, "row"],
    justifyContent: ["center", null, "flex-start", null, "left", "flex-start"],
    mt: [4],
    a: {
      color: "heading",
      textDecoration: "none",
    },
    span: {
      display: ["inline-flex", null, null, null, "inline"],
      m: ["0 10px"],
    },
  },
  address: {
    color: rgba("#0F2137", 0.6),
    fontSize: ["13px"],
    textAlign: ["center", null, "right"],
    fontFamily: "heading",
  },
  copyright: {
    color: rgba("#0F2137", 0.6),
    fontSize: ["14px"],
    mt: [3],
    mr: [null, null, null, null, "unset"],
    gridColumn: "2/3",
    textAlign: ["center", null, "left"],
    a: {
      textDecoration: "underline",
      ":hover": {
        color: "primary",
        textDecoration: "none",
      },
    },
    p: {
      color: rgba("#0F2137", 0.6),
      fontSize: ["13px"],
      fontFamily: "heading",
    }
  },
  widget: {
    display: [null, null, null, null, "block"],
    gridTemplateColumns: "205px 1fr 1fr",
    alignItems: ["center", null, "right"],

    gridRow: ["2/2", null, "1/1"],

    gridColumn: ["1/2", null, "2/2"],
    alignSelf: ["end"],
  },
};
