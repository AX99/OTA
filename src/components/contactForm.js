/** @jsx jsx */
import { jsx } from 'theme-ui';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  backgroundColor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContactForm({open, toggleHandle}) {
  return (
    <div>
      {/* <Button onClick={toggleHandle} variant="text">Contact</Button> */}
      <Modal
        open={open}
        onClose={toggleHandle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact Form Here
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
