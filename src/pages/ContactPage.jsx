// ContactPage.jsx
import React, { useState } from 'react';

const ContactPage = () => {
    const [appointmentFormData, setAppointmentFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        preferredDate: ''
    });

    const [infoFormData, setInfoFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleAppointmentChange = (e) => {
        const { name, value } = e.target;
        setAppointmentFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setInfoFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        // Handle appointment form submission
        console.log("Appointment Form Data:", appointmentFormData);
        // Reset form fields
        setAppointmentFormData({
            name: '',
            email: '',
            phoneNumber: '',
            preferredDate: ''
        });
    };

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        // Handle info form submission
        console.log("Info Form Data:", infoFormData);
        // Reset form fields
        setInfoFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <p>Please feel free to contact us for any inquiries or assistance.</p>
            <div>
                <h2>Make an Appointment for Test Drive</h2>
                <form onSubmit={handleAppointmentSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={appointmentFormData.name} onChange={handleAppointmentChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={appointmentFormData.email} onChange={handleAppointmentChange} />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="text" name="phoneNumber" value={appointmentFormData.phoneNumber} onChange={handleAppointmentChange} />
                    </div>
                    <div>
                        <label>Preferred Date:</label>
                        <input type="date" name="preferredDate" value={appointmentFormData.preferredDate} onChange={handleAppointmentChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h2>Receive Information from Business</h2>
                <form onSubmit={handleInfoSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={infoFormData.name} onChange={handleInfoChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={infoFormData.email} onChange={handleInfoChange} />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" value={infoFormData.message} onChange={handleInfoChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
