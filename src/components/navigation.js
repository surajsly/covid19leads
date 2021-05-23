import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./navigation.css";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            L E A D S
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon className="fa-times" />
            ) : (
              <MenuIcon className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/addLeads"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add Leads
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/findLeads"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Find Leads
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resourses"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resourses
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
