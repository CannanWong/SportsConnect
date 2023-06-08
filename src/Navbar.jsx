
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid text-left">
      <Link to="/" style={{ color: 'Black', textDecoration: 'none' }}> <h2 text-align="left">SportConnect</h2></Link>
      <nav className = "navbar">
        <div className = "nav-elems">
          <ul>
            <li><NavLink to="/">Map View</NavLink></li>
            <li>List view</li>
            <li>Add events</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;