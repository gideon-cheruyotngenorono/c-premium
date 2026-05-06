import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { apps, aiModels } from '../data';
import './SearchModal.css';

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredApps = apps.filter(app => 
    (app.name || '').toLowerCase().includes(query.toLowerCase()) || 
    (app.category || '').toLowerCase().includes(query.toLowerCase()) ||
    (app.features || '').toLowerCase().includes(query.toLowerCase())
  );

  const filteredModels = aiModels.filter(m => 
    (m.name || '').toLowerCase().includes(query.toLowerCase()) ||
    (m.bestFor || '').toLowerCase().includes(query.toLowerCase()) ||
    (m.category || '').toLowerCase().includes(query.toLowerCase()) ||
    (m.features || '').toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal glass-card" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <Search size={24} className="text-secondary" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search 500+ premium tools, AI models, or categories..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="close-btn" onClick={onClose}><X size={24} /></button>
        </div>

        {!query && (
          <div className="search-suggestions">
             <h4>Suggested Tags</h4>
             <div className="tag-list">
                {["Netflix", "Adobe", "ChatGPT", "Canva Pro", "Midjourney", "Discord Nitro"].map(tag => (
                   <button key={tag} className="tag-btn" onClick={() => setQuery(tag)}>{tag}</button>
                ))}
             </div>
          </div>
        )}

        {query && (
          <div className="search-results">
            {filteredApps.length > 0 && (
              <div className="result-group">
                <h4>Apps & Tools</h4>
                {filteredApps.slice(0, 5).map(app => (
                  <div key={app.id} className="result-item" onClick={() => handleNavigate(`/product/${app.id}`)}>
                    <img src={app.logoUrl} alt={app.name} />
                    <div className="result-info">
                       <h5>{app.name}</h5>
                       <span>{app.category} • {app.ourPrice} KSH</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {filteredModels.length > 0 && (
              <div className="result-group mt-4">
                <h4>AI Models</h4>
                {filteredModels.slice(0, 3).map(model => (
                  <div key={model.id} className="result-item" onClick={() => handleNavigate(`/product/${model.id}`)}>
                    <img src={model.logoUrl} alt={model.name} />
                    <div className="result-info">
                       <h5>{model.name}</h5>
                       <span className="truncate">{model.bestFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredApps.length === 0 && filteredModels.length === 0 && (
              <div className="no-results">
                <p>No results found for "{query}". Try checking categories.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
