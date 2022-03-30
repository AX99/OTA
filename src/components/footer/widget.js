/** @jsx jsx */
import { jsx, Box, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import { rgba } from "polished";

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <Link
              path={path}
              key={i}
              label={label}
              target="_blank"
              rel="noopener noreferrer"
              variant="footer"
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    justifySelf: [null, null, "right"],
    gridColumn: [0, null, 2],
    alignSelf: "center",
    h4: {
      color: "heading",
      fontFamily: "body",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: "heading",
      textAlign: ["center", null, "unset", "right"],
      mr: [null, null, null, 35],
    },
    ul: {
      listStyle: "none",
      margin: "28px 0 0",
      padding: 0,
      display: ["flex", null, "unset", "flex", "flex"],
      justifyContent: ["space-evenly", null, "unset"],
      li: {
        display: ["block", null, "flex"],
        mr: [0, 0, "40px"],
        alignItems: "center",
        textAlign: ["-webkit-center", null, "unset"],
        img: {
          mr: [0, null, "15px"],
          maxWidth: ["25px", null, null, "30px"],
        },
      },
      a: {
        color: rgba("#02073E", 0.8),
        ":hover": {
          textDecoration: "underline",
        },
      },
      img: {
        filter: "brightness(1%)",
        ":hover": {
          filter: "unset", 
        },
      },
    },
  },
};
