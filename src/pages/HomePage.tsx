import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { aiModels } from '../data';
import { ShieldCheck, Zap, Lock, RefreshCcw, Download } from 'lucide-react';
import './HomePage.css';
import { BackButton } from '../components/BackButton';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "🎬 Streaming & Entertainment", count: "10+ apps", id: "Streaming & Entertainment", color: "var(--secondary-accent-glow)" },
    { name: "💬 Social & Communication", count: "10+ apps", id: "Social & Communication", color: "rgba(59, 130, 246, 0.4)" },
    { name: "🎨 Design, Video & Creative", count: "10+ apps", id: "Design, Video & Creative", color: "rgba(236, 72, 153, 0.4)" },
    { name: "⚡ Developer & AI Platforms", count: "10+ apps", id: "Developer & AI Platforms", color: "var(--primary-accent-glow)" }
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
        <div className="neon-grid-bg"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title">Unlock Every Premium Tool for Pennies</h1>
          <p className="hero-subtitle">
            Pay 70-350 KSH once. Get monthly premium logins. 100% verified crack, no viruses, no surveys.
          </p>
          <button 
            className="btn-primary hero-btn"
            onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Browse All Tools ↓
          </button>

          <div className="stats-bar glass-card">
            <div className="stat"><strong>500+</strong> Tools</div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>10,000+</strong> Happy Users</div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>24/7</strong> WhatsApp Support</div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>99.9%</strong> Uptime</div>
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
