import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Links from "../../data/Data";
import Logo from "../../assets/logo.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  useEffect(() =>{
    const handleOutSideNav = () =>{
      setIsNavShowing(false);
    }

    document.addEventListener("mousedown", handleOutSideNav);
    
  }, []);

  const handleNav = () =>{
    setIsNavShowing((prev) =>!prev)
  }

  return (
    <nav>
      <div className="container nav__container">
        <NavLink to="/" className="logo">
          <img src={Logo} alt="logo" title="Logo" />
        </NavLink>

        <ul className={`menu ${isNavShowing && 'show'}`}>
          {Links &&
            Links?.map((item) => {
              const { id, name, path } = item;
              return (
                <li key={id}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              );
            })}

          <div>
            <div className="sign-up-btn">
              <NavLink to='/login'>
                <button className="btn">Log In</button>
              </NavLink>
            </div>

            <NavLink to='/cart' className="cart__icon-container">
              <div>
                <PiShoppingCartSimpleFill className="cart__icon" />
                <span>10</span>
              </div>
            </NavLink>
          </div>
        </ul>

        <div onClick={handleNav} className="menu__icon">
              {
                isNavShowing ? <AiOutlineClose /> : <CgMenu />
              }
            </div>


      </div>
    </nav>
  );
};

export default Navbar;
