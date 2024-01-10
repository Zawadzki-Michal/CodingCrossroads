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
    projectImages: [
      { image: buildImg, description: "Description for picture 1" },
      { image: socksImg, description: "Description for picture 2" },
      { image: portfolioImg, description: "Description for picture 3" },
      { image: blogImg, description: "Description for picture 4" },
    ],
    websiteLink: "https://www.coding-crossroads.co.uk/",
    repositoryLink: "https://github.com/Zawadzki-Michal/CodingCrossroads",
    longDescription: "Coding Crossroads is a blog website created for a client. It is a place where the client can share his thoughts and experiences with the world. The website is built with React and TypeScript. It uses React Router for routing and React Context for state management. The website is fully responsive and has a dark mode option. It is hosted on Netlify.",
  },
  {

    title: "Portfolio Website",
    route: "/projects/portfolio",
    description: "Your project description here...",
    imageSrc: portfolioImg,
    projectImages: [
      { image: buildImg, description: "Description for picture 1" },
      { image: socksImg, description: "Description for picture 1" },
      { image: portfolioImg, description: "Description for picture 1" },
      { image: blogImg, description: "Description for picture 1" },
    ],
    websiteLink: "https://portfolio-sage-two-22.vercel.app/",
    repositoryLink: "https://github.com/Zawadzki-Michal/Portfolio",
    longDescription: "This is my portfolio website. It is built with React and TypeScript. It uses React Router for routing and React Context for state management. The website is fully responsive and has a dark mode option. It is hosted on Vercel.",
  },
  {
  
    title: "Team Build App",
    route: "/projects/build",
    description: "Your project description here...",
    imageSrc: buildImg,
    projectImages: [
      { image: buildImg, description: "Description for picture 1" },
      { image: socksImg, description: "Description for picture 1" },
      { image: portfolioImg, description: "Description for picture 1" },
      { image: blogImg, description: "Description for picture 1" },
    ],
    websiteLink: "https://team-build.vercel.app/",
    repositoryLink: "https://github.com/Zawadzki-Michal/Team-Build",
    longDescription: "Team Build is a web application that allows users to create teams and assign members to them. The application is built with React and TypeScript. It uses React Router for routing and React Context for state management. It is fully responsive and has a dark mode option. It is hosted on Vercel.",
  },
  {
   
    title: "School of Code Stash",
    route: "/projects/stash",
    description: "Your project description here...",
    imageSrc: socksImg,
    projectImages: [
      { image: buildImg, description: "Description for picture 1" },
      { image: socksImg, description: "Description for picture 1" },
      { image: portfolioImg, description: "Description for picture 1" },
      { image: blogImg, description: "Description for picture 1" },
    ],
    websiteLink: "https://socs-ui.onrender.com/",
    repositoryLink: "https://github.com/Zawadzki-Michal/SocksByWipit-BackEnd",
    longDescription: "School of Code Stash is a web application that allows users to buy socks. The application is built with React and TypeScript. It uses React Router for routing and React Context for state management. It is fully responsive and has a dark mode option. It is hosted on Render.",
  },
  
];

export default projectsData;