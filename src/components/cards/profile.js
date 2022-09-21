/** @jsx jsx */
import { jsx, Text, Box, Image } from "theme-ui";
// import { FaLinkedin } from "react-icons/fa";

const Profile = ({ item }) => {
  return (
    <Box as="figure" sx={styles.figure}>
      <Image
        src={item?.pic}
        alt="logo"
        className="rounded-full hover:shadow-lg-gray transition duration-500"
      />
      <Text as="p">{item?.name}</Text>
      {/* <Link href={item.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25} />
      </Link> */}

      {/* <Text as="p">{item?.title}</Text> */}
    </Box>
  );
};

export default Profile;

const styles = {
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    my: [6, null, null, null, null, 0],
    textAlign: "-webkit-center",
    img: {
      maxWidth: [64, 64, 64, 100, 120, "160px"],
      mb: 2,
    },
    // mr: 80,
    p: {
      fontFamily: "heading",
      fontWeight: [700],
      fontSize: [16, null, null, 18],
    },
  },
};
