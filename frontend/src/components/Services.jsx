import { Scissors, Sparkles, Smile, Droplets } from 'lucide-react';
import './Services.css';
const servicesList = [
  { id: 1, title: 'Haircut & Styling', description: 'Precision cuts and bespoke styling.', price: '₹500+', icon: <Scissors size={32} /> },
  { id: 2, title: 'Rebonding & Smoothing', description: 'Transform frizzy hair into silky perfection.', price: '₹3000+', icon: <Sparkles size={32} /> },
  { id: 3, title: 'Professional Makeup', description: 'Bridal and party makeup using premium brands.', price: '₹1500+', icon: <Smile size={32} /> },
  { id: 4, title: 'Skin Care & Facials', description: 'Rejuvenating treatments tailored to your skin.', price: '₹800+', icon: <Droplets size={32} /> },
  { id: 5, title: 'Nail Art & Extensions', description: 'Luxurious manicures and nail art.', price: '₹600+', icon: <Sparkles size={32} /> },
  { id: 6, title: 'Hair Removal', description: 'Painless waxing and threading surfaces.', price: '₹200+', icon: <Sparkles size={32} /> }
];
function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <div className="services-grid">
          {servicesList.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-footer">
                <span className="service-price">From {service.price}</span>
                <span className="service-link" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} style={{cursor: 'pointer'}}>Book Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
