import React from "react";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <div className="py-10 container bg-white/30 backdrop-blur-md">
      <Logo />
      <div className="py-5">
        <p className="text-secondary-color text-sm font-[400] text-center">
          © 2023 MeetUs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
