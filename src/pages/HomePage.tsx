import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { aiModels, allApps } from '../data';
import { ShieldCheck, Zap, Lock, RefreshCcw, Download } from 'lucide-react';
import './HomePage.css';
import { BackButton } from '../components/BackButton';
import { AppCard } from '../components/AppCard';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "All Tools", count: `${allApps.length} tools`, id: "All", color: "rgba(255,255,255,0.04)" },
    { name: "AI & Machine Learning", count: "15+ apps", id: "AI & Machine Learning", color: "rgba(59, 130, 246, 0.4)" },
    { name: "Design & Creativity", count: "12+ apps", id: "Design & Creativity", color: "rgba(236, 72, 153, 0.4)" },
    { name: "Streaming & Entertainment", count: "10+ apps", id: "Streaming & Entertainment", color: "var(--secondary-accent-glow)" },
    { name: "Social & Communication", count: "8+ apps", id: "Social & Communication", color: "var(--primary-accent-glow)" }
  ];

  // Simple FAQ accordion (local component)
  const FAQ: React.FC = () => {
    const items = [
      { q: 'How do I get the premium credentials?', a: 'Make a one-time payment and send the screenshot on WhatsApp. We then deliver login credentials via WhatsApp.' },
      { q: 'Are these files virus-free?', a: 'All products displayed have a health badge and are marked as "Verified Clean" in the catalog. Always scan if unsure.' },
      { q: 'What if my product is not working?', a: 'Contact support on WhatsApp for installation help and troubleshooting.' },
    ];
    const [open, setOpen] = useState<number | null>(0);
    return (
      <div className="faq-list glass-card p-6">
        {items.map((it, idx) => (
          <div key={idx} className="faq-item">
            <button className="faq-q" onClick={() => setOpen(open === idx ? null : idx)}>
              {it.q}
            </button>
            {open === idx && <div className="faq-a">{it.a}</div>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="homepage">
      <div className="container mt-4">
        <BackButton />
      </div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content text-center">
          <h1 className="hero-title">C-PREMIUM APPS</h1>
          <p className="hero-subtitle">
            Affordable, reliable, and virus-free. Explore our curated collection of premium apps.
          </p>
          <button 
            className="btn-primary hero-btn"
            onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Categories ↓
          </button>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="featured-apps">
        <div className="container">
          <h2 className="section-title">Featured Apps</h2>
          <div className="apps-grid">
            {allApps.slice(0, 6).map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="trust-strip">
        <div className="container strip-inner">
           <span><ShieldCheck size={18}/> All Apps VirusTotal Verified</span>
           <span><Zap size={18}/> Instant WhatsApp Delivery</span>
           <span><Lock size={18}/> Encrypted Payments</span>
           <span><RefreshCcw size={18}/> Monthly Fresh Logins</span>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section container">
        <h2 className="section-title">Explore Categories</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <div 
              key={cat.id} 
              className="category-card glass-card"
              style={{ '--cat-glow': cat.color } as React.CSSProperties}
              onClick={() => navigate(`/category/${cat.id}`)}
            >
              <h3>{cat.name}</h3>
              <p>{cat.count}</p>
              <div className="cat-action">
                View Category
              </div>
            </div>
          ))}
        </div>

        {/* AI Models Section */}
        <h2 className="section-title mt-8">Latest Premium AI Models</h2>
        <div className="ai-grid">
          {aiModels.map(model => (
            <div key={model.id} className="glass-card app-card">
               <div className="card-header">
                 <img src={model.logoUrl} alt={model.name} className="app-logo" />
                 <div className="rating">★ {model.rating}</div>
               </div>
               
               <div className="card-body">
                 <h3 className="app-name">{model.name}</h3>
                 <p className="app-features font-mono text-primary">{model.model}</p>
                 <p className="app-features">{model.bestFor}</p>
                 <div className="health-badge mt-2">{model.healthCheck}</div>
               </div>

               <div className="card-footer">
                 <button className="btn-primary w-full" onClick={() => navigate(`/product/${model.id}`, { state: { openStep: 1 } })}>
                   <Download size={18} className="animate-pulse-icon" />
                   VIEW PLANS
                 </button>
               </div>
            </div>
          ))}
        </div>

        {/* FAQ Section (anchor: #faq) */}
        <section id="faq" className="faq-section container mt-10">
          <h2 className="section-title">FAQ</h2>
          <FAQ />
        </section>
      </section>

    </div>
  );
};
