import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <h1>Services</h1>
      <Link to="/services/serv">GO</Link>
      <Outlet />
    </div>
  );
};

export default Services;
