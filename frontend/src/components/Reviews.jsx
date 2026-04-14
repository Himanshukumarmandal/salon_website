import { Star, StarHalf } from 'lucide-react';
import './Reviews.css';
const reviewsData = [
  { id: 1, name: 'Priya Sharma', text: 'Absolutely love my new haircut! The stylist really listened to what I wanted.', rating: 5 },
  { id: 2, name: 'Anjali Verma', text: 'Best bridal makeup in Krishna Nagar! The products they used were top-notch.', rating: 5 },
  { id: 3, name: 'Rohan Gupta', text: 'Got my beard styled and a relaxing facial. The ambiance is great.', rating: 4.5 }
];
function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="rating-summary">
          <div className="rating-score">4.8</div>
          <div className="rating-stars">
            <Star fill="var(--primary-color)" color="var(--primary-color)" />
            <Star fill="var(--primary-color)" color="var(--primary-color)" />
            <Star fill="var(--primary-color)" color="var(--primary-color)" />
            <Star fill="var(--primary-color)" color="var(--primary-color)" />
            <StarHalf fill="var(--primary-color)" color="var(--primary-color)" />
          </div>
          <p>Based on 200+ reviews</p>
        </div>
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-stars">
                {[...Array(Math.floor(review.rating))].map((_, i) => (<Star key={i} size={16} fill="var(--primary-color)" color="var(--primary-color)" />))}
                {review.rating % 1 !== 0 && <StarHalf size={16} fill="var(--primary-color)" color="var(--primary-color)" />}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Reviews;
