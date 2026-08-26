import {NavItem} from "./NavItem";
import "./Navbar.styles.css";
import { Link } from "react-router";;
 
 export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow sticky-top">
        <div className="container">
            <Link className="navbar-brand fw-bold" to="/">Rhaynner</Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#n"><span
                    className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="n">
                <ul className="navbar-nav ms-auto">

                    <NavItem title="Meu portifólio" to="/"/>

                    <NavItem title="FutRhaynner" to="/fut-Rhaynner"/>

                    <NavItem title="Login" to="Login"/>

                </ul>
            </div>
        </div>
    </nav>
  );
};
export default Navbar;