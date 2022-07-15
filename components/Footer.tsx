import React from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";

function Footer() {
  return (
    <footer className="md:hidden flex justify-center items-center my-10">
      <div className="flex items-center space-x-6">
        <GitHub
          onClick={() => window.open("https://github.com/SohailMG")}
          size={20}
          color="#CCD6F6"
          className="cursor-pointer hover:scale-105"
        />
        <Linkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/sohail-gsais/")
          }
          size={20}
          color="#CCD6F6"
          className="cursor-pointer hover:scale-105"
        />
        <Facebook
          onClick={() => window.open("https://www.facebook.com/sohail.gsais")}
          size={20}
          color="#CCD6F6"
          className="cursor-pointer hover:scale-105"
        />
        <Instagram
          onClick={() => window.open("https://www.instagram.com/sohail_mg/")}
          size={20}
          color="#CCD6F6"
          className="cursor-pointer hover:scale-110 transition-all transform duration-150 ease-in-out"
        />
      </div>
    </footer>
  );
}

export default Footer;
