import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <header className="menu">
        <div className="menu-items">
          <ul className="ul">
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>profile</p>
        </div>
      </header>
    </>
  );
}
