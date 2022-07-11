import React, { useEffect } from "react";
import { Globe, GitHub, Youtube } from "react-feather";
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
function ProjectCard({ project, idx }: any) {
  const ref = React.useRef<HTMLDivElement>(null);

  // check if div is hoverd
  const [hover, setHover] = React.useState(false);
  useEffect(() => {
    const divs = document.querySelectorAll(".project-card");
    ref.current?.addEventListener("mouseover", () => {
      setHover(true);
      ref.current?.classList.add("hovered");
      divs.forEach((div: any) => {
        if (!div.classList.contains("hovered")) {
          div.style.opacity = "10%";
        }
      });
    });
    ref.current?.addEventListener("mouseout", () => {
      setHover(false);
      ref.current?.classList.remove("hovered");
      divs.forEach((div: any) => {
        div.style.opacity = "1";
      });
    });

    // set opacity to 0 to all divs not hovered

    return () => {
      ref.current?.removeEventListener("mouseover", () => setHover(true));
      ref.current?.removeEventListener("mouseout", () => setHover(false));
    };
  }, []);

  return (
    <motion.div
      key={idx}
      variants={listItem}
      ref={ref}
      className={`project-card bg-[#112240] w-full h-72 md:h-80 p-4 rounded-md shadow-md cursor-pointer  hover:scale-105 hover:shadow-xl transition-all transform duration-150 ease-in-out`}
    >
      <div className="flex flex-col spacce-y-4">
        <div className="flex items-center space-x-4">
          {project.livesite && (
            <Globe
              size="20"
              color="#64FFDA"
              aria-label="live site"
              className="animate-pulse"
            />
          )}
          {project.githubRepo && (
            <GitHub size="20" color="#64FFDA" aria-label="code" />
          )}
          {project.demo && (
            <Youtube size="20" color="#64FFDA" aria-label="demo" />
          )}
        </div>
        <h1
          style={{
            color: hover ? "#64FFDA" : "#CCD6F6",
            fontFamily: "Poppins",
          }}
          className="mt-2 font-bold text-lg z-10 project-heading"
        >
          {project.name}
        </h1>
        <p className="text-[#b1bbd7] text-xs font-light mt-2 leading-relaxed z-10 line-clamp-5">
          {project.description}
        </p>
        <div className="flex items-center flex-wrap space-x-2 mt-6 gap-2 z-10">
          {project.techStack.map((tech: any) => (
            <span
              style={{ fontFamily: "Fira Code" }}
              className="text-xs text-[#64FFDA] font-light "
            >
              #{tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
