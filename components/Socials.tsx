import React from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";

function Socials() {
  return (
    <div className="hidden md:inline-flex fixed bottom-0 left-10 flex-col items-center space-y-4">
      <GitHub
        onClick={() => window.open("https://github.com/SohailMG")}
        size={24}
        color="#CCD6F6"
      />
      <Linkedin
        onClick={() => window.open("https://www.linkedin.com/in/sohail-gsais/")}
        size={24}
        color="#CCD6F6"
      />
      <Facebook
        onClick={() => window.open("https://www.facebook.com/sohail.gsais")}
        size={24}
        color="#CCD6F6"
      />
      <Instagram
        onClick={() => window.open("https://www.instagram.com/sohail_mg/")}
        size={24}
        color="#CCD6F6"
      />
      {/* vertical line */}
      <div className="w-[1px] h-full bg-gray-300">----</div>
    </div>
  );
}

export default Socials;
