import { Link, useLocation } from "react-router";

export const MenuLink = ({ to, label, onClick }) => {
  const location = useLocation();
  const activeLinkClasses = "bg-white text-black hover:bg-neutral-200";
  const inactiveLinkClasses = "bg-black text-white hover:bg-neutral-800";

  return (
    <Link
      className={`navlink btn btn-ghost ${location.pathname === to ? activeLinkClasses : inactiveLinkClasses} font-bold font-inter normal-case`}
      to={to}
      onClick={onClick}
      viewTransition={!(location.pathname === to)}
    >
      {label}
    </Link>
  );
};
