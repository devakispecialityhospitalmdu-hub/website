import  React, {useState, useEffect}from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import axios from "axios";

import "./svg.css";
// import BasicModalapi from './myapi';
// import BasicModalapi1 from './modalapi';
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import ReactDOM from 'react-dom/client';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { MDBBtn } from 'mdb-react-ui-kit';
const style = {
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height:'auto',
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  //overflow:scrollable;
  p: 4,
  p: 2,
  maxWidth: '100%',
    maxHeight: '100%',
    overflowY: 'scroll'
};

 
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState('yes');
  const [patient_type, setPatientType] = useState('new');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [name_error, setNameError] = useState(' ');
  // const [email_error, setEmailError] = useState(' ');
  // const [date_error, setDateError] = useState(' ');
  // const [time_error, setTimeError] = useState(' ');

  const [result, setResult] = useState(null);
  const [doctorList, setDoctorlist] =useState([]);
  const [consulHr, setConsulHr] = useState ([]);
  const [date, setDate] = useState(new Date());
  const { format } = require("date-fns");
  const [selectedTime , setSelectedTime] = useState(null);
  const [timeError, setTimeError] = useState("");
  const [firstName, setFirstName] = useState('') ;
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [numError, setNumError] = useState("");
  const [docId ,setDocId] = useState("");
  const [outsideDr , setOutsideDr] = useState("");
  const [selectchange ,setSelectedChange] = useState("");
  const [docError, setDocError] = useState("");
  const [post, setPost] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState(null);
  const [preDate, setPreDate] = useState(new Date());
  const [patientId, setPatientId] = useState("");
  const [pError, setPError] = useState("");
  const [patId, setPatId] = useState("");
  const [appDate, setAppointmentDate] = useState("");
  useEffect(() => {
        getDoctersApi();
        console.log("useEffect...");
    },[]);

    const getDoctersApi = () => {
        console.log("getDrs");
        var baseUrl = "https://dev.devakicare.com/admin/api_controller/getconsultant?branch=1&api=1";
        axios.get(baseUrl,{}).then((response) => {
          console.log(response.data)
        });
    };
  const handlePrevClick = () => {
  
};

const handleNextClick = () => {
  
};
      var baseUrl = 'https://dev.devakicare.com/admin/api_controller/getconsultant?branch=1&api=1&online_appointment=1';
      axios.get(baseUrl,{}).then((response) => {
        var doctors = response.data.data
        const options = doctors.map(d => ({
          "value" : d.id,
          "label" : d.name,
          "otherStaff" : d.otherstaff,
          "consulHr" : d.consultation_hours,
          "appointDate" : d.appointment_date
        }))
        setDoctorlist (options) 
      });
    const doctoronChange = (option) =>{
    var doctorId = option.value
    setDocId(doctorId)
    var otherDoctor = option.otherStaff
    setOutsideDr(otherDoctor)
    var appointmentDate = option.appointment_date
    setAppointmentDate(appointmentDate)
    if (docId == null){
      setDocError("❌ Please Select a doctor");
    }else{
      setDocError("");
    }
    getConsultingHrs(doctorId , otherDoctor);
  } 

  const getConsultingHrs =(doctorId , otherDoctor) =>{
    var baseUrl = "https://dev.devakicare.com/admin/api_controller/getappointment_details?branch=1&api=1&doctor_id=" + doctorId + "&outside_dr=" + otherDoctor + "&appointment_date=2023-09-08" ;

    // var baseUrl = "https://dev.devakicare.com/admin/api_controller/getappointment_details?branch=1&doctor_id="+ doctorId + "&outside_dr=" + otherDoctor + "&appointment_date=" + appointmentDate + "&api=1 " ;
    axios.get(baseUrl).then((res) =>{
      var dta = res.data.data 
      var cH = JSON.parse( dta[0].consultation_hours );
      console.log(cH)
      var getConsultingHours = [] ;
      cH.forEach ((hours,index) => {
        var timings = hours.split(" - ");
        var startTime = timings[0];// 10:00
        var [hrs, mins] = startTime.split(":");
        var timeObj = new Date();
        timeObj.setHours(hrs);
        timeObj.setMinutes(mins);
        var formattedTime = format(timeObj, 'kk:mm aaa') ;

        var endTime = timings[1]; // 10:30
         [hrs, mins] = endTime.split(":");
         timeObj = new Date();
        timeObj.setHours(hrs);
        timeObj.setMinutes(mins);
        var formattedEndTime = format(timeObj, 'kk:mm aaa') ;

        var time = formattedTime + ' - ' + formattedEndTime ; //10:00 am - 10:30

        getConsultingHours.push({
          hours: time
        })
      })
      setConsulHr(getConsultingHours)

    });
  }
  const getNextDate =(doctorId , otherDoctor , appointmentDate) =>{
    var baseUrl = "https://dev.devakicare.com/admin/api_controller/getappointment_details?branch=1&api=1&doctor_id=" + doctorId + "&outside_dr=" + otherDoctor + "&appointment_date=" + appointmentDate ;
    axios.get(baseUrl).then((res) =>{
      var datas = res.data.data 
      var aD = JSON.parse( datas[0].appointmentDate );
      console.log(aD)
    });
}
  const onTimeChange = (event,hours) =>{
    setSelectedTime(hours);
     if(selectedTime == 0) {
      setTimeError("❌ Time Selection is required");
    }else{
      setTimeError("");
    }
  }
  const changeNextDate = (event) =>{
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(tomorrow);
    setDate(tomorrow) 
    getConsultingHrs(docId , outsideDr);
    getNextDate(docId , outsideDr , appDate);
  }
  const changePreDate = (event) =>{
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    console.log(yesterday);
    setDate(yesterday)
    getConsultingHrs(docId , outsideDr);
  }

  const handleButton = event => {
    console.log("handle");
    console.log(event.target.value);
    setPatientType(event.target.value);

    setFirstName('')
    setNumber('')
    setDocId('')
    setConsulHr('')
    if (event.target.value == 'old'){
      setShowDetails(false);

    }else{
      setShowDetails(true);
    }
    setFirstName("");
    setNumber("");

  };
  const [inputValues, setInputValue] = useState({
    fName: ' ',
    phoneNo: ' ',
    time:'',
    date:'',
    });
  const [validation, setValidation] = useState({
    fName: ' ',
    phoneNo: ' ',
    time:'',
    date:'',
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
   const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validation;
    //Name Validation
   const handleNextClick = () => {
    console.log(inputValues.fName)
    if (!inputValues.fName.trim()) {
       errors.fName ='Patient name is required';
    } else {
      errors.fName = ' ';
     }
   }

  const onNumberChange =(e) =>{
    setNumber (e.target.value);
    if(e.target.value.length == 0 || e.target.value.length > 10 || e.target.value.length < 10) {
      setNumError("❌ Phone Number cannot be empty or less than 10");
    }else{
      setNumError("");
    }
    //Phone Number Validation
     const phoneNum ="[0-9]{10}";
     console.log(inputValues.phoneNo)
      if (!inputValues.phoneNo.match(phoneNum)) {
      errors.phoneNo = 'Please provide valid phone number';

  }
  const onPIdChange =(e) => {
    setPatientId (e.target.value);
    if(e.target.value.length == 0) {
      setPError("❌ Patient ID name can not be empty");
    }else{
      setPError("");
    }
  }

   const handleSubmit = (e) => {
    e.preventDefault();
    var isValidated = true;
      // setPost(response.data);
      //Name Validation
    if (firstName.length == 0) {
      setError("❌ Patient name can not be empty");
      isValidated = false;
    }else{
      setError("");
    }
    //Phone number validation
    var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
    if (number.length == 0 || (!pattern.test(number)) || number.length < 10 ) {
      setNumError("❌ Only accept number characters between 0-9"); 
      isValidated = false;
    } else {
      errors.phoneNo = '';
      errors.fName = ' ';
    }
    //time validation
    console.log(inputValues.time)
    if(!inputValues.time.trim()){
       errors.time = 'Please select timing';
    // Doctor select validation
    if (docId == 0){
      setDocError("❌ Please Select a doctor");
      isValidated = false; 
    }else{
      setDocError("");
    }
    else {
      errors.time = ' ';
    //Time select validation
    if (selectedTime == null){
      setTimeError("❌ Please Select a Time");
      isValidated = false;
    }else{
      setTimeError("");
    }
    //date validation
    console.log(inputValues.date)
    if(!inputValues.date.trim()){
       errors.date = 'Please select date';

    if (patient_type =="old" && patientId.length == 0 ) {
      setPError("❌ Patient ID name can not be empty");
      isValidated = false;
    }else{
      setPError("");
    }
    else {
      errors.date = ' ';

    if(isValidated == true){
    var baseURL = "https://dev.devakicare.com/admin/api_controller/create_appointment?api=1" ;
    var bodyFormData = new FormData();
    bodyFormData.append('patient_name', firstName);
    bodyFormData.append('mobileno', number);
    bodyFormData.append('doctor_id', docId);
    var formatDate =(format (new Date(), 'yyyy-MM-dd'));
    var formatTime = selectedTime.split(" - ");
    var bookTime = formatTime[0];// 10:00
    var formattedDT = formatDate +' '+ bookTime;
    console.log(formattedDT);
    bodyFormData.append('appointment_date_time', formattedDT);
    bodyFormData.append('outside_dr', outsideDr );
    bodyFormData.append('patient_id', "");
    bodyFormData.append('gender', "");
    bodyFormData.append('email', "");


    axios({
      method: "post",
      url: baseURL,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },

    })

      .then(function (responsive) {
        //handle success
        console.log(responsive);
          setFirstName('')
          setNumber('')
          setDocId("")
          setConsulHr([])
          setPatientType("new")
          setOpen(false)
          confirmAlert({
            title: 'Success',
            message: responsive.data.message + '\n' + "Please make a note of your appointment number" + " " +responsive.data.data.appointment_no,
            buttons: [
              {
                label: 'Ok' 
              },
              
            ]
          });
          // alert (responsive.data.message + '\n' + "Please make a note of your appointment number" + " " +responsive.data.data.appointment_no);
         
      }) 
      .catch(function (responsive) {
        //handle error
        console.log(responsive);
      });
    }
    setValidation(errors);
    console.log(errors);
    console.log(validation);
  };
  const close =(e) =>{
  setFirstName('')
  setNumber('')
  setDocId("")
  setConsulHr([])
  setPatientType("new")
  setOpen(false)
}

  const submitPatientDetails = (e) =>{
    e.preventDefault();

    if (patientId.length == 0 ) {
      setPError("❌ Patient ID name can not be empty");
    }else{
      setPError("");
    }
    // if(patientId == patient_unique_id){
    // console.log("OK success");
    //   }
    var baseURL = "https://dev.devakicare.com/admin/api_controller/getPatientDetails?api=1&patient_unique_id=" + patientId;
  
  axios({
      method: "get",
      url: baseURL
    })

  .then(function (responsives) {
        //handle success
        if(patientId == responsives.data.data.patient_unique_id){
        console.log("OK success");

          }
        setPatId(responsives.data.data.patient_unique_id)
        setFirstName (responsives.data.data.patient_name);
        setError("");
        setNumber (responsives.data.data.mobileno);
        setNumError("");
        setShowDetails(true);
        console.log(responsives.data.data.mobileno);
        console.log(responsives.data.data.patient_name);
         //alert (responsive.data.message + '\n' + "Please make a note of your appointment number" + " " +responsive.data.data.appointment_no);
        
      }) 
      .catch(function (responsives) {
        //handle error
        console.log(responsives);
      });
  }
  return (
    <div>



      <Button onClick={handleOpen}><span id="appointment-btn" className=" theme-btn btn-style-two btn-title hover">Appointment</span></Button>
      <Modal
        open={open}
        onClose={handleClose}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="scroll"
      >
        <Box sx={style}>
          <div className="model">
          <div className="model scroll">
                    <div className="contact-form-two">
                        <div className="title-box">
                            <h4>Make an Appointment</h4>
                        </div>
                        <form id="contact-form" method='POST' onSubmit={handleSubmit}>
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label htmlFor="username">Patient Type</label><br></br>
                                    <input name="patient_type" type="radio" id="New" value="new" checked={patient_type === 'new'} onChange={handleButton}/>
                                    <label htmlFor="New">New Patient</label>
                                    <input name="patient_type" type="radio" id="Old" value="old" onChange={handleButton} checked={patient_type === 'old'}/>
                                    <label htmlFor="Old">Existing Patient</label>
                                </div>
                                {(patient_type == 'old') ?
                                (
                                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">                                
                                <label htmlFor="username">Medical Record Number</label><br></br>
                                    <input type="text" name="username" placeholder="Your Medical Record Number"/>
                                </div>
                                ) : null
                                }
                                
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                {/*<p>{JSON.stringify(validation)}</p>*/}
                                <label htmlFor="username">Patient Name</label><br></br>
                                    <input type="text" name="fName"  id="fName" placeholder="Your Name" onChange={(e) => handleChange(e)} />
                                    <span style={{ color: 'red' }}>{validation.fName}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label htmlFor="phone">Phone Number</label><br></br>
                                    <input type="text" name="phoneNo" placeholder="Your Phone" onChange={(e) => handleChange(e)} />
                                    <span style={{ color: 'red' }}>{validation.phoneNo}</span>
                                </div>
                                {/*<div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label htmlFor="username">Email</label><br></br>
                                    <input type="email" name="email" placeholder="Your Email ID"/>
                                </div>*/}
                                 <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                 <label htmlFor="doctors">Select Doctor</label><br></br>
                                    <select name="doctors" id="doctors" defaultValue={'DEFAULT'} >
                                        <option value="DEFAULT" disabled>Doctors</option>
                                        <option value="cardiothoracic">Dr.X. Reenus Demel M.S., M.Ch. (CTVS)</option>
                                        {/*<option value="Cardiology">Doctor1</option>
                                        <option value="Neurology">Doctor2</option>
                                        <option value="Urology">Doctor3</option>
                                        <option value="Gynecological">Doctor4</option>
                                        <option value="Pediatrical">Doctor5</option>
                                        <option value="Laboratory">Doctor6</option>*/}
                                    </select>
                                    
                                </div>


  


                                {/*<div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label htmlFor="departments">Select Department</label><br></br>
                                    <select name="departments" id="departments" defaultValue={'default'}>
                                        <option value="default" disabled>Select Departments</option>
                                        <option value="cardiothoracic">Cardiothoracic</option>
                                        <option value="Cardiology">Cardiology</option>
                                        <option value="Neurology">Neurology</option>
                                        <option value="Urology">Urology</option>
                                        <option value="Gynecological">Gynecological</option>
                                        <option value="Pediatrical">Pediatrical</option>
                                        <option value="Laboratory">Laboratory</option>
                                    </select>
                                </div>*/}

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <label htmlFor="date">Select Date</label><br></br>
                                <div className="row">
                                <div className="col-lg-4">
                                <a href="#" class="previous">&#8249;</a>
                                </div>
                                <div className="col-lg-4">
                                
                                    {/*<input type="date" name="date" placeholder="Select Date" onChange={(e) => handleChange(e)} />*/}
                                    <p style={{ color: '#1370b5', fontSize: 30}}>31.07.2023 </p>
                                    <span style={{ color: '#1370b5', fontSize: 15 ,marginLeft : 30}}>(Monday)</span>
                        <form id="contact-form">

                                    <span style={{ color: 'red' }}>{validation.date}</span>
                                    </div>
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-1">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label htmlFor="username">Patient Type</label><br></br> 
                                    <a href="#" class="next">&#8250;</a>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <label htmlFor="timing">Select Time</label><br></br>
                                    {/*<select name="time"  id="timing" onChange={(e) => handleChange(e)}  defaultValue={'defaulttime'}>
                                        <option value="defaulttime"  disabled>Select Time</option>
                                        <option value="10:00AM - 12:00AM" >10:00AM - 12:00AM</option>
                                        <option value="12:00AM - 02:00AM" >12:00AM - 02:00AM</option>
                                        <option value="02:00PM - 04:00PM" >02:00PM - 04:00PM</option>
                                        <option value="04:00PM - 06:00PM" >04:00PM - 06:00PM</option>
                                        <option value="06:00PM - 08:00PM" >06:00PM - 08:00PM</option>
                                        <option value="10:00AM - 12:00AM" >10:00AM - 12:00AM</option>
                                        <option value="12:00AM - 02:00AM" >12:00AM - 02:00AM</option>
                                        <option value="02:00PM - 04:00PM" >02:00PM - 04:00PM</option>
                                        <option value="04:00PM - 06:00PM" >04:00PM - 06:00PM</option>
                                        <option value="06:00PM - 08:00PM" >06:00PM - 08:00PM</option>
                                        <option value="10:00AM - 12:00AM" >10:00AM - 12:00AM</option>
                                        <option value="12:00AM - 02:00AM" >12:00AM - 02:00AM</option>
                                    </select>*/}
                                    <div className="row">
                                    <div className="col-lg-4">
                                    <button type="button" class="btn">Monday (09:00-09:30)</button>
                                    </div>
                                    <div className="col-lg-4">
                                    <button type="button" class="btn">Monday (09:30-10:00)</button>
                                    </div>
                                    <div className="col-lg-4">
                                    <button type="button" class="btn">Monday (10:00-10:30)</button>
                                    </div>
                                    </div>

                                    <div className="row mt-2">
                                    <div className="col-lg-4">
                                    <button type="button" class="btn">Monday (06:00-06:30)</button>
                                    </div>
                                    <div className="col-lg-4">
                                    <button type="button" class="btn">Monday (06:30-07:00)</button>
                                }
                               
                                {consulHr.length >0 && 
                                  <div className="container b1">
                                  
                                  <div className="row">
                                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <label htmlFor="date">Select Date</label><br></br>
                                  </div>
                                  <div className="col-lg-2 col-md-2 col-sm-2 form-group ms-3">
                                  <button className="previous" type="button" onClick={changePreDate} disabled = {format(date, 'dd.MM.yyyy') == format(new Date(), 'dd.MM.yyyy') ? "true" : ""} >&#8249;</button>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 form-group text-center">
                                      <p style={{ color: '#1370b5', fontSize: 30}}>{format(date,'dd.MM.yyyy')}</p>
                                      <span style={{ color: '#1370b5', fontSize: 15 ,marginLeft : 30}}>{format(date, 'eeee')}</span>
                                      
                                    </div>
                                    <div className="col-lg-4">
                                    <button type="button" class="btn">Monday (07:00-07:30)</button>
                                    <div className="col-lg-2 col-md-2 col-sm-2 form-group">
                                    <button className="next" type="button" onClick={changeNextDate} disabled = {date.getDate()  == new Date().getDate() + 7  ? "true" : ""}>&#8250;</button>
                                    </div>
                                 </div> 
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <label htmlFor="timing">Select Time</label><br></br>                                    
                                    <div className="row">                                    
                                      {consulHr.map(item => {
                                        return <button type="button" className={"btn col-lg-4" + (selectedTime == item['hours'] ? ' btn-primary ' : '') }  onClick={event => onTimeChange(event, item['hours']) }>{item['hours']}</button>;
                                      })}
                                      <span className="error">{timeError}</span>
                                    </div>
                                    <span style={{ color: 'red' }}>{validation.time}</span>
                                    
                                </div>
                                  </div>
                                }
                                
                                {/*<div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <label htmlFor="message">Leave a Message</label><br></br>
                                    <textarea name="message" maxlength="10" placeholder="Message"></textarea>
                                </div>*/}
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <button className="theme-btn btn-style-three small" type="submit" id="submit-button"  name="submit-form"><span className="btn-title">Submit Now</span></button>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group mt-5">
                                    <button className="theme-btn btn-style-three small" type="submit" id="submit-button"  name="submit-form" onClick={handleSubmit}><span className="btn-title">Book Appointment</span></button>

                                </div>