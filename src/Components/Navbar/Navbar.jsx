import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropDownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="nav-logo">
          <p>SHOP.COM</p>
        </div>
      </Link>
      <ArrowDropDownCircleOutlinedIcon
        className="nav-drop-down"
        onClick={dropDownToggle}
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to={"/"}>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to={"/men"}>Men</Link> {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to={"/women"}>Women</Link> {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to={"/kids"}>Kids</Link> {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to={"/cart"}>
          <ShoppingCartOutlinedIcon />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
