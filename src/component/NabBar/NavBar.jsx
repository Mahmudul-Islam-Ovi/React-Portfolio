import { Link, NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          PROJECTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/certificate"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          CERTIFICATE
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          CONTACT
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-neutral rounded-b-3xl h-24 text-amber-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Mahmudul Islam</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-1xl font-bold px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end mr-10">
          {/* <input type="checkbox" className="toggle toggle-info" checked /> */}
          <Link
            className=""
            to="https://mahmudul-islam-portfolio.sanity.studio/desk"
            target="_blank"
          >
            <IoIosSettings />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
