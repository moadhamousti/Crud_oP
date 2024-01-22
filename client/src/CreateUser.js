import React, { useState } from 'react' 
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'


export default function CreateUser() {
    const[firstname, setFirstname] =useState()
    const[lastname, setLastname] =useState()
    const[email, setEmail] =useState()
    const[phone, setPhone] =useState()
    const[enrollnumber, setEnrollnumber] =useState()
    const[dateofadmission, setDateofadmission] =useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/createUser", {firstname, lastname, email, phone, enrollnumber, dateofadmission})
          .then(result => {
            console.log(result)
            navigate('/')
          })
          .catch(err => console.log(err))
          
      };


  return (
    <div className='create-user'>
        <div className='add-user-form'>
            <form onSubmit={Submit}>
                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name'
                    onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name' 
                    onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='Enter Email' 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Phone</label>
                    <input type='text' className='form-control' placeholder='Enter Phone Number' 
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Enroll Number</label>
                    <input type='text' pattern=".{10,}" className='form-control' placeholder='Enter Enroll Number' 
                    onChange={(e) => setEnrollnumber(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Date of Admission</label>
                    <input type='date' className='form-control' placeholder='Enter Date Of Admission' 
                    onChange={(e) => setDateofadmission(e.target.value)}/>
                </div>
                <button type='submit' className='button btn-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}
