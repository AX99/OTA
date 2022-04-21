/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import close from 'assets/images/icons/close.png';

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vh",
  height: 600,
  backgroundColor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    p: 0,
  },
  close: {
    position: 'absolute',
    top: 35,
    right: 30,
    zIndex: '1',
  },

};

export default function ContactForm({ open, toggleHandle }) {
  return (
    <div>
      {/* <Button onClick={toggleHandle} variant="text">Contact</Button> */}
      <Modal
        open={open}
        onClose={toggleHandle}
        aria-labelledby="modal-contact-form"
        aria-describedby="modal with contact form"
      >
        <Box sx={styles} className="rounded-lg">
          <iframe
            title="contactForm"
            width={"100%"}
            height={"100%"}
            className="rounded-lg"
            sx={{ position: "absolute", top: 0, left: 0 }}
            src="https://us14.list-manage.com/contact-form?u=1dc24a12c61cee8b5e22f1de7&form_id=bc1aa3e69046ef6d31916dd52b764099"
          >
            <button sx={styles.closeButton}>
              <Image src={close} alt="close" />
            </button>
          </iframe>
        </Box>
      </Modal>
    </div>
  );
}
