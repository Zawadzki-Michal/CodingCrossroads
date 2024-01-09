import buildImg from "@/images/build.png";
import socksImg from "@/images/socks.png";
import portfolioImg from "@/images/portfolio.png";
import blogImg from "@/images/blog.jpeg";
import { Project } from "../../../../types";

const projectsData: Project[] = [
  {
    title: "Coding Crossroads",
    route: "/projects/coding-crossroads",
    description: "Your project description here...",
    imageSrc: blogImg,
    websiteLink: "https://www.coding-crossroads.co.uk/",
    repositoryLink: "https://github.com/Zawadzki-Michal/CodingCrossroads",
  },
  {
    title: "Portfolio Website",
    route: "/projects/portfolio",
    description: "Your project description here...",
    imageSrc: portfolioImg,
    websiteLink: "https://portfolio-sage-two-22.vercel.app/",
    repositoryLink: "https://github.com/Zawadzki-Michal/Portfolio",
  },
  {
    title: "Team Build App",
    route: "/projects/build",
    description: "Your project description here...",
    imageSrc: buildImg,
    websiteLink: "https://team-build.vercel.app/",
    repositoryLink: "https://github.com/Zawadzki-Michal/Team-Build",
  },
  {
    title: "School of Code Stash",
    route: "/projects/stash",
    description: "Your project description here...",
    imageSrc: socksImg,
    websiteLink: "https://socs-ui.onrender.com/",
    repositoryLink: "https://github.com/Zawadzki-Michal/SocksByWipit-BackEnd",
  },
  
];

export default projectsData;