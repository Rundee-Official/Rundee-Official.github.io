// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ isPlaying, toggleMusic }) {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </nav>
  );
}