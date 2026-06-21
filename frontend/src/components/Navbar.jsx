import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Namibia<span>Loans</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/personal-loan">Loans</Link>
        <Link to="/track">Track Application</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/apply-loan" className="apply-nav-btn">
          Apply Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
