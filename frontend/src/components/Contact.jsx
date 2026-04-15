import { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ customerName: '', phoneNumber: '', service: '', appointmentDate: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setStatus({ type: '', message: '' });
    try {
      const response = await axios.post('https://salon-website-g2bh.onrender.com/api/bookings/api/bookings', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ customerName: '', phoneNumber: '', service: '', appointmentDate: '' });
    } catch (error) { setStatus({ type: 'error', message: error.response?.data?.message || 'Error occurred while booking. Please try again.' }); } finally { setLoading(false); }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Visit H S Salon</h3>
            <p className="contact-desc">Experience luxury at our prime location in Krishna Nagar.</p>
            <div className="info-item"><MapPin className="info-icon" /><div><h4>Address</h4><p>123 Main Salon Street, Krishna Nagar, Delhi - 110051</p></div></div>
            <div className="info-item"><Phone className="info-icon" /><div><h4>Phone</h4><p>+91 98765 43210</p></div></div>
            <div className="info-item"><Clock className="info-icon" /><div><h4>Working Hours</h4><p>Monday - Sunday: 10:00 AM - 8:00 PM</p></div></div>
            <div className="map-container"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006!2d77.275!3d28.654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzE0LjQiTiA3N8KwMTYnMzAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0, borderRadius: '8px', filter: 'invert(90%) hue-rotate(180deg)' }} allowFullScreen="" loading="lazy" /></div>
          </div>
          <div className="contact-form">
            <h3>Reserve Your Spot</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group"><label>Full Name *</label><input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required /></div>
              <div className="form-group"><label>Phone Number *</label><input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required /></div>
              <div className="form-group"><label>Select Service *</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="" disabled>Select a service</option><option value="Haircut & Styling">Haircut & Styling</option><option value="Rebonding & Smoothing">Rebonding & Smoothing</option><option value="Professional Makeup">Professional Makeup</option>
                </select>
              </div>
              <div className="form-group"><label>Date & Time *</label><input type="datetime-local" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required /></div>
              {status.message && <div className={`form-message ${status.type}`}>{status.message}</div>}
              <button type="submit" className="btn btn-submit" disabled={loading}>{loading ? 'Booking...' : 'Confirm Appointment'}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
