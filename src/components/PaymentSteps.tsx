import React, { useState, useEffect } from 'react';
import './PaymentSteps.css';
import { Check, Copy } from 'lucide-react';

interface PaymentStepsProps {
  price: number;
  phone: string;
  payerName: string;
  onConfirm: () => void;
}

export const PaymentSteps: React.FC<PaymentStepsProps> = ({ price, phone, payerName, onConfirm }) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // small entrance animation trigger
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback: do nothing
    }
  };

  return (
  <div className={`payment-steps glass-card ${mounted ? 'mounted' : ''}`}>
      <h3 className="section-title-sm">How to Purchase — Clear Steps</h3>
      <div className="steps-list">
        <div className="step first">
          <div className="step-num">1</div>
          <div className="step-body">
            <h4>Send Payment</h4>
            <p className="prominent">Send exactly <strong>{price} KSH</strong> to the account below using M-Pesa.</p>
            <div className="credentials-box">
              <div className="number-box small">
                <span className="phone-number">{phone}</span>
                <button className="btn-copy" onClick={handleCopy}><Copy size={14}/> Copy</button>
              </div>
              {copied && <div className="copy-toast">Copied!</div>}
              <div className="credentials-meta">Payee: <strong>Manager's Account</strong> • Name: <strong>{payerName}</strong></div>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-num">2</div>
          <div className="step-body">
            <h4>Send Proof</h4>
            <p>After sending, take a screenshot of the M-Pesa receipt and send it via WhatsApp using the button below.</p>
            <a className="btn-whatsapp small" href={`https://wa.me/254701648600?text=${encodeURIComponent('I have paid. Here is my screenshot.')}`} target="_blank" rel="noreferrer">💬 Send Screenshot on WhatsApp</a>
          </div>
        </div>

        <div className="step">
          <div className="step-num">3</div>
          <div className="step-body">
            <h4>Receive Access</h4>
            <p>We verify payment in our system within <strong>2-30 minutes</strong>. Once confirmed, we will send the download link and credentials via WhatsApp.</p>
            <div className="next-actions">
              <button className="btn-primary" onClick={onConfirm}><Check size={16}/> I HAVE SENT THE MONEY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
