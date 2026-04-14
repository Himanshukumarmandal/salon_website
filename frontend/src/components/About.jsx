import './About.css';

function About() {
  return (
    <section id="about" className="about-section bg-secondary">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About H S Salon</h2>
            <p>
              Located in the heart of Krishna Nagar, Delhi, H S Salon is more than just a beauty destination; 
              it is an experience. We pride ourselves on delivering premium, customized styling and beauty 
              services to help you look and feel your absolute best.
            </p>
            <p>
              Our team of highly trained professionals brings years of expertise in hair styling, makeup, 
              skin care, and beyond, ensuring every client walks out with confidence and a touch of luxury.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat-item">
                <h3>5k+</h3>
                <span>Happy Clients</span>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <span>Expert Stylists</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/images/about_img_1776080450501.png" alt="Salon Interior" />
              <div className="gold-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
