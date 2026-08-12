import React, { useState } from 'react'
import './Contact.css'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        
        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitStatus('');
        
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        setSubmitStatus('loading');
        
        const formDataToSend = new FormData(event.target);
        formDataToSend.append("access_key", "0c0b8bd5-9d59-4da5-8778-fb0e7a79bab3");
    
        const object = Object.fromEntries(formDataToSend);
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
        
            if (res.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus(''), 5000); // Clear message after 5 seconds
            } else {
                setSubmitStatus('error');
                console.error("Form submission error:", res);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error("Form submission error:", error);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact_title">
                <h1>Get In Touch</h1>
            </div>
            
            <div className="contact_container">
                <div className="contact_left">
                    <div className="contact_info">
                        <div className="contact_info_item">
                            <div className="icon_container">
                                <img src={mail_icon} alt="Email icon" />
                            </div>
                            <div className="info_content">
                                <h3>Email</h3>
                                <p>vishnujith601@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact_info_item">
                            <div className="icon_container">
                                <img src={call_icon} alt="Phone icon" />
                            </div>
                            <div className="info_content">
                                <h3>Phone</h3>
                                <p>+91 8590961338</p>
                            </div>
                        </div>
                        
                        <div className="contact_info_item">
                            <div className="icon_container">
                                <img src={location_icon} alt="Location icon" />
                            </div>
                            <div className="info_content">
                                <h3>Location</h3>
                                <p>Kerala, India</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact_right">
                    <form onSubmit={onSubmit} className="contact_form">
                        <h3>Send a message</h3>
                        
                        {submitStatus === 'success' && (
                            <div className="form_success">Message sent successfully!</div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="form_error">Failed to send message. Please try again.</div>
                        )}
                        
                        <div className="form_row">
                            <div className="input_group">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Enter your name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'input_error' : ''}
                                />
                                {errors.name && <div className="error_message">{errors.name}</div>}
                            </div>
                   
                            <div className="input_group">
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter your email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'input_error' : ''}
                                />
                                {errors.email && <div className="error_message">{errors.email}</div>}
                            </div>
                        </div>
                        
                        <div className="input_group full_width">
                            <label htmlFor="message">Write your message here</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="6" 
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'input_error' : ''}
                            ></textarea>
                            {errors.message && <div className="error_message">{errors.message}</div>}
                        </div>
                        
                        <div className="button_container">
                            <button 
                                type="submit" 
                                className="gradient_button"
                                disabled={submitStatus === 'loading'}
                            >
                                <span className="button_text">
                                    {submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact