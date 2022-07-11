import React from "react";
import Image from "next/image";
import Logo from "../assets/sitelogo.svg";
import { CgMenuRight } from "react-icons/cg";
import { BsChevronDoubleDown } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
function LandingSection() {
  //  toggle sidebar
  const handleToggle = () => {
    const sidebar = document.getElementsByTagName("nav")[0];
    sidebar.classList.remove("closed-menu");
    sidebar.classList.add("opened-menu");
  };

  return (
    <div className=" h-screen justify-center flex flex-col">
      {/* header */}
      <header className="h-20 flex items-center justify-between p-2 mx-2 fixed w-full top-0 z-50 bg-[#0A192E]">
        <div className=" md:p-4">
          <Image src={Logo} alt="logo" />
        </div>
        <CgMenuRight
          onClick={handleToggle}
          size={40}
          className="md:hidden mr-4 md:mr-6"
          color="#64FFDA"
        />
        <NavBar />
      </header>

      {/* hero */}
      <main className="flex flex-col px-6 lg:px-52">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-6"
        >
          <motion.h1
            variants={listItem}
            key={Math.random()}
            className=""
            style={{
              color: "#64FFDA",
              fontFamily: "Fira Code,monospace",
            }}
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            variants={listItem}
            key={Math.random()}
            style={{
              color: "#ccd6f6",
              fontFamily: "Poppins",
            }}
            className="text-5xl md:text-6xl lg:text-[100px] font-semibold "
          >
            Sohail Gsais.
          </motion.h2>
          <motion.h2
            variants={listItem}
            key={Math.random()}
            style={{
              color: "#8892B0",
              fontFamily: "Poppins",
            }}
            className="leading-tight  text-4xl md:text-[6xl] lg:text-[70px] font-semibold"
          >
            I code for fun and for profit
          </motion.h2>
          <motion.p
            variants={listItem}
            key={Math.random()}
            className="text-[#8892B0] text-sm  leading-loose mt-4 w-full md:w-96 "
          >
            I'm a Computer Science Graduate. I studied at{" "}
            <a
              className="text-[#64FFDA] link link-underline link-underline-black"
              href="https://www.mdx.ac.uk/"
            >
              Middlesex University
            </a>{" "}
            and obtained a First Class Honors. I have keen interest in web
            related technologies and my goal now is to begin my journey as a
            Junior Developer.
          </motion.p>

          <motion.button
            variants={listItem}
            key={Math.random()}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" border-2 border-[#64FFDA] rounded-md text-[#64FFDA] w-60 h-12 outline-none mt-20"
          >
            See Projects
          </motion.button>
        </motion.div>

        <BsChevronDoubleDown
          size={40}
          className="self-center lg:hidden mt-44 animate-bounce"
          color="#64FFDA"
        />
      </main>
    </div>
  );
}

export default LandingSection;
