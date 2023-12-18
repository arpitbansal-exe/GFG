import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
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
      let res = await fetch("/user/current-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
        },
      });
      res = await res.json();
      if (res.title === "Unauthorized") {
        localStorage.clear();
        window.location.href = "/";
        return;
      }
      if (res) {
        setfname(res.fname);
        setlname(res.lname);
        setemail(res.email);
        setrole(res.role);
        setenroll(res.enrollmentNo);
        setyear(res.year);
      }
    }
  }

  return (
    <div className='min-h-[85vh]'>
    <Navbar />
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
