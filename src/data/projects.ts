// src/data/projects.ts
interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
  image?: string;
  role: string;
}

export const projects: Project[] = [
  {
    title: "Rug.ai",
    description:
      "Developed a Web3 app providing blockchain and token information with a modern frontend using React and Tailwind. Integrated blockchain interaction using ethers.js and wagmi, and managed state with Jotai for seamless performance.",
    stack: ["React", "Tailwind", "ethers.js", "wagmi", "Jotai"],
    role: "Senior Software Engineer",
  },
  {
    title: "Illimity Bank",
    description:
      "Transformed the app into a multi-tenant platform by developing tenant-specific components. Enhanced performance, introduced an advanced CI/CD build process, and ensured seamless integration across web and mobile platforms.",
    stack: ["React Native", "React", "CI/CD", "Testing"],
    role: "Senior Software Engineer",
  },
  {
    title: "Sisal",
    description:
      "Led the integration of React in a monorepo setup using Lerna for optimized workflows. Introduced Zustand for state management and TypeScript for improved code quality, ensuring scalable and maintainable development processes.",
    stack: ["React", "Zustand", "TypeScript", "Lerna"],
    role: "Senior Software Engineer",
  },
  {
    title: "FIBR",
    description:
      "Led mobile development for fitness apps targeting Android and iOS platforms. Designed and implemented key features, collaborated with cross-functional teams, and mentored junior developers to ensure high-quality outcomes.",
    stack: ["React Native", "Agile", "Cross-platform"],
    role: "Senior Software Engineer",
  },
  {
    title: "Gucci",
    description:
      "Contributed to a custom print label system with tailored solutions for stores and regions. Developed both backend APIs and a responsive frontend using React, ensuring smooth operation and user satisfaction.",
    stack: ["React", "Node.js", "APIs"],
    role: "Senior Software Engineer",
  },
  {
    title: "Portfolio",
    description:
      "Built a sleek and fast portfolio website to showcase projects and skills. Used Astro for its speed, Tailwind for styling.",
    stack: ["Astro", "React", "Tailwind CSS"],
    role: "Personal Project",
    link: "https://www.lukapetro.dev/",
  },
  {
    title: "onlyfarms.xyz",
    description:
      "Developed a full-stack airdrop farming tracker for crypto enthusiasts. Enabled users to sign up, follow farms, and complete tasks to qualify for airdrops, achieving 2,000 active users within the first month.",
    stack: ["Next.js", "tRPC", "Prisma", "Next Auth"],
    role: "Personal Project",
    link: "https://onlyfarms.xyz",
  },
];
