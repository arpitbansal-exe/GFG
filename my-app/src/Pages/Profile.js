import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Profile() {
  const [fname,setfname] = useState("");
  const [lname,setlname] = useState("");
  const [email,setemail] = useState("");
  const [role,setrole] = useState("");
  const [enroll,setenroll] = useState("");
  const [year,setyear] = useState("");
  useEffect(() => {
    CurrentUser();
  }, []);

  async function CurrentUser() {
    if (localStorage.getItem('token-info')) {
      await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/user/current-user`, {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
        },
      }).then((res) => {
        if (res.data.title === "Unauthorized") {
          localStorage.clear();
          window.location.href = "/";
          return;
        }
        if (res.data) {
          setfname(res.data.fname);
          setlname(res.data.lname);
          setemail(res.data.email);
          setrole(res.data.role);
          setenroll(res.data.enrollmentNo);
          setyear(res.data.year);
        }
      }).catch((err) => {
        console.log(err);
      });
      
    }
  }

  return (
    <div className='min-h-[85vh]'>
    <div className='grid grid-flow-row mx-10'>
    <div>Fname: {fname}</div>
    <div>Lname: {lname}</div>
    <div>Email: {email}</div>
    <div>Role: {role}</div>
    <div>Enrollnment no: {enroll}</div>
    <div>Year: {year}</div>
    </div>
    </div>

  )
}
