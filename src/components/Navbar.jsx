// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css'; // 스타일 분리 (없으면 나중에 만들면 됨)

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
