/** @jsx jsx */
import { jsx, Image } from "theme-ui";
// import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import close from "assets/images/icons/close.png";

const styles = {
  dialog: {
    position: "absolute",
    height: "100%",
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    p: 0,
  },
  close: {
    position: "absolute",
    top: 2,
    left: 2,
    zIndex: "10000",
  },
};

export default function ContactForm({ open, toggleHandle }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={toggleHandle}
        aria-labelledby="modal-contact-form"
        aria-describedby="modal with contact form"
        fullWidth={true}
        maxWidth="lg"
        children={true}
        PaperProps={{ sx: { width: ["85%", "60%", "55%", "45%"], height: "100%" } }}
        
      >
          <button onClick={toggleHandle} sx={styles.closeButton}>
            <Image src={close} sx={styles.close} alt="close" />
          </button>
        <iframe
            title="contactForm"
            width={"100%"}
            height={"100%"}
            className="rounded-lg"
            src="https://us14.list-manage.com/contact-form?u=1dc24a12c61cee8b5e22f1de7&form_id=bc1aa3e69046ef6d31916dd52b764099"
          ></iframe>
      </Dialog>
    </div>
  );
}
