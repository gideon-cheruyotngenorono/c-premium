import React from 'react';
import { BackButton } from '../components/BackButton';

export const TermsPage: React.FC = () => {
  return (
    <div className="container py-12">
      <BackButton />
      <h1>Terms of Service</h1>
      <p>These Terms of Service describe the rules and regulations for using Max Premium Suite.</p>
      <p>All support and questions should be sent via WhatsApp to our support line.</p>
    </div>
  );
};
