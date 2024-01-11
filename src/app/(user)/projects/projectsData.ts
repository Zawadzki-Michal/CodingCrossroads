import buildImg from "@/images/build.png";
import socksImg from "@/images/socks.png";
import portfolioImg from "@/images/portfolio.png";
import blogImg from "@/images/blog.jpeg";
import { Project } from "../../../../types";
import coding1 from "@/images/codingcrossroads/coding1.jpeg"
import coding2 from "@/images/codingcrossroads/coding2.png"
import coding3 from "@/images/codingcrossroads/coding3.jpeg"
import coding4 from "@/images/codingcrossroads/coding4.png"
import coding5 from "@/images/codingcrossroads/coding5.png"
import coding6 from "@/images/codingcrossroads/coding6.png"
import coding7 from "@/images/codingcrossroads/coding7.png"
import coding8 from "@/images/codingcrossroads/coding8.png"
import coding9 from "@/images/codingcrossroads/coding9.png"
import build1 from "@/images/build/build1.png"
import build2 from "@/images/build/build2.png"
import build3 from "@/images/build/build3.png"
import build4 from "@/images/build/build4.png"
import build5 from "@/images/build/build5.png"
import build6 from "@/images/build/build6.png"
import build7 from "@/images/build/build7.png"
import build8 from "@/images/build/build8.png"
import build9 from "@/images/build/build9.png"
import build10 from "@/images/build/build10.png"
import build11 from "@/images/build/build11.png"
import build12 from "@/images/build/build12.png"
import build13 from "@/images/build/build13.png"
import build14 from "@/images/build/build14.png"
import build15 from "@/images/build/build15.png"
import build16 from "@/images/build/build16.png"
import build17 from "@/images/build/build17.png"
import build18 from "@/images/build/build18.png"
import build19 from "@/images/build/build19.png"
import build20 from "@/images/build/build20.png"
import portfolio1 from "@/images/portfolio/portfolio1.png"
import portfolio2 from "@/images/portfolio/portfolio2.png"
import portfolio3 from "@/images/portfolio/portfolio3.png"
import portfolio4 from "@/images/portfolio/portfolio4.png"
import portfolio5 from "@/images/portfolio/portfolio5.png"
import portfolio6 from "@/images/portfolio/portfolio6.png"


const projectsData: Project[] = [
  {
    
    title: "Coding Crossroads",
    route: "/projects/coding-crossroads",
    description: "Coding-crossroads - My first project, powered by Sanity.io, Next.js 14, TypeScript, and TailwindCSS. Originally a simple blog, it became a TypeScript learning journey. Now, it's a dynamic portfolio site and blog, showcasing my passion for web development and my journey in one place.",
    technology: "Sanity.io, Next.js 14, TypeScript, TailwindCSS",
    imageSrc: blogImg,
    projectImages: [
      { image: coding1, description: "Landing Page coding-crossroads.co.uk" },
      { image: coding2, description: "About Me Section" },
      { image: coding3, description: "Contact Form" },
      { image: coding4, description: "Recent Projects Cards list" },
      { image: coding5, description: "Project details page/ Carousel" },
      { image: coding6, description: "Blog Cards Gallery" },
      { image: coding7, description: "Blog Post Top page/ Author Details" },
      { image: coding8, description: "Comments Section" },
      { image: coding9, description: "Comment Form" },
    ],
    websiteLink: "https://www.coding-crossroads.co.uk/",
    repositoryLink: "https://github.com/Zawadzki-Michal/CodingCrossroads",
    longDescription: "Coding-Crossroads represents more than just a web project. It tells the story about  my passion for web development and my journey in the field. It all began with a simple blog, driven by my desire to share my experiences and insights as I embarked on the path to becoming a web developer. As my enthusiasm for blogging grew, I realized the potential to merge my portfolio and blog into a single platform. This realization led to the transformation of coding-crossroads.co.uk into a dynamic website powered by Sanity.io, Next.js 14, TypeScript, and TailwindCSS. This project not only allowed me to delve deep into TypeScript but also offered the opportunity to create a seamless blend of a portfolio and a blog. The dynamic routing for project and blog post cards served as a testament to my understanding of Next.js, while the website's evolving nature reflects my commitment to continuous improvement. In the pipeline, I have plans to implement user login, authorization, and authentication features, further enhancing the user experience. In summary, coding-crossroads.co.uk is not just a website; it's a reflection of my passion for web development and a place where I share my journey. It combines a dynamic portfolio and a blog into one cohesive platform, showcasing my skills, growth, and the exciting path ahead in the world of web development.",
  },
  {

    title: "Portfolio Website",
    route: "/projects/portfolio",
    description: "My portfolio website, crafted during my evenings alongside my full-time course, showcases my journey into web design. It represents one of my earliest React and Next.js 14 projects, and I thoroughly enjoyed the learning process. However, I later integrated it into my coding-crossroads blog website to streamline my online presence. Tech stack: React, Next.js 14, TailwindCSS.",
    technology: "React, NextJS14, TailwindCSS",
    imageSrc: portfolioImg,
    projectImages: [
      { image: portfolio1, description: "Landing Page" },
      { image: portfolio2, description: "My Projects Section" },
      { image: portfolio3, description: "About Me" },
      { image: portfolio4, description: "My Projects Mobile" },
      { image: portfolio5, description: "Burger Menu" },
      { image: portfolio6, description: "Mobile Landing Page" },
    ],
    websiteLink: "https://portfolio-sage-two-22.vercel.app/",
    repositoryLink: "https://github.com/Zawadzki-Michal/Portfolio",
    longDescription: "My portfolio website is a testament to my dedication and continuous learning outside of my full-time course. It was born during my late evenings as I delved into the realm of web design. This project marked my initial foray into website creation and was among my earliest experiences with React and Next.js 14. The process of building this portfolio was a journey of discovery and growth. I relished the challenges and enjoyed learning new skills along the way. It was a valuable opportunity to apply my knowledge in a practical context and witness my progress firsthand. However, as my journey continued, I made the strategic decision to integrate my portfolio into my coding-crossroads blog website. This consolidation allowed me to maintain a cohesive online presence under a single domain while also enhancing the functionality and content available to visitors. In terms of technology, my portfolio website is built using React, Next.js 14, and TailwindCSS, reflecting my commitment to using modern tools and frameworks to create responsive and visually appealing web experiences. In summary, my portfolio website is a significant step in my web development journey, representing my early experiences with React and Next.js 14. While it served as a valuable learning opportunity, I chose to integrate it into my coding-crossroads blog website to streamline my online presence. It reflects my commitment to staying up-to-date with the latest web technologies and delivering user-friendly, visually pleasing websites.",
  },
  {
  
    title: "Team Build App",
    route: "/projects/build",
    description: "Team Build, my final School of Code project, connects charities with junior developers for a win-win. This idea, born from my passion, is now set to become a unique platform in the UK tech market. Collaboratively created using agile methods and featuring TailwindCSS and Supabase, it's a testament to my journey.",
    technology: "React, NextJS14, TailwindCSS, Supabase, Figma, MySQL",
    imageSrc: buildImg,
    projectImages: [
      { image: build1, description: "Landing Page" },
      { image: build2, description: "How it Works Page" },
      { image: build3, description: "Charities CTA Landing Page" },
      { image: build4, description: "User Login Page" },
      { image: build5, description: "Developers Registration Form" },
      { image: build6, description: "Developers Dashboard" },
      { image: build7, description: "Pitch Forms Votes Dashboard" },
      { image: build8, description: "When voted - Projects moves up on list" },
      { image: build9, description: "Charity registration Form" },
      { image: build10, description: "How to Pitch Page" },
      { image: build11, description: "Pitch Form" },
      { image: build12, description: "Figma Hi-Fidelity frames" },
      { image: build13, description: "Figjam Disney Ideation" },
      { image: build14, description: "Developers Survey Results" },
      { image: build15, description: "Charities Survey Results" },
      { image: build16, description: "User personas x 4" },
      { image: build17, description: "User Flow Diagram" },
      { image: build18, description: "Sprint planning" },
      { image: build19, description: "Initial Design, Component Tree" },
      { image: build20, description: "Trello Board" },
     
    ],
    websiteLink: "https://team-build.vercel.app/",
    repositoryLink: "https://github.com/Zawadzki-Michal/Team-Build",
    longDescription: "Team Build holds a special place in my heart as the culmination of my journey through the School of Code bootcamp. It not only represents the knowledge and skills I acquired during the program but also embodies a unique idea that I am passionate about. The core concept behind Team Build is to bridge the gap between charities and junior developers. It's an innovative approach that benefits both sides. Junior developers gain valuable commercial experience and build their portfolios by working pro-bono on real-world projects, while charities receive much-needed online presence and support at no cost. What makes this project even more significant is the fact that it was my personal brainchild. I believed in the idea wholeheartedly and managed to convince my team to rally behind it. As a result, we collectively decided to drop all other final project propositions and focus on Team Build. It's a testament to my persuasive skills and the belief that everyone on the team had in this innovative concept. Team Build was a collaborative effort, made possible by my outstanding partners: Wendy, Mahad, David, Haya, and Rikiah. We embraced agile methodologies, conducting daily standups and retrospectives to ensure seamless progress. Our sprint planning was organized using Trello, and we utilized Figma for wireframing, from low-fi to high-fi. In this project, I had the privilege of working on the design of the website and handling the front-end development alongside my friend Haya. It was during this phase that I delved deep into TailwindCSS, a choice I've never regretted. The database architecture of Team Build is built on Postgre SQL, with a schema picture available in the gallery. Everything is seamlessly connected using Supabase, an open-source alternative to Firebase, which adds robustness and scalability to the project. In summary, Team Build is not just a final project; it's a testament to my growth and the beginning of a unique endeavor in the tech industry. It showcases my skills in design and front-end development, my mastery of TailwindCSS, and my ability to collaborate effectively in agile teams. With plans for further expansion, Team Build is poised to make a meaningful impact on the tech landscape while providing opportunities for junior developers to shine.",
  },
  {
   
    title: "School of Code Stash",
    route: "/projects/stash",
    description: "Your project description here...",
    technology: "React, TypeScript, React Router, React Context",
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