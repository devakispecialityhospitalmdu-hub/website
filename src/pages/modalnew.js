import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import "./svg.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  //overflow:scrollable;
  p: 4,
  maxWidth: '100%',
  maxHeight: '100%'
};

export default function BasicModal1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [name_error, setNameError] = useState(' ');
  // const [email_error, setEmailError] = useState(' ');
  // const [date_error, setDateError] = useState(' ');
  // const [time_error, setTimeError] = useState(' ');
  const handleButton = event => {
    console.log("handle");

  };

  return (
    <div>
      <Button onClick={handleOpen} style={{ marginLeft: "5px" }}><span id="appointment-btn" className=" theme-btn btn-style-two btn-title hover">Appointment</span></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="model">
            <div className="contact-form-two">
              <div className="title-box text-center">
                <h4>Coming Soon</h4>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}






