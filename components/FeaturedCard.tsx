import React from "react";
import { GitHub, ExternalLink, Youtube } from "react-feather";
import { AnimationOnScroll } from "react-animation-on-scroll";
function FeaturedCard({ project }: any) {
  return (
    <AnimationOnScroll animateIn="Animate__fadeInUp">
      <div className="bg-[#0D2133]  rounded-lg top-[50%] translate-y-1/2 md:translate-y-0 relative shadow-md m-4 z-0 ">
        <img
          src={project.image}
          alt="airbnb"
          className="absolute h-full rounded-lg z-0  opacity-5  object-cover"
        />
        <div className="p-6 z-10 bg-[#0D2133]  ">
          <h1
            style={{
              color: "white",
              fontFamily: "Poppins",
            }}
            className="mt-2 font-bold text-lg z-10 project-heading"
          >
            {project.name}
          </h1>
          <p className="text-[#b1bbd7] text-xs font-light mt-2 leading-relaxed z-10 bg-[#0D2133] rounded-lg p-2 shadow-xl">
            {project.description}
          </p>
          <div className="flex items-center flex-wrap space-x-2 mt-6 gap-2 z-10">
            {project.techStack.map((tech: any) => (
              <span
                style={{ fontFamily: "Fira Code" }}
                className="text-xs text-[#64FFDA] font-bold "
              >
                #{tech.name}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-2 mt-6">
            {project.githubRepo && (
              <GitHub
                color="#CCD6F6"
                size="17"
                onClick={() => window.open(project.githubRepo)}
                className="hover:text-[#64FFDA] z-10 cursor-pointer"
              />
            )}
            {project.livesite && (
              <ExternalLink
                onClick={() => window.open(project.livesite)}
                color="#CCD6F6"
                size="17"
                className="hover:text-[#64FFDA] z-10 cursor-pointer"
              />
            )}
            {project.demo && (
              <Youtube
                color="#CCD6F6"
                size="17"
                className="z-10 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default FeaturedCard;
