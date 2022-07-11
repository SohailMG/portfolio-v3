import React from "react";
import { motion } from "framer-motion";

const svgVar = {
  visible: {
    transition: { delay: 4, duration: 2, ease: "easeOut" },
  },
};
const pathVar = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

function LoadingScreen() {
  // add class to div with id "logoIcon" after 500ms
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     document.getElementById("logoIcon")?.classList.add("move-anim");
  //   }, 500);
  // }, []);

  // wait for animation to finish
  React.useEffect(() => {
    const logoIcon = document.getElementById("logoIcon");
    if (logoIcon) {
      logoIcon.addEventListener("animationend", () => {
        console.log("ENDED");
      });
    }
  });

  return (
    <div className="logo-container">
      <div className="square square-one face-top"></div>
      <div className="square square-two face-top"></div>
      <div className="square square-three face-top"></div>
      <div className="square square-four side"></div>
      <div id="logoIcon" className="square square-five side-2"></div>
    </div>
  );
}

export default LoadingScreen;
