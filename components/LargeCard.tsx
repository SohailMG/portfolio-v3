import React from "react";
import { ExternalLink, GitHub, Youtube } from "react-feather";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useRouter } from "next/router";
function LargeCard({ project, index }: any) {
  const router = useRouter();
  // check if element is being hovered
  const [hovered, setHovered] = React.useState(false);

  return (
    <AnimationOnScroll animateIn={"animate__fadeIn"}>
      <div
        onClick={() => router.push("/project", { query: { pid: project.id } })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex cursor-pointer  ${index % 2 && "flex-row-reverse"}`}
      >
        <img
          src={project.image}
          alt="airbnb"
          className="w-[60%] h-[40%] rounded-md  cursor-pointer"
        />
        <div
          className={`flex flex-col space-y-6 justify-between ${
            index % 2 ? "items-start text-left" : "items-end text-right"
          }`}
        >
          <h1
            className={`project-heading text-lg font-semibold project-title md:text-2xl ${
              hovered ? "text-[#64FFDA]" : "text-[#ccd6f6]"
            }`}
          >
            {project.name}
          </h1>
          <p
            className={` text-[15px] leading-loose font-light bg-[#112240] p-4  ${
              index % 2 ? "-mr-44" : "-ml-44"
            } shadow-xl rounded-xl text-[#A8B2D1] `}
          >
            {project.description.slice(0, 200)}...
            <span
              onClick={() => console.log("clicked")}
              className={`text-[#64FFDA] text-[15px] link link-underline link-underline-black`}
            >
              read more
            </span>{" "}
          </p>

          <div className="flex gap-2 flex-wrap">
            {project.techStack.map((tech: any) => (
              <span className="text-xs text-[#A8B2D1] font-light">
                #{tech.name}{" "}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2">
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

export default LargeCard;
