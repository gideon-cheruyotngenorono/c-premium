import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Search } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <Zap size={32} />
          <span className="logo-text">C-PREMIUM APPS</span>
        </Link>

        <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/category/All">All</Link>
          <Link to="/category/Streaming">Streaming</Link>
          <Link to="/category/Social">Social</Link>
          <Link to="/category/Creative">Creative</Link>
          <Link to="/category/Developer">Developer</Link>
          <a href="#faq">FAQ</a>
        </nav>

        <button className="search-btn" onClick={onOpenSearch}>
          <Search size={20} />
          <span>Search</span>
        </button>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};
