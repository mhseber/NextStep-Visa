import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/logo.jpeg";
import { FaClipboardList, FaHome, FaPassport } from "react-icons/fa";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className="hover:underline hover:underline-offset-4 hover:decoration-blue-600"
          to="/"
        >
          <FaHome className="inline mb-1 mr-1" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:underline hover:underline-offset-4 hover:decoration-blue-600"
          to="/visaServices"
        >
          <FaPassport className="inline mr-1" />
          Visa Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:underline hover:underline-offset-4 hover:decoration-blue-600"
          to="/myApplication"
        >
          <FaClipboardList className="inline mb-1 mr-1" />
          My Application
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between shadow-sm navbar bg-base-100 sm:px-6 lg:px-20">
        {/* Navbar Start: Logo + Mobile Dropdown */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo / Brand */}
          <h1 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">
            NEXTSTEP <span className="text-blue-500">VISA</span>
          </h1>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6 px-1 pt-3 text-lg font-light lg:text-xl menu-horizontal">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End: Logo Image */}
        <div className="flex items-center">
          <img className="w-10 sm:w-16 lg:w-20" src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
