import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import { FaUser } from 'react-icons/fa';

export default function Navigation() {
  return (
    <div className="nav-side">
      <nav className="nav-link">
        <Link className="Nav-Header" to="/">Bookstore CMS</Link>
        <Link className="NavL" style={{ color: '#121212' }} to="/BookPage">BOOKS</Link>
        <Link className="NavL" style={{ color: 'hsla(0,0%,8%,.6)' }} to="/categories">CATEGORIES</Link>
      </nav>
      <div className="nav-container">
        <FaUser size={30} color="#0290ff" />
      </div>
    </div>
  );
}
