import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Clear from "../../public/icon/Clear";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: ".4rem",
  boxShadow: 24,
  p: 3,
};

const ModalContainer = ({ width, children, open, setOpen, title, clear, necessary, className }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" sx="rtl" open={open} onClose={!necessary && handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
      <Fade in={open}>
        <Box style={{ direction: "rtl" }} className={className} sx={style}>
          <div className="flex-between-start">
            {title && <p className="text-base font-semibold mb-6">{title}</p>}
            {clear && (
              <span className="cursor-pointer" onClick={handleClose}>
                <Clear />
              </span>
            )}
          </div>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalContainer;
