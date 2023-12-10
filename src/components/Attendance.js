import React, { useState } from 'react';

function Attendence() {
  const [formData, setFormData] = useState({
    studentId: '',
    courseId: '',
    date: '',
    attendanceStatus: '',
  });

  // Function to handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement logic to record attendance (e.g., API call, etc.)
    console.log('Form Data:', formData);
    // Reset form after submission
    setFormData({
      studentId: '',
      courseId: '',
      date: '',
      attendanceStatus: '',
    });
  };
  return (
    <div className='attendence'>

<form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
          /><br /><br />
        </div>
        <div>
          <label htmlFor="courseId">Course ID:</label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            value={formData.courseId}
            onChange={handleInputChange}
          /><br /><br />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          /><br /><br />
        </div>
        <div>
          <label htmlFor="attendanceStatus">Attendance Status:</label>
          <select
            id="attendanceStatus"
            name="attendanceStatus"
            value={formData.attendanceStatus}
            onChange={handleInputChange}
          >
            <option value="">Select Status</option> 
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div><br />
        <button type="submit" style={{"border-radius": "10px",border:"white", fontSize:"20px"}}>Record Attendance</button>
      </form>
    </div>
  )
}

export default Attendence