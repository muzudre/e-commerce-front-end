import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          Shop {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          Men {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          Women {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <ShoppingCartOutlinedIcon />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
