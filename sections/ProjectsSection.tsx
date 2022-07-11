import React from "react";
import FeaturedCard from "../components/FeaturedCard";
import LargeCard from "../components/LargeCard";
import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../Projects.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
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

function ProjectsSection() {
  const [target, setTarget] = React.useState(2);

  // store current window width
  const [windowWidth, setWindowWidth] = React.useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    setTarget(window.innerWidth < 768 ? 2 : 6);
    // update window width on resize
    // add event listener
    window.addEventListener("resize", handleResize);
    // return function to be called when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = () => {
    setTarget(
      target + 2 < projectsList.length ? target + 2 : projectsList.length
    );
  };

  return (
    <div id="projects" className="mx-6 mb-20 flex flex-col">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="flex text-lg">
          <span
            style={{
              color: "#64FFDA",
              fontFamily: "Fira Code",
            }}
          >
            03.
          </span>
          <span
            style={{
              color: "#CCD6F6",
              fontFamily: "Fira Code",
            }}
            className="font-semibold section-heading mb-10"
          >
            Featured Projects
          </span>
        </div>
      </AnimationOnScroll>
      {windowWidth < 700 ? (
        <div className="flex flex-col space-y-44">
          {projectsList
            .filter((p) => p.featured)
            .map((project: any, i) => (
              <FeaturedCard project={project} index={i} />
            ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-44">
          {projectsList
            .filter((p) => p.featured)
            .map((project: any, i) => (
              <LargeCard project={project} index={i} />
            ))}
        </div>
      )}

      <div className="flex text-lg mt-44">
        <span
          style={{
            color: "#64FFDA",
            fontFamily: "Fira Code",
          }}
        >
          04.
        </span>
        <span
          style={{
            color: "#CCD6F6",
            fontFamily: "Fira Code",
          }}
          className="font-semibold section-heading mb-10"
        >
          All Other Projects I made
        </span>
      </div>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:grid md:grid-cols-3 space-y-10 md:space-y-0 md:gap-4"
        >
          {projectsList
            .filter((p) => !p.featured)
            .slice(0, target)
            .map((project: any, idx: number) => (
              <ProjectCard project={project} idx={idx + 1} />
            ))}
        </motion.div>
      </AnimationOnScroll>
      {projectsList.filter((p) => !p.featured).length > 6 && (
        <button
          onClick={handleChange}
          className="rounded-md hover:bg-[#64FFDA] hover:text-gray-800 border-2 border-[#64FFDA] p-2 text-[#64FFDA] text-sm mt-6 self-center font-semibold"
        >
          View More
        </button>
      )}
    </div>
  );
}

export default ProjectsSection;
