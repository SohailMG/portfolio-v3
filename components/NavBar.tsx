import React from "react";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function NavBar() {
  function closeMenu() {
    const sidebar = document.getElementsByTagName("nav")[0];
    sidebar.classList.remove("opened-menu");
    sidebar.classList.add("closed-menu");
  }
  // function to add active color to nav itme
  const handleChange = (e: any) => {
    closeMenu();
    const links = document.querySelectorAll(".nav-item");
    links.forEach((link: any) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-[#0A192E] h-screen md:h-0 md:w-auto md:mr-10 flex flex-col md:flex-row md:translate-x-0 md:relative md:space-y-0 justify-evenly closed-menu absolute top-0 right-0 w-full lg:inline-flex items-center p-4 space-x-10"
    >
      {/* x button */}
      <span
        onClick={closeMenu}
        className="cursor-pointer absolute md:hidden top-2 left-2 text-[#64FFDA] text-3xl"
      >
        &times;
      </span>
      <motion.a
        variants={listItem}
        key="about"
        style={{
          fontFamily: "Fira Code, monospace, sans-serif",
        }}
        onClick={handleChange}
        href="#about"
        className=" nav-item  link link-underline link-underline-black"
      >
        About
      </motion.a>
      <motion.a
        variants={listItem}
        key="work"
        onClick={handleChange}
        href="#work"
        className=" nav-item link link-underline link-underline-black"
      >
        Experience
      </motion.a>
      <motion.a
        variants={listItem}
        key="edu"
        onClick={handleChange}
        href="#education"
        className=" nav-item link link-underline link-underline-black"
      >
        Education
      </motion.a>
      <motion.a
        variants={listItem}
        key="proj"
        onClick={handleChange}
        href="#projects"
        className=" nav-item link link-underline link-underline-black"
      >
        Projects
      </motion.a>
      <motion.a
        variants={listItem}
        key="contact"
        onClick={handleChange}
        href="#contact"
        className=" nav-item link link-underline link-underline-black"
      >
        Contact
      </motion.a>
    </motion.nav>
  );
}

export default NavBar;
