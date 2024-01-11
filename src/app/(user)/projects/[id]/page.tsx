"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import projectsData from "../projectsData";
import { Project } from "../../../../../types";
import Carousel from "@/components/Carusel";
import WebsiteLink from "@/components/WebsiteLink";
import GitHubLink from "@/components/GithubLink";
import ProjectNavigationButtons from "@/components/ProjectNavigationButtons";

export default function ProjectDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const [project, setProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const projectIndex = projectsData.findIndex(
      (project) => project.route === pathname
    );
    setCurrentIndex(projectIndex);
    if (projectIndex !== -1) {
      setProject(projectsData[projectIndex]);
    }
  }, [pathname]);

  const navigateToProject = (index: number) => {
    if (index >= 0 && index < projectsData.length) {
      router.push(projectsData[index].route);
    }
  };

  if (currentIndex === null || !project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:gap-10 gap-4 lg:pt-5 bg-gray-100 lg:px-[120px]">
      <div className="md:col-span-2 flex justify-between px-2 pt-2">
        <ProjectNavigationButtons
          currentIndex={currentIndex}
          totalProjects={projectsData.length}
          onNavigate={navigateToProject}
          // Pass any other necessary props
        />
      </div>
      <div className="bg-gray-100 flex flex-col gap-2 px-2 text-gray-700 order-3 md:order-2">
        <div>
          <h1 className="hidden md:block text-2xl md:py-10 font-semibold">
            Project Details
          </h1>
        </div>
        <h1 className="text-5xl font-bold md:text-center">{project.title}</h1>
        <div className="flex flex-row justify-evenly w-full py-3  ">
          <WebsiteLink websiteLink={project.websiteLink} />
          <GitHubLink repositoryLink={project.repositoryLink} />
        </div>
        <h2 className="text-xl font-semibold md:py-4">
          Technologies used: {project.technology}
        </h2>
        <h2 className="text-xl pb-4">{project.longDescription}</h2>
      </div>
      <div className="md:pb-10 pt-1 order-2 md:order-3">
        <h1 className="hidden md:block md:text-2xl md:py-10 py-5 px-2 font-semibold text-gray-700">
          Image Gallery
        </h1>
        <Carousel data={project.projectImages} />
      </div>
    </div>
  );
}
