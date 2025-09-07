import { slugify } from "@/utlis/slugify";
import { processPortfolioMarkdown } from "@/lib/markdown";



export const portfolioItems2 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/latest-portfolio/cozydeskpreview.jpg",
    width: 1920,
    height: 1040,
    title: "Cozy Desk - Work Cozy Everywhere",
    description: "Full Stack Developer - Cofounder",
    appVideo: 1116401749,
    markdownFile: "content/projects/cozy-desk.md",
    projectDetails: {
      name: "Cozy Desk",
      author: "Giovanni D'Amico",
      date: "Sep 2025",
      tags: "Remote Work, SaaS, Full Stack",
      services: ["UI/UX Design", "Full Stack Development", "Mobile Development", "DevOps"]
    }
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/astartepreview.jpg",
    width: 1939,
    height: 1572,
    title: "Astarte - Artist Social Media",
    description: "Full Stack Developer",
    markdownFile: "content/projects/astarte.md",
    appVideo: 859342672,
    projectDetails: {
      name: "Astarte",
      author: "Giovanni D'Amico",
      date: "Jan 2024",
      tags: "Social Media, Blockchain, Art",
      services: ["Full Stack Development", "Blockchain Integration", "Real-time Systems", "UI/UX Design"]
    }
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/bbnbpreview.jpg",
    width: 1939,
    height: 1572,
    title: "BBNB - Tourism and Travel",
    description: "Full Stack Developer",
    appVideo: 1002095728,
    webVideo: 1002095473,
    markdownFile: "content/projects/bbnb.md",
    projectDetails: {
      name: "BBNB",
      author: "Giovanni D'Amico",
      date: "Jan 2024",
      tags: "Travel, Tourism, Mobile App",
      services: ["Full Stack Development", "Mobile Development", "API Design", "Third-party Integration"]
    }
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/tenditpreview.jpg",
    width: 1939,
    height: 1572,
    title: "Tendit",
    description: "Full Stack Developer",
    markdownFile: "content/projects/tendit.md",
    appVideo: 472357860,
    projectDetails: {
      name: "Tendit",
      author: "Giovanni D'Amico",
      date: "Jan 2021",
      tags: "Productivity, Task Management, Collaboration",
      services: ["Full Stack Development", "Real-time Systems", "UI/UX Design", "Database Design"]
    }
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

// Process markdown content for all portfolio items at build time
export const allPortfolioItems = processPortfolioMarkdown([
  ...portfolioItems2,
]);

// Also export processed individual arrays for specific use cases
export const processedPortfolioItems= processPortfolioMarkdown(portfolioItems2);
