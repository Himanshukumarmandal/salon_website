import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content fade-in">
        <p className="hero-subtitle">Luxurious Experience</p>
        <h1 className="hero-title">Style That Defines You</h1>
        <p className="hero-description">Step into a world of elegance, sophistication, and personalized beauty treatments tailored just for you at Krishna Nagar's premier destination.</p>
        <div className="hero-btns">
          <button className="btn hero-btn" onClick={scrollToContact}>Book Now</button>
          <button className="btn btn-outline hero-btn" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Explore Services</button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
