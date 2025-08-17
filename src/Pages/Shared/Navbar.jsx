import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/logo.jpeg";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className="hover:underline hover:underline-offset-4 hover:decoration-blue-600"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:underline hover:underline-offset-4 hover:decoration-blue-600"
          to="/visaServices"
        >
          Visa Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:underline hover:underline-offset-4 hover:decoration-blue-600"
          to="/myApplication"
        >
          My Application
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="shadow-sm navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {navLinks}
            </ul>
          </div>
          <h1 className="pl-8 text-2xl font-extrabold">
            <i>
              NEXTSTEP <span className="text-blue-800">VISA</span>
            </i>
          </h1>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-4 px-1 font-medium menu-horizontal">{navLinks}</ul>
        </div>
        <div className="pr-8 navbar-end">
          <img className="w-20" src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
