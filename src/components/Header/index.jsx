import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import {NavLinkList} from "./MenuList.js";
import "./style.scss";
import { useState } from "react";

const Header = ({ setOpenModal }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="Header">
      <div className="container inHeader">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={"navMenu " + (isOpen && "openMenu")}>
          <ul>
            {NavLinkList.map((menuList, i) => (
              <li key={i}>
                <NavLink to={menuList.path} className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                onClick={() => setOpen(false)}
                >
                {menuList.label}
                </NavLink>
              </li>
            ))}
            <li className="connect_btn_mb" onClick={() => setOpenModal(true)}>
              <button>Connect wallet</button>
            </li>
          </ul>
        </nav>
        <div className="connect-wallet">
          <button className="connect_btn" onClick={() => setOpenModal(true)}>
            Connect wallet
          </button>
        </div>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
