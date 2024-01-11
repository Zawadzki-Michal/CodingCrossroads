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
    <div className="flex w-full justify-between px-2 py-4">
      <button
        className="border px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={currentIndex <= 0}
      >
        {"<"}
      </button>
      <button
        className="border px-6 py-2 mx-2 rounded text-gray-700 hover:bg-gray-200"
        onClick={navigateToProjectList}
      >
        Project List
      </button>
      <button
        className="border px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
        onClick={() => onNavigate(currentIndex + 1)}
        disabled={currentIndex >= totalProjects - 1}
      >
        {">"}
      </button>
    </div>
  );
};

export default ProjectNavigationButtons;
