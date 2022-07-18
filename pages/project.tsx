import { useRouter } from "next/router";
import React from "react";
import queryString from "query-string";
import { projectsList } from "../Projects";
import { ArrowLeft } from "react-feather";
function project() {
  const [projectId, setProjectId] = React.useState<number | null>(null);
  const [projectDetails, setProjectDetails] = React.useState<any>();
  // store url query params
  const router = useRouter();

  React.useEffect(() => {
    const { pid } = queryString.parse(router.asPath.split(/\?/)[1]);
    setProjectId(Number(pid));
    setProjectDetails(projectsList.find((p) => p.id === projectId));
  }, [projectId]);
  return (
    <div className=" bg-[#0A192E] p-10 md:px-20 xl:px-52 h-screen">
      {projectDetails && (
        <div className="flex flex-col space-y-6 items-center justify-center">
          <span
            onClick={() => router.back()}
            className="cursor-pointer self-start flex items-center space-x-2 link link-underline link-underline-black"
          >
            <ArrowLeft className="text-[#64FFDA]" />
            <span className="text-[#64FFDA]">return</span>
          </span>

          <h1
            style={{
              color: "#CCD6F6",
              fontFamily: "Poppins",
            }}
            className="mt-2 font-bold text-lg md:text-2xl z-10   animate__animated animate__zoomIn"
          >
            {projectDetails.name}
          </h1>
          <p className="text-[#A8B2D1] leading-loose font-light  text-center  animate__animated animate__zoomIn">
            {projectDetails.description}
          </p>
          <div className="flex items-center flex-wrap">
            {projectDetails.techStack.map((tech: any) => {
              <span className="text-[#8892B0] text-sm font-light mt-2">
                {tech.name}
              </span>;
            })}
          </div>
          <div className="laptop  animate__animated animate__fadeInUp">
            <img src="/images/laptop.png" alt="" />
            <iframe
              src={"https://www.youtube.com/embed/" + projectDetails.ytid}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default project;
