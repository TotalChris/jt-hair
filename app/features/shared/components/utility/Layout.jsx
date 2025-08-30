import { Link, Outlet } from "react-router";
import { Navbar } from "../navigation/Navbar";

const Layout = () => {
  return (
    <div className="mt-24">
      <Navbar />
      <div id="page-root">
        <Outlet />
      </div>
      <footer className="footer footer-center p-10 bg-black text-neutral-content rounded w-full ">
        <div className="grid grid-flow-col gap-4">
          <Link className="link link-hover inner-navlink" to="/about">
            About Us
          </Link>
          <Link className="link link-hover inner-navlink" to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <p id="copyright">
            Copyright © {new Date().getUTCFullYear()} - JT Hair Care, all
            rights reserved.
          </p>
          <p>
            A Website by <Link to="https://chrisyates.dev">Chris Yates</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
