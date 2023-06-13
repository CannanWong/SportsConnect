
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-orange sticky-top fixed-top nav-fill w-100">
      <Link to="/" class="navbar-brand mx-4 text-white">SportConnect</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class ="nav-item">
            <Link to="/" class="nav-link text-white">Home</Link>
          </li>
          <li class ="nav-item">
            <Link class="nav-link text-white">My Events</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white">Previous Events</Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav mx-4">
          <li className="nav-item">
            <Link to="newEvent" className="nav-link">
              <button class="btn btn-light btn-outline-dark my-2 my-sm-0" type="submit">Add events</button>
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;