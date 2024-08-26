import React, { useState } from 'react';

function ComplaintForm() {
  const [complaint, setComplaint] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the complaint data to your backend API
    console.log('Complaint submitted:', complaint);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit a Complaint</h3>
      <input
        type="text"
        name="title"
        placeholder="Complaint Title"
        value={complaint.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Complaint Description"
        value={complaint.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplaintForm;
