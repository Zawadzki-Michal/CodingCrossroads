import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  currentIndex: number;
  totalProjects: number;
  onNavigate: (index: number) => void;
};

const ProjectNavigationButtons: React.FC<Props> = ({
  currentIndex,
  totalProjects,
  onNavigate,
}) => {
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    if (router) {
      setIsRouterReady(true);
    }
  }, [router]);

  const navigateToProjectList = () => {
    if (isRouterReady) {
      router.push("/projects");
    }
  };

  return (
    <div className="flex w-full md:justify-center md:gap-5 justify-between gap-4 pt-2">
      <button
        className=" text-gray-700 border-gray-700  border-2 font-bold py-2 px-4 rounded"
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={currentIndex <= 0}
      >
        {"<"}
      </button>
      <button
        className="  lg:bottom-20 bottom-2 bg-transparent text-gray-700 border-gray-700  border-2 font-bold py-2 px-4 rounded"
        onClick={navigateToProjectList}
      >
        Project List
      </button>
      <button
        className=" text-gray-700 border-gray-700  border-2 font-bold py-2 px-4 rounded"
        onClick={() => onNavigate(currentIndex + 1)}
        disabled={currentIndex >= totalProjects - 1}
      >
        {">"}
      </button>
    </div>
  );
};

export default ProjectNavigationButtons;
