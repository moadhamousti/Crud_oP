import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import photo from './images/photo.jpg';
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/deleteUser/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <main>
      <div class="container">
      <div class="sidebar">
        <h1> <span>|</span> CRUD OPERATIONS</h1>
        <div class="image-container">
          <img src={photo} alt="Admin Image"></img>
        </div>
        <p>Admin</p>
        <Link to="/" className="icon-container">
          <i class="fas fa-home"></i>
          <span>HOME</span>
        </Link>
        <Link to="/login" className="icon-container-1">
          <i class="fas fa-sign-out-alt"></i>
          <span>LOGOUT</span>
        </Link>
      </div>
      <div class="main-content">
        <div className='header'>
          <Link to="/create" className='btn'>Add +</Link>
        </div>
        <div className='table-container'>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  {/* Remove the "Image" column header */}
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Enroll Number</th>
                  <th>Date Of Admission</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    users.map((user) => {
                      return <tr>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.enrollnumber}</td>
                        <td>{format(new Date(user.dateofadmission), "yyyy-MM-dd")}</td>
                        <td>
                          <Link to={`/update/${user._id}`} className='btn'>Update</Link>
                          <button className='btn' onClick={() => handleDelete(user._id)}>Delete</button>
                        </td>
                      </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      
    </main>
  );
}
