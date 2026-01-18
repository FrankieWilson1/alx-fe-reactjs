import React, { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0 ' }}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0' }}
                />
                <textarea
                    name='message'
                    placeholder='Your message'
                    value={formData.message}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0' }}
                />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    );
}
