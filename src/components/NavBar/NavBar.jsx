import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";

function NavBar() {
  const [menu_Icon, Update_Icon] = useState("bars");
  const [menu_link, update_Links] = useState("none");

  const Update = () => {
    Update_Icon((value) => {
      return value === "bars" ? "xmark" : "bars";
    });

    update_Links((value) => {
      return value === "none" ? "block" : "none";
    });
  };
  console.log(menu_link);
  console.log(menu_Icon);
  return (
    <>
      <nav className="Full-screen">
        <div className="menu">
          <img
            src="https://cdn.edenrobe.com/media/logo/stores/1/logo.jpeg"
            alt=""
          />
          <ul>
            <li>
            <Link className="link" to="/"> Home </Link>
            </li>
            <li>
              <Link className="link" to="/page"> Men </Link>
            </li>
            <li>
              <Link className="link" to="/page"> Boys </Link>
            </li>
            <li>
              <Link className="link" to="/page"> Girls </Link>
            </li>
            <li>
              <Link className="link" to="/Features"> Features </Link>
            </li>
            <li>
              <Link className="link" to="/collection"> Collection </Link>
            </li>
            <li>
              <Link className="link" to="/page"> Sale </Link>
            </li>
          </ul>
        </div>
        <div className="navLinks">
          <ul>
            <li>
            
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#909192" }}
              ></i>
                <a >Search</a> 
            </li>
            <li>
              <i
                className="fa-regular fa-user"
                style={{ color: "#909192" }}
                ></i>
                <a >Account</a> 
            </li>
            <li>
              <i
                className="fa-solid fa-bag-shopping"
                style={{ color: "#909192" }}
                ></i>
                <a >Bag</a> 
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile">
        <div className="mobile-screen">
          <div>
            <button onClick={Update}>
              <i className={`fa-solid fa-${menu_Icon}`}></i>
            </button>
          </div>
          <div className="logo">
            <img
              src="https://cdn.edenrobe.com/media/logo/stores/1/logo.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="menu_2" style={{ display: menu_link }}>
          <div>
            <button onClick={Update}>
              <i className={`fa-solid fa-${menu_Icon}`}></i>
            </button>
            <br />
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Boys</li>
              <li>Girls</li>
              <li>New Arrivals</li>
              <li>Fragrance</li>
              <li>Sale</li>
              <li>Account </li>
              <li>Bag </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
