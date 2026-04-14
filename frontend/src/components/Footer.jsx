function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'Playfair Display', color: '#fff', fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px' }}>
          H S <span style={{ color: 'var(--primary-color)' }}>SALON</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Style That Defines You.<br/> Premium luxury salon in Krishna Nagar, Delhi.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} H S Salon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
