import React, { useState } from 'react';
// import { database} from '../FirebaseConfig'; 
// import {addDoc, collection} from 'firebase/firestore'

function Student() {
  const [name, setName] = useState('');
  // const [studentId, setStudentId] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [details, setDetails] = useState({
    name:'',
    contactInfo:'',
  })
  // const value = collection(database,"demo")


  const PostData =async(e)=>{
    e.preventDefault()

    const{name,contactInfo}=details;

    const res=await fetch("https://pre-test-425d2-default-rtdb.firebaseio.com/amitfoam.json",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        contactInfo,
      })
    })
  }
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform any necessary actions with the form data here
    console.log('Submitted:', { name,  contactInfo });

    // Reset the form after submission
    setName('');
    // setStudentId('');
    setContactInfo('');
  };
  return (
    <div className='student'>
      <br /><br />
 <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br /><br />
        {/* <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <br /><br /> */}
        <label>
          Contact Information:
          
          <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </label>
        <br /><br />
        <button type="submit" style={{"border-radius": "10px",border:"white", fontSize:"25px"}} onClick={PostData}>Submit</button>
      </form>

    </div>
  )
}

export default Student