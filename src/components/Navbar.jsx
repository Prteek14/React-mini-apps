import css from "./Navbar.module.css";
import Mylogo from "./Mylogo";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-primary border-bottom border-3 border-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side: logo */}
        <div className={css.logoContainer}>
          <Mylogo />
        </div>

        {/* Right side: home button */}
        <Link
          to="/"
          className={`btn btn-dark d-flex align-items-center gap-2 ${css.homeBtn}`}
          style={{ fontWeight: "600" }}
        >
          <IoHomeSharp />
          HOME
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
