
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mx-4">
      <Link to="/" class="navbar-brand">SportConnect</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class ="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li class ="nav-item">
            <Link class="nav-link">My Events</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link">Previous Events</Link>
          </li>
          <Link to="newEvent"><button class="btn btn-outline-success my-2 my-sm-0 button-inline" type="submit">Add events</button></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;