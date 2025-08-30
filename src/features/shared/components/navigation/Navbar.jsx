import { useState } from "react";
import Logo from "/assets/logo.webp";
import { hours } from "../../data/hours";
import { Link } from "react-router";
import { isMobile } from "../../util/isMobile";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const store = hours[new Date().getDay()];

  const activeLinkClasses = "bg-white text-black hover:bg-neutral-200";
  const inactiveLinkClasses = "bg-black text-white hover:bg-neutral-800";

  const activeHome =
    window.location.pathname === "/" ? activeLinkClasses : inactiveLinkClasses;
  const activeContact =
    window.location.pathname === "/contact"
      ? activeLinkClasses
      : inactiveLinkClasses;
  const activeServices =
    window.location.pathname === "/services"
      ? activeLinkClasses
      : inactiveLinkClasses;
  const activeTeam =
    window.location.pathname === "/our-team"
      ? activeLinkClasses
      : inactiveLinkClasses;
  const activeAbout =
    window.location.pathname === "/about"
      ? activeLinkClasses
      : inactiveLinkClasses;

  return (
    <div
      id="navbarRoot"
      className={`fixed right-0 left-0 top-0 z-20 ${
        navOpen ? "bottom-0 navbar-root-mist-open" : "navbar-root-mist-closed"
      }`}
      onClick={(e) => {
        if (e.target.id === "navbarRoot") {
          setNavOpen(false);
        }
      }}
    >
      <div
        id="navbarWrapper"
        className={`min-w-screen lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto mx-4 mt-4 bg-black drop-shadow-2xl rounded-t-box h-20 md:!h-20 transition-all ${
          navOpen ? "h-96" : ""
        }`}
      >
        <div className="flex flex-row justify-between items-center w-full gap-4 px-2 h-20">
          <button
            id="drawerButton"
            className={`btn btn-ghost text-2xl font-bold md:hidden h-14 ${
              navOpen
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-black text-white hover:bg-neutral-800"
            }`}
            aria-label="navigate"
            onClick={() => setNavOpen((prevState) => !prevState)}
          >
            <i className="bi bi-list"></i>
          </button>
          <Link to="/" className="flex flex-row h-full items-center">
            <img
              src={Logo}
              alt="logo"
              className="h-12 md:ml-2 w-auto rounded-lg"
            />
          </Link>
          <Link
            to={isMobile() ? "tel:8105225028" : "/contact"}
            onClick={() => setNavOpen(false)}
            id="buttonRoot"
            aria-label="call"
            className="btn btn-ghost text-white text-2xl font-bold md:hidden h-14 hover:bg-neutral-800"
          >
            <i className="bi bi-telephone"></i>
          </Link>
          <div className="hidden md:flex ml-0 gap-2 w-full md:w-auto h-auto !text-2xl md:ml-auto md:my-auto px-2">
            <Link
              to="/"
              data-name="/"
              className={`navlink btn btn-ghost ${activeHome} font-bold font-inter normal-case`}
            >
              Home
            </Link>
            <Link
              to="./services"
              data-name="/services"
              className={`navlink btn btn-ghost ${activeServices} font-bold font-inter normal-case`}
            >
              Services & Pricing
            </Link>
            <Link
              to="./our-team"
              data-name="/our-team"
              className={`navlink btn btn-ghost ${activeTeam} font-bold font-inter normal-case`}
            >
              Our Team
            </Link>
            <Link
              to="./about"
              data-name="/about"
              className={`navlink btn btn-ghost ${activeAbout} font-bold font-inter normal-case`}
            >
              About
            </Link>
            <Link
              to="./contact"
              data-name="/contact"
              className={`navlink btn btn-ghost ${activeContact} font-bold font-inter normal-case`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div
          id="drawerContents"
          className={`flex flex-col gap-2 h-72 m-2 md:!hidden ${
            navOpen ? "visible" : "hidden"
          }`}
        >
          <Link
            to="/"
            onClick={() => setNavOpen(false)}
            data-name="/"
            className={`navlink btn bg-transparent border-0 font-bold font-inter normal-case ${activeHome}`}
          >
            Home
          </Link>
          <Link
            to="./services"
            onClick={() => setNavOpen(false)}
            data-name="/services"
            className={`navlink btn bg-transparent border-0 font-bold font-inter normal-case ${activeServices}`}
          >
            Services & Pricing
          </Link>
          <Link
            to="./our-team"
            onClick={() => setNavOpen(false)}
            data-name="/our-team"
            className={`navlink btn bg-transparent border-0 font-bold font-inter normal-case ${activeTeam}`}
          >
            Our Team
          </Link>
          <Link
            to="./about"
            onClick={() => setNavOpen(false)}
            data-name="/about"
            className={`navlink btn bg-transparent border-0 font-bold font-inter normal-case ${activeAbout}`}
          >
            About
          </Link>
          <Link
            to="./contact"
            onClick={() => setNavOpen(false)}
            data-name="/contact"
            className={`navlink btn bg-transparent border-0 font-bold font-inter normal-case ${activeContact}`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        id="ticker"
        className="min-w-screen lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto mx-4 bg-jt-grad text-black drop-shadow-2xl rounded-b-box h-8 flex flex-row items-center justify-center gap-2"
      >
        <div style={{ fontWeight: 800 }}>
          {store.isOpen ? "Open Today" : "Closed"}
        </div>
        <div>
          {store.isOpen
            ? store.start +
              " - " +
              store.end +
              (store.restricted ? " (By Appointment)" : "")
            : "Open Tuesday 9 AM - 7 PM"}
        </div>
      </div>
    </div>
  );
};
