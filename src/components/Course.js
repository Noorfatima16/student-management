import React,{useState} from 'react'

function Course() {
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    description: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='course'>
 <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          /><br /><br />
        </div>
        <div>
          <label htmlFor="courseCode">Course Code:</label>
          <input
            type="text"
            id="courseCode"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleInputChange}
            required
          /><br /><br />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <br /><br />
        </div>
        <div>
          <button type="submit" style={{"border-radius": "10px",border:"white", fontSize:"25px"}}>Submit</button>
        </div>
      </form>


    </div>
  )
}

export default Course