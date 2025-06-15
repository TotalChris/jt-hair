import { Outlet } from "react-router";
import { Navbar } from "../navigation/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>
        <p>JT Hair Care of Brighton</p>
        <p>123 Main St, Brighton, MI 48116</p>
      </footer>
    </div>
  );
};

export default Layout;
