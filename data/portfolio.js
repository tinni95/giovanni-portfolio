import { slugify } from "@/utlis/slugify";
import { processPortfolioMarkdown } from "@/lib/markdown";



export const portfolioItems2 = [
  {
    id: 0,
    animationOrder: 0,
    imageSrc: "/assets/images/latest-portfolio/optionsmentorai.jpg",
    width: 1939,
    height: 1572,
    livelink: "https://optionsmentorai.com",
    title: "Options Mentor AI - Financial Trading Intelligence Platform",
    description: "Full Stack Developer",
    markdownFile: "content/projects/optionsmentorai.md",
    projectDetails: {
      name: "Options Mentor AI",
      author: "Giovanni D'Amico",
      date: "Sep 2025",
      tags: "Financial Trading, AI, Full Stack",
      services: ["Full Stack Development", "UI/UX Design", "Database Design","DevOps"]
    }
  },
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
    showcase: "/assets/images/latest-portfolio/astarteshowcase.jpg",
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
      tags: "Social Media, Booking System, Event Participation, Chat System, Image Search",
      services: ["Full Stack Development", "Real-time Systems", "UI/UX Design"]
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
  {
    id: 5,
    animationOrder: 5,
    imageSrc: "/assets/images/latest-portfolio/elearning.jpg",
    width: 1939,
    height: 1572,
    title: "Opinion - E learning platform",
    description: "Full Stack Developer",
    markdownFile: "content/projects/opinion.md",
    appVideo: 1117148296,
    webVideo: 1117148524,
    projectDetails: {
      name: "Opinion - E learning platform",
      author: "Giovanni D'Amico",
      date: "Jan 2021",
      tags: "E learning, SaaS, Full Stack",
      services: ["Full Stack Development", "UI/UX Design", "Database Design","DevOps"]
    }
  },  {
    id: 5,
    animationOrder: 5,
    imageSrc: "/assets/images/latest-portfolio/barmanlivepreview.jpg",
    width: 1939,
    height: 1572,
    title: "Barman Live - Bar Service Provider",
    description: "Full Stack Developer",
    markdownFile: "content/projects/barmanlive.md",
    appVideo: 1116529432,
    projectDetails: {
      name: "Barman Live - Bar Service Provider",
      author: "Giovanni D'Amico",
      date: "Jan 2021",
      tags: "MarketPlace, Mobile App",
      services: ["Full Stack Development", "UI/UX Design", "Database Design","DevOps"]
    }
  },
  {
    id: 6,
    animationOrder: 6,
    imageSrc: "/assets/images/latest-portfolio/galiciapreview.jpg",
    width: 1939,
    height: 1572,
    livelink: "https://galiciatravels.com",
    title: "Galicia Travels - Travel Agency E-commerce Platform",
    description: "WordPress Developer",
    markdownFile: "content/projects/galicia-travels.md",
    projectDetails: {
      name: "Galicia Travels",
      author: "Giovanni D'Amico",
      date: "Sep 2025",
      tags: "Travel, Agency, E-commerce",
      services: ["WordPress Development", "Logo Design", "Brand Identity"]
    }
  },
  {
    id: 7,
    animationOrder: 7,
    imageSrc: "/assets/images/latest-portfolio/monteropreview.jpg",
    width: 1939,
    height: 1572,
    livelink: "https://monterozzino.com",
    title: "Monteró - Tuscan Wine Company E-commerce Platform",
    description: "WordPress Developer",
    markdownFile: "content/projects/montero.md",
    projectDetails: {
      name: "Monteró",
      author: "Giovanni D'Amico",
      date: "Sep 2025",
      tags: "E-commerce",
      services: ["WordPress Development"]
    }
  },
  {
    id: 8,
    animationOrder: 8,
    imageSrc: "/assets/images/latest-portfolio/stipapreview.jpg",
    width: 1939,
    height: 1572,
    livelink: "https://stipachirurgia.it",
    title: "Stipa Chirurgia - Medical Practice Website",
    description: "WordPress Developer",
    markdownFile: "content/projects/stipa-chirurgia.md",
    projectDetails: {
      name: "Stipa Chirurgia",
      author: "Giovanni D'Amico",
      date: "Sep 2025",
      tags: "Medical, Website",
      services: ["WordPress Development"]
    }
  }
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
