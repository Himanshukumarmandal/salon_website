import { useState } from 'react';
import axios from 'axios';
import { Calendar, User, Phone, CheckCircle, Clock } from 'lucide-react';
import './Admin.css';
function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { setIsAuthenticated(true); fetchBookings(); } 
    else { setError('Invalid password'); }
  };
  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      setBookings(response.data);
    } catch (err) { setError('Failed to fetch bookings from server'); } finally { setLoading(false); }
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });

  if (!isAuthenticated) return (
    <div className="admin-login-container fade-in">
      <div className="admin-login-card">
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Admin Portal</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please log in to view salon bookings.</p>
        <form onSubmit={handleLogin}>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Admin Password" className="admin-input" required />
          {error && <p className="admin-error">{error}</p>}
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Login</button>
        </form>
        <p style={{marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Demo Password: admin123</p>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard fade-in">
      <div className="container">
        <h2 className="section-title">Dashboard</h2>
        <div className="dashboard-header">
          <div className="dashboard-stat"><h3>Total Bookings</h3><p className="stat-number">{bookings.length}</p></div>
          <button className="btn btn-outline" onClick={fetchBookings}>Refresh Data</button>
        </div>
        {loading ? <p className="loading-text">Loading bookings...</p> : error ? <p className="admin-error">{error}</p> : (
          <div className="bookings-grid">
            {bookings.length === 0 ? <p>No bookings found.</p> : bookings.map((booking) => (
              <div className="booking-card" key={booking._id}>
                <div className="booking-header">
                  <h4>{booking.service}</h4>
                  <span className="status-badge"><CheckCircle size={14} style={{marginRight: '4px'}}/> Confirmed</span>
                </div>
                <div className="booking-details">
                  <div className="detail-item"><User size={16} color="var(--primary-color)" /><span>{booking.customerName}</span></div>
                  <div className="detail-item"><Phone size={16} color="var(--primary-color)" /><span>{booking.phoneNumber}</span></div>
                  <div className="detail-item"><Calendar size={16} color="var(--primary-color)" /><span>{formatDate(booking.appointmentDate)}</span></div>
                  <div className="detail-item" style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}><Clock size={14} /><span style={{ marginLeft: '4px' }}>Booked on: {new Date(booking.createdAt).toLocaleDateString()}</span></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Admin;
