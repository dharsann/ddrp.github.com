import React from "react";
import "../styles/footer.css";
import { Mail } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";;

function Footer() {
  return (
    <div className="sticky-footer">
      <div className="socialMedia">
        <Mail /> <Phone />
        <p>daeiouanantharaman@gmail.com</p>
        <p>+91 7373786664</p>
      </div>
      
      <p> &copy; 2023 ddrp.com</p>
    </div>
  );
}

export default Footer;