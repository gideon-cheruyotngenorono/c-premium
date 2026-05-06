import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { App } from '../data';
import './AppCard.css';
import { Download, Star } from 'lucide-react';

interface AppCardProps {
  app: App;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div className="glass-card app-card">
      <div className="card-header">
        <img src={app.logoUrl} alt={app.name} className="app-logo" />
        <div className="badge-tag price-tag">{app.ourPrice} KSH</div>
      </div>
      
      <div className="card-body">
        <h3 className="app-name">{app.name}</h3>
        <div className="card-stats">
          <span className="rating"><Star size={14} fill="var(--star-color)" color="var(--star-color)" /> {app.rating}</span>
          <span className="size">{app.size}</span>
        </div>
        <p className="app-features">{app.features}</p>
        <div className="health-badge">
          {app.healthCheck}
        </div>
      </div>

      <div className="card-footer">
        <button 
          className="btn-primary w-full"
          onClick={() => navigate(`/product/${app.id}`, { state: { openStep: 1 } })}
        >
          <Download size={18} className="animate-pulse-icon" />
          DOWNLOAD NOW
        </button>
      </div>
    </div>
  );
};
