'use client'; 

import { useState } from 'react';
import axios from 'axios';
import SignupFormDemo from '@/components/signup-form-demo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setResponseMsg('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (err) {
      console.error(err);
      setResponseMsg('Failed to send message. Try again.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg bg-white mx-auto my-10 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="border p-2 rounded"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          className="border p-2 rounded"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {responseMsg && (
        <p className="mt-4 text-center text-sm text-green-600">{responseMsg}</p>
      )}

      <SignupFormDemo/>
    </div>
  );
};

export default Contact;
