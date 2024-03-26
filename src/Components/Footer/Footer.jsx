import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>SHOP.COM</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <InstagramIcon className="icon" />
        </div>
        <div className="footer-icons-container">
          <FacebookIcon className="icon" />
        </div>
        <div className="footer-icons-container">
          <WhatsAppIcon className="icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
