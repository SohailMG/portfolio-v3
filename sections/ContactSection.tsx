import React from "react";
import { PhoneCall, MessageCircle, Mail } from "react-feather";
function ContactSection() {
  return (
    <div
      id="contact"
      className=" flex flex-col items-center justify-center mt-10 space-y-10 mb-20"
    >
      <h1 style={{ fontFamily: "Fira Code", color: "#64FFDA" }}>
        04. Want to know more?
      </h1>
      <h1
        style={{ fontFamily: "Poppins", color: "#CCD6F6" }}
        className="text-4xl font-bold"
      >
        Get In Touch
      </h1>
      <div className="flex items-center space-x-6 mt-10">
        <span className="border-2 border-[#64FFDA] p-4 rounded-xl cursor-pointer hover:scale-105 transition transform ease-in-out duration-150 hover:border-0">
          <PhoneCall
            onClick={() => window.open("tel:+447510374652")}
            color="#64FFDA"
            size={30}
          />
        </span>
        <span className="border-2 border-[#64FFDA] p-4 rounded-xl cursor-pointer hover:scale-105 transition transform ease-in-out duration-150 hover:border-0">
          <MessageCircle
            onClick={() => window.open("sms:+447510374652")}
            color="#64FFDA"
            size={30}
          />
        </span>
        <span className="border-2 border-[#64FFDA] p-4 rounded-xl cursor-pointer hover:scale-105 transition transform ease-in-out duration-150 hover:border-0">
          <Mail
            onClick={() => window.open("mailto:gsais.sohail9@gmail.com")}
            color="#64FFDA"
            size={30}
          />
        </span>
      </div>
    </div>
  );
}

export default ContactSection;
