import { ProjectType } from "@/types/project-details";
import chess from "@/public/chessproj.png";
import chat from "@/public/chatapp.png";
import pptChat from "@/public/pptchat.png";
import weavr from "@/public/weavr.png";

export const PROJECTS: ProjectType[] = [
  {
    title: "Halo",
    period: "Sept 2026",
    stack: ["TypeScript", "Next.js", "Bun"],
    description:
      "Paste a social link and download the original video, reel, story, or image.",
    githubLink: "https://github.com/agayushh/Halo",
  },
  {
    title: "LidFx",
    period: "Sept 2026",
    stack: ["JavaScript", "GLSL", "Python", "GNOME Shell", "Wayland"],
    description:
      "GNOME Shell extension that folds and blurs the live Wayland desktop as the laptop lid closes.",
    githubLink: "https://github.com/agayushh/lidfx",
    deployedLink: "https://lidfx.vercel.app",
  },
  {
    title: "boxctl",
    period: "Sept 2026",
    stack: ["TypeScript", "Node.js"],
    description:
      "Terminal Sokoban with 50 puzzles, themes, undo, local scores, and a built-in solver.",
    githubLink: "https://github.com/agayushh/boxctl",
    deployedLink: "https://www.npmjs.com/package/boxctl",
  },
  {
    title: "DUM-E",
    period: "Aug 2026",
    stack: ["TypeScript", "Bun", "OpenTUI", "React", "Hono", "Drizzle", "PostgreSQL"],
    description:
      "Terminal coding agent that reads, searches, edits, and runs commands inside a local repository.",
    githubLink: "https://github.com/agayushh/dum-e",
  },
  {
    title: "Slack Chat Exporter",
    period: "Aug 2026",
    stack: ["JavaScript", "Chrome MV3"],
    description:
      "Chrome extension that exports Slack channels and threads to JSON, Markdown, text, or CSV.",
    githubLink: "https://github.com/agayushh/slack-chat-exporter",
  },
  {
    title: "FillIt",
    period: "Jul 2026",
    stack: ["TypeScript", "React", "Vite", "Chrome MV3", "Transformers.js"],
    description:
      "Chrome extension that fills job and web forms from a local profile, on device.",
    githubLink: "https://github.com/agayushh/Umbreon",
  },
  {
    title: "Friday",
    period: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "This site. Case file, résumé, and the project index.",
    githubLink: "https://github.com/agayushh/friday",
    deployedLink: "https://ayushg.live",
  },
  {
    title: "LyftrAI",
    period: "Feb 2026",
    stack: ["Python", "FastAPI", "Docker"],
    description:
      "Webhook receiver with signature checks, stored messages, and Prometheus metrics.",
    githubLink: "https://github.com/agayushh/LyftrAI",
  },
  {
    banner: weavr,
    featured: true,
    title: "Weavr",
    period: "Oct 2025",
    stack: ["Next Js", "tRPC", "BetterAuth", "Prisma"],
    description: "This will help you automate your workflows just like n8n",
    githubLink: "https://github.com/agayushh/weavr1",
    deployedLink: "https://github.com/agayushh/weavr1",
  },
  {
    banner: pptChat,
    featured: true,
    title: "PPT Chat",
    period: "Oct 2025",
    stack: ["Next Js", "Clerk", "Mongoose", "Mem0AI"],
    description: "Cloned Chat GPT",
    githubLink: "https://github.com/agayushh/pptchat",
    deployedLink: "https://ppt-chat.vercel.app/",
  },
  {
    banner: chess,
    featured: true,
    title: "Chess",
    period: "Sept 2025",
    stack: ["Next Js", "Typescript", "Tailwind"],
    description: "Challenge AI for a chess game.",
    githubLink: "https://github.com/agayushh/AI-ShatRanj",
    deployedLink: "https://ai-shat-ranj.vercel.app/",
  },
  {
    banner: chat,
    featured: true,
    title: "ChatFish",
    period: "Aug 2025",
    stack: ["ReactJs", "Websockets", "Hono JS"],
    description: "A Chat application ",
    githubLink: "https://github.com/agayushh/chatfish",
    deployedLink: "https://chatfish.agayush.me/",
  },
  {
    title: "AI Agent",
    period: "Jul 2024",
    stack: ["Python", "watchdog"],
    description:
      "Monitors CSV files, flags duplicates and missing values, and logs what changed.",
    githubLink: "https://github.com/agayushh/AI-Agent",
  },
];

export const Projects_List = PROJECTS.filter(
  (project): project is ProjectType & { banner: NonNullable<ProjectType["banner"]> } =>
    project.featured === true && project.banner != null
);
