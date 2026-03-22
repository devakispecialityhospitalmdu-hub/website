
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import Select from "react-select";
import axios from "axios";
import { format } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [doctorList, setDoctorList] = useState([]);
  const [docId, setDocId] = useState("");
  const [outsideDr, setOutsideDr] = useState("");
  const [consulHr, setConsulHr] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const [date, setDate] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState("");

  const [error, setError] = useState("");
  const [numError, setNumError] = useState("");
  const [timeError, setTimeError] = useState("");

  // 🔹 Fetch doctors
  useEffect(() => {
    axios
      .get(
        "https://dev.devakicare.com/admin/api_controller/getconsultant?branch=1&api=1&online_appointment=1"
      )
      .then((res) => {
        const options = res.data.data.map((d) => ({
          value: d.id,
          label: d.name,
          otherStaff: d.otherstaff,
        }));
        setDoctorList(options);
      });
  }, []);

  // 🔹 Fetch time slots
  const getConsultingHrs = (doctorId, otherDoctor, formattedDate) => {
    const url = `https://dev.devakicare.com/admin/api_controller/getappointment_details?branch=1&doctor_id=${doctorId}&outside_dr=${otherDoctor}&appointment_date=${formattedDate}&api=1`;

    axios.get(url).then((res) => {
      const data = res.data.data;
      if (!data || !data.length) return;

      const cH = JSON.parse(data[0].consultation_hours || "[]");

      const slots = cH.map((t) => ({ hours: t }));
      setConsulHr(slots);
    });
  };

  // 🔹 Doctor change
  const doctoronChange = (option) => {
    setDocId(option.value);
    setOutsideDr(option.otherStaff);

    const formattedDate = format(date, "yyyy-MM-dd");
    getConsultingHrs(option.value, option.otherStaff, formattedDate);
  };

  // 🔹 Date change
  const changeNextDate = () => {
    const d = new Date(date);
    d.setDate(d.getDate() + 1);
    setDate(d);

    const formatted = format(d, "yyyy-MM-dd");
    getConsultingHrs(docId, outsideDr, formatted);
  };

  const changePreDate = () => {
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    setDate(d);

    const formatted = format(d, "yyyy-MM-dd");
    getConsultingHrs(docId, outsideDr, formatted);
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!firstName) {
      setError("❌ Enter name");
      valid = false;
    } else setError("");

    if (!number || number.length !== 10) {
      setNumError("❌ Invalid phone");
      valid = false;
    } else setNumError("");

    if (!selectedTime) {
      setTimeError("❌ Select time");
      valid = false;
    } else setTimeError("");

    if (!docId) {
      alert("Select doctor");
      valid = false;
    }

    if (!valid) return;

    const formattedDate = format(date, "yyyy-MM-dd");

    axios
      .post(
        `https://dev.devakicare.com/admin/api_controller/create_appointment?branch=1&doctor_id=${docId}&appointment_date=${formattedDate}&appointment_time=${selectedTime}&api=1`
      )
      .then((res) => {
        alert("✅ Appointment booked");
        setOpen(false);
      });
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Appointment</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6">Book Appointment</Typography>

          {/* Name */}
          <input
            placeholder="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p>{error}</p>

          {/* Phone */}
          <input
            placeholder="Phone"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p>{numError}</p>

          {/* Doctor */}
          <Select options={doctorList} onChange={doctoronChange} />

          {/* Date */}
          <div style={{ marginTop: 10 }}>
            <button onClick={changePreDate}>Prev</button>
            <span style={{ margin: "0 10px" }}>
              {format(date, "dd-MM-yyyy")}
            </span>
            <button onClick={changeNextDate}>Next</button>
          </div>

          {/* Time */}
          <div style={{ marginTop: 10 }}>
            {consulHr.map((t, i) => (
              <button
                key={i}
                onClick={() => setSelectedTime(t.hours)}
                style={{
                  margin: 5,
                  background:
                    selectedTime === t.hours ? "blue" : "lightgray",
                }}
              >
                {t.hours}
              </button>
            ))}
            <p>{timeError}</p>
          </div>

          {/* Submit */}
          <Button variant="contained" onClick={handleSubmit}>
            Book Appointment
          </Button>
        </Box>
      </Modal>
    </div>
  );
}