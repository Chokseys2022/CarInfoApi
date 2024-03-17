import React, { useState } from 'react';
import '../App.css'; // Import CSS file for ContactPage

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setFormData(initialState);
    };

    return { formData, handleChange, handleSubmit };
};

const ContactPage = () => {
    const initialAppointmentFormData = {
        name: '',
        email: '',
        phoneNumber: '',
        preferredDate: ''
    };

    const { formData: appointmentFormData, handleChange: handleAppointmentChange, handleSubmit: handleAppointmentSubmit } = useForm(initialAppointmentFormData);

    return (
        <div className="contact-page">
            <div className="contact-section appointment-section">
                <h1>Set Up Test Drive Appointment</h1>
                <form onSubmit={handleAppointmentSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={appointmentFormData.name} onChange={handleAppointmentChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={appointmentFormData.email} onChange={handleAppointmentChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" name="phoneNumber" value={appointmentFormData.phoneNumber} onChange={handleAppointmentChange} />
                    </div>
                    <div className="form-group">
                        <label>Preferred Date:</label>
                        <input type="date" name="preferredDate" value={appointmentFormData.preferredDate} onChange={handleAppointmentChange} />
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
            <div className="contact-info">
                <h1>SC Luxury Cars Contact Information</h1>
                <p>For any inquiries or assistance, please contact us at:</p>
                <p>Address: 123 Luxury Street, City, State, Zip Code</p>
                <p>Phone: +1-123-456-7890</p>
                <p>Customer Service Email: info@scluxurycars.com</p>
            </div>
        </div>
    );
};

export default ContactPage;
