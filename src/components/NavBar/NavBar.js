import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">theBase</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/tvseries">Tv Series</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
