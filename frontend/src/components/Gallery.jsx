import './Gallery.css';

const galleryImages = [
  '/images/gallery_2_1776080352129.png',
  '/images/gallery_3_1776080369115.png',
  '/images/gallery_4_1776080386020.png',
  '/images/gallery_5_1776080404329.png',
  '/images/gallery_6_1776080421898.png',
  '/images/gallery_2_1776080352129.png'
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section bg-secondary">
      <div className="container">
        <h2 className="section-title">Our Masterpieces</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Salon Work ${index + 1}`} />
              <div className="gallery-overlay">
                <span>View Full</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
