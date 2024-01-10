"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import projectsData from "../projectsData";
import { Project } from "../../../../../types";
import Carousel from "@/components/Carusel";

export default function ProjectDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const project = projectsData.find(
      (project) => project.route === pathname
    ) as Project;
    setProject(project);
  }, [pathname]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 p-10 bg-gray-200">
      <div>
        <h1 className="text-5xl font-extrabold text-center pb-6">
          Image Gallery
        </h1>
        <Carousel data={project.projectImages} />
      </div>
      <div>
        <h1 className="text-5xl font-extrabold text-center pb-6">
          Project Description
        </h1>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <h2 className="text-2xl ">{project.longDescription}</h2>
      </div>
    </div>
  );
}
