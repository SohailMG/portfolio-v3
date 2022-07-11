import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div id="about" className="mx-6 h-screen items-center ">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="flex text-lg">
          <span
            style={{
              color: "#64FFDA",
              fontFamily: "Fira Code",
            }}
          >
            01.
          </span>
          <span
            style={{
              color: "#CCD6F6",
              fontFamily: "Fira Code",
            }}
            className="font-semibold section-heading"
          >
            About
          </span>
        </div>
        {/* <AnimationOnScroll animateIn="animate__fadeIn" delay={300}> */}
        <p className="text-[#8892B0] text-sm  leading-loose mt-4">
          I have recently completed my Bachelors degree in Computer Science with
          a First Class Honors. I have a strong academic background in web
          development, software engineering and machine learning . <br /> I have
          extensive knowledge of various languages such as
          Javascript,typescript,java,python and c++. My passion lies in solving
          problems which is why my dissertation and final year project was on{" "}
          <a
            className="text-[#64FFDA] link link-underline link-underline-black"
            href="https://cloud.google.com/vision"
          >
            Google Cloud's Vision AI
          </a>{" "}
          where I developed a cross-platform Application{" "}
          <a
            className="text-[#64FFDA] link link-underline link-underline-black"
            href="https://cloud.google.com/vision"
          >
            (Skanr)
          </a>{" "}
          using react-native that uses Vision AI to match places through images
          using image analysis. <br /> On my free time during my studies I have
          worked on side projects to further improve my coding skills and learn
          modern technologies such as React,Redux,Nextjs,Vue and many more.{" "}
          <br /> whilst I was in College I have done volunteer work as a{" "}
          <a
            className="text-[#64FFDA] link link-underline link-underline-black"
            href="https://cloud.google.com/vision"
          >
            web developer
          </a>{" "}
          for the{" "}
          <a
            className="text-[#64FFDA] link link-underline link-underline-black"
            href="https://cloud.google.com/vision"
          >
            National Algerian Center
          </a>{" "}
          for two weeks where I teamed up with a group of students to help
          design the front-end of the website. <br /> Here are some technologies
          I have been using recently
        </p>
        {/* </AnimationOnScroll> */}
        {/* <AnimationOnScroll animateIn="animate__fadeIn" delay={300}> */}
        <ul className="skills-list grid grid-cols-2 self-center mt-6 ">
          <li className="text-[#8892B0] text-sm font-light mt-2">
            Javascript/Typescript
          </li>
          <li className="text-[#8892B0] text-sm font-light mt-2">Vue</li>
          <li className="text-[#8892B0] text-sm font-light mt-2">
            React/React Native
          </li>
          <li className="text-[#8892B0] text-sm font-light mt-2">AWS</li>
          <li className="text-[#8892B0] text-sm font-light mt-2">NextJs</li>
          <li className="text-[#8892B0] text-sm font-light mt-2">
            Google Cloud Services
          </li>
        </ul>
      </AnimationOnScroll>
      {/* </AnimationOnScroll> */}
    </div>
  );
}

export default AboutSection;
