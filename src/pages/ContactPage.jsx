//ContactPage.jsx
import React, { useState } from "react";
import "../App.css";

//component to schedule test drive
function ContactPage() {
  //variables fir form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  //funct to handle for submission
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default, prevent reload
    //create all form objs
    const formData = { name, email, phoneNumber, preferredDate };
    console.log("Form Data:", formData);

    //reset fields on submit
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPreferredDate("");
  };

  //creating and detailing form with 2 sections - scheduling and business info
  return (
    <div className="contact-page">
      <div className="contact-section appointment-section">
        <h1>Schedule Test Drive</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Preferred Date:</label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h1>SC Luxury Cars </h1>
        <h5>Contact us at:</h5>        
        <p>Address: 101 Main Street, City, State, Zip</p>
        <p>Phone: +1-123-456-7890</p>
        <p>Customer Service: info@scluxurycars.com</p>
      </div>
    </div>
  );
}

export default ContactPage;

//----------------------------------------END CODE-------------------------------------//
