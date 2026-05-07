import React from 'react';
import './Reviews.css';

const REVIEWS = [
  { name: 'Mwangi', rating: 5, text: 'Amazing service, highly recommend!' },
  { name: 'Njeri', rating: 5, text: 'Fast and reliable, will use again.' },
  { name: 'Mutua', rating: 4, text: 'Good experience, clear instructions provided.' },
  { name: 'Chebet', rating: 5, text: 'Exceeded my expectations, great value!' }
];

export const Reviews: React.FC = () => {
  return (
    <div className="reviews-block container">
      <h3 className="reviews-title">Customer Reviews</h3>
      <div className="reviews-list">
        {REVIEWS.map((r, idx) => (
          <div key={idx} className="review">
            <div className="review-avatar initials">{r.name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase()}</div>
            <div className="review-body">
              <div className="review-meta">
                <strong>{r.name}</strong>
                <span className="review-rating">{'⭐'.repeat(r.rating)}</span>
              </div>
              <div className="review-text">{r.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
