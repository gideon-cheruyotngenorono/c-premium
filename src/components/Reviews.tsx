import React from 'react';
import './Reviews.css';

const REVIEWS = [
  { name: 'Wanjiru (Kikuyu)', rating: 5, text: 'Got my access within 2 mins, works perfectly!', avatar: 'https://i.pravatar.cc/48?img=12' },
  { name: 'Otieno (Luo)', rating: 5, text: 'Legit and fast delivery. Thank you!', avatar: 'https://i.pravatar.cc/48?img=5' },
  { name: 'Amina (Mijikenda)', rating: 4, text: 'Delivered quickly. Instructions were clear.', avatar: 'https://i.pravatar.cc/48?img=18' },
  { name: 'Kahiga (Kikuyu)', rating: 5, text: 'Working full features. Great value.', avatar: 'https://i.pravatar.cc/48?img=22' }
];

export const Reviews: React.FC = () => {
  return (
    <div className="reviews-block container">
      <h3 className="reviews-title">Customer Reviews</h3>
      <div className="reviews-list">
        {REVIEWS.map((r, idx) => (
          <div key={idx} className="review">
            <img src={r.avatar} alt={r.name} className="review-avatar" />
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
