import React from 'react';
import { BackButton } from '../components/BackButton';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="container py-12">
      <BackButton />
      <h1>Privacy Policy</h1>
      <p>We respect your privacy. All inquiries should be made via WhatsApp to our support line.</p>
    </div>
  );
};
