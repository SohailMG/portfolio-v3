import React from "react";
import EducationTabs from "../components/EducationTabs";
import WorkTabs from "../components/WorkTabs";
import { AnimationOnScroll } from "react-animation-on-scroll";

function WorkSection() {
  //  switch between tabs
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div id="work" className="mx-6 mb-20 ">
      <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
        <div className="flex text-lg">
          <span
            style={{
              color: "#64FFDA",
              fontFamily: "Fira Code",
            }}
          >
            02.
          </span>
          <span
            style={{
              color: "#CCD6F6",
              fontFamily: "Fira Code",
            }}
            className="font-semibold section-heading"
          >
            Where I{" "}
            <span
              onClick={(e) => setCurrentTab(0)}
              className={`${
                currentTab === 0 ? "text-[#64FFDA]" : "text-gray-500"
              } text-[18px] link link-underline link-underline-black cursor-pointer`}
            >
              worked
            </span>{" "}
            /{" "}
            <span
              onClick={(e) => setCurrentTab(1)}
              className={`${
                currentTab === 1 ? "text-[#64FFDA]" : "text-gray-500"
              } text-[18px] link link-underline link-underline-black cursor-pointer`}
            >
              studied
            </span>
          </span>
        </div>
        {currentTab == 0 ? <WorkTabs /> : <EducationTabs />}
      </AnimationOnScroll>
    </div>
  );
}

export default WorkSection;
