import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

export const BackButton: React.FC<{ fallback?: string }> = ({ fallback = '/' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // prefer history.back if possible, else navigate to fallback
    try {
      if (window.history.length > 1) {
        navigate(-1);
        return;
      }
    } catch (e) {
      // ignore and fallback
    }
    navigate(fallback);
  };

  return (
    <button className="back-btn" onClick={handleBack} aria-label="Go back">
      ← Back
    </button>
  );
};
