import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src={logo} width={40} height={20} alt='logo'/>
        <p className="text-white">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
