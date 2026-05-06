import React, { useState, useMemo } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { allApps } from '../data';
import { AppCard } from '../components/AppCard';
import { Check, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './ProductPage.css';
import { BackButton } from '../components/BackButton';
import { useStock } from '../context/StockContext';
import { PaymentSteps } from '../components/PaymentSteps';

export const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Determine initial payment visibility from navigation state or ?step= query param
  const navStep = (location.state && (location.state as any).openStep) as number | undefined;
  const qp = searchParams.get('step');
  const qpStep = qp ? parseInt(qp, 10) : NaN;
  const initialVisible = Number.isFinite(navStep) && navStep ? true : (!isNaN(qpStep) ? qpStep > 0 : false);
  const [showPayment, setShowPayment] = useState<boolean>(initialVisible);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [selectedSubModelIdx, setSelectedSubModelIdx] = useState(0);
  
  const app = useMemo(() => allApps.find(a => a.id === productId), [productId]);
  const relatedApps = useMemo(() => {
    if (!app) return [];
    return allApps.filter(a => a.category === app.category && a.id !== app.id).slice(0, 4);
  }, [app]);

  if (!app) {
    return <div className="container py-20 text-center"><h2 className="text-secondary">Product Not Found</h2></div>;
  }

  const basePrice = app.ourPrice + (app.subModels ? app.subModels[selectedSubModelIdx].priceDelta : 0);
  const currentPrice = basePrice;

  // copy handled by PaymentSteps component

  return (
    <div className="product-page">
      <div className="container mt-6">
        <BackButton />
      </div>
      {/* Product Header */}
      <div className="product-header container">
         <div className="product-hero glass-card">
           <img src={app.logoUrl} alt={app.name} className="product-hero-logo" />
           <div className="product-hero-info">
             <div className="badge-tag price-tag mb-2">PREMIUM UNLOCKED</div>
             <h1 className="product-name">{app.name}</h1>
             <div className="product-rating">
               ⭐ {app.rating} from {Math.floor(Math.random() * 5000) + 1000} users
             </div>
             <div className="verification-block mt-4">
                <ShieldCheck size={20} className="animate-pulse-icon" />
                <div className="verification-text">
                  <strong>Verified Clean</strong>
                  <div className="verification-sub">Scanned with VirusTotal & internal checks • Monthly re-validation</div>
                </div>
             </div>
             <div className="status-indicators mt-3">
               <span>✅ VirusTotal Verified</span>
               <span>✅ Pre-Activated Delivery</span>
               <span>✅ No Known Malware</span>
               <span>✅ Monthly Re-Validation</span>
             </div>
             {(() => {
               const live = useStock(app.id);
               const value = typeof live === 'number' ? live : app.stock;
               return typeof value === 'number' ? <div className="stock-info mt-3">Only <strong>{value}</strong> left in stock</div> : null;
             })()}
           </div>
         </div>
      </div>

      <div className="container product-grid">
        <div className="main-col">
       {/* Pricing Toggle & Sections */}
       <div className="pricing-section">
         <>
                 {/* SubModel Selector */}
                 {app.subModels && (
                   <div className="submodels-selector mb-8 p-6 glass-card">
                     <h3 className="section-title-sm mb-5">Select the Model Power:</h3>
                     <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                       {app.subModels.map((sub, idx) => (
                         <button 
                           key={idx}
                           onClick={() => setSelectedSubModelIdx(idx)}
                           style={{
                             padding: '16px 20px',
                             background: selectedSubModelIdx === idx ? 'var(--primary-accent)' : 'rgba(255,255,255,0.05)',
                             color: selectedSubModelIdx === idx ? '#000' : '#fff',
                             border: `1px solid ${selectedSubModelIdx === idx ? 'var(--primary-accent)' : 'var(--glass-border)'}`,
                             borderRadius: '12px',
                             fontWeight: selectedSubModelIdx === idx ? '700' : '500',
                             cursor: 'pointer',
                             transition: 'all 0.2s',
                             flex: '1 1 200px',
                             display: 'flex',
                             justifyContent: 'space-between',
                             alignItems: 'center'
                           }}
                         >
                           <span style={{ fontSize: '1.05rem' }}>{sub.name}</span>
                           <span style={{ 
                             opacity: selectedSubModelIdx === idx ? 1 : 0.7, 
                             fontSize: '0.9rem',
                             background: selectedSubModelIdx === idx ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                             padding: '4px 8px',
                             borderRadius: '6px'
                           }}>
                             +{sub.priceDelta} KSH
                           </span>
                         </button>
                       ))}
                     </div>
                   </div>
                 )}

                 <div className="pricing-cards" style={{ gridTemplateColumns: '1fr' }}>
                   <div className="pricing-card glass-card yearly-card active" onClick={() => { setShowPayment(true); }}>
                     <div className="ribbon">LIFETIME ACCESS</div>
                     <h3>One-Time Payment</h3>
                     <div className="price-display">
                        <span className="big-price">{currentPrice}</span> KSH
                     </div>
                     <span className="period">/lifetime access</span>
                     <p className="savings-text" style={{ color: '#00ff88' }}>No monthly subscriptions or hidden fees</p>
                     <ul className="plan-perks">
                       <li><Check size={16}/> Permanent lifetime access forever</li>
                       <li><Check size={16}/> Instant login credentials delivered</li>
                       <li><Check size={16}/> Developer API unlocks enabled</li>
                     </ul>
                     <button className="btn-primary w-full pulse-btn" onClick={() => { setShowPayment(true); }}>PROCEED TO CHECKOUT</button>
                   </div>
                 </div>

                 <div className="app-description glass-card mt-6">
                   <h3 className="section-title-sm">What the Official Premium Gives You:</h3>
                   <ul className="features-list">
                     {app.features.split('•').map((feat, idx) => (
                       <li key={idx}><CheckCircle2 size={18} className="text-primary"/> {feat.trim()}</li>
                     ))}
                   </ul>
                   <div className="tech-specs mt-4">
                     <p><strong>Installation Size:</strong> {app.size}</p>
                     <p><strong>Version:</strong> 2026.1 (Latest Cracked + Pre-Activated)</p>
                   </div>
                 </div>

                 {/* Single-page payment steps - moved above install guide so purchase is seen first */}
                 {showPayment && (
                   <div ref={(el) => { if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }} className="mt-6">
                     {!showConfirmation ? (
                       <PaymentSteps price={currentPrice} phone={"0701648600"} payerName={"Regina"} onConfirm={() => setShowConfirmation(true)} />
                     ) : (
                       <div className="payment-step-panel success-panel glass-card">
                         <h2 className="text-primary">🎉 What Happens Next:</h2>
                         <ul className="next-steps-list">
                           <li><strong>1.</strong> We verify your screenshot in our system (within 2-30 minutes)</li>
                           <li><strong>2.</strong> We send you the direct download link + login credentials</li>
                           <li><strong>3.</strong> You install and enjoy premium access!</li>
                         </ul>
                         <p className="support-note mt-6">Stuck? Message us on WhatsApp, we reply 24/7</p>
                       </div>
                     )}
                   </div>
                 )}

                 <div className="install-guide glass-card mt-6">
                   <h3 className="section-title-sm">📥 How to Install (3 Easy Steps):</h3>
                   <div className="step-list">
                     <div className="step">
                       <span className="step-num">1</span>
                       <p>Download the file from the link we send via WhatsApp</p>
                     </div>
                     <div className="step">
                       <span className="step-num">2</span>
                       <p>For Android: Enable 'Install from Unknown Sources'. For PC: Run as Administrator</p>
                     </div>
                     <div className="step">
                       <span className="step-num">3</span>
                       <p>Enter the provided premium credentials and enjoy!</p>
                     </div>
                   </div>
                   <div className="warning-box mt-4">
                     ⚠️ These are private logins. Sharing credentials triggers automatic ban. One user per purchase.
                   </div>
                 </div>
               </>
             {/* Single-page payment steps */}
             {showPayment && (
               <div ref={(el) => { if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>
                 {!showConfirmation ? (
                   <PaymentSteps price={currentPrice} phone={"0701648600"} payerName={"Regina"} onConfirm={() => setShowConfirmation(true)} />
                 ) : (
                   <div className="payment-step-panel success-panel glass-card">
                     <h2 className="text-primary">🎉 What Happens Next:</h2>
                     <ul className="next-steps-list">
                       <li><strong>1.</strong> We verify your screenshot in our system (within 2-30 minutes)</li>
                       <li><strong>2.</strong> We send you the direct download link + login credentials</li>
                       <li><strong>3.</strong> You install and enjoy premium access!</li>
                     </ul>
                     <p className="support-note mt-6">Stuck? Message us on WhatsApp, we reply 24/7</p>
                   </div>
                 )}
               </div>
             )}
          </div>
        </div>
      </div>

      {/* Related Apps */}
      {relatedApps.length > 0 && (
        <div className="container mt-12 mb-12">
          <h2 className="section-title">You May Also Like</h2>
          <div className="apps-grid">
            {relatedApps.map(rApp => (
              <AppCard key={rApp.id} app={rApp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
