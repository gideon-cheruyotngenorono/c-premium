import React from 'react';
import './Reviews.css';

const REVIEWS = [
  { name: 'Wanjiru', rating: 5, text: 'Got my access within 2 mins, works perfectly!' },
  { name: 'Otieno', rating: 5, text: 'Legit and fast delivery. Thank you!' },
  { name: 'Amina', rating: 4, text: 'Delivered quickly. Instructions were clear.' },
  { name: 'Kahiga', rating: 5, text: 'Working full features. Great value.' }
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
