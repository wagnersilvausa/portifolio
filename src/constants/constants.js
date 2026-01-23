import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Automation Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Builder",
    icon: mobile,
  },
  {
    title: "AI Workflow Specialist",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JWT",
    icon: jwt,
  },
];

const GITHUB_PROFILE = "https://github.com/wagnersilvausa";

const projects = [
  {
    name: "AutoFlow Engine",
    description:
      "End-to-end automation platform designed to orchestrate workflows, API integrations, background jobs, and real-time triggers. Built to eliminate manual processes and scale operational efficiency across multiple systems.",
    features: [
      "Users can create a room and invite others to join the room using a unique room code.",
      "Users can draw on the whiteboard and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      { name: "N8N", color: "blue-text-gradient" },
      { name: "APIs", color: "green-text-gradient" },
      { name: "WEBHOOKS", color: "pink-text-gradient" },
      { name: "POSTGRESQL", color: "orange-text-gradient" },
      { name: "NODEJS", color: "blue-text-gradient" },
    ],
    image: inkSync,
    source_code_link: GITHUB_PROFILE,
    live_link: GITHUB_PROFILE,
  },
  {
    name: "Pulse Dashboard",
    description:
      "A real-time analytics dashboard focused on operational visibility, metrics tracking, and business insights. Integrates multiple data sources and provides actionable views for performance monitoring and decision-making.",
    features: [
      "User authentication using NextAuth.js with JWT and OAuth providers.",
      "Redux to manage app state effectively.",
      "Play, pause, skip, and control the playback of songs.",
      "Users can create, update and delete their own playlists.",
      "Add songs to favorites in one click.",
      "Auto adds similar songs to the queue.",
      "Swipe and touch gestures for touch-responsive devices.",
      "Display song details such as title, artist, album, and album artwork.",
      "PWA (Progressive Web App) support.",
    ],
    tags: [
      { name: "NEXTJS", color: "blue-text-gradient" },
      { name: "REACT", color: "green-text-gradient" },
      { name: "RECHARTS", color: "pink-text-gradient" },
      { name: "SUPABASE", color: "orange-text-gradient" },
      { name: "POSTGRESQL", color: "blue-text-gradient" },
      { name: "", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: GITHUB_PROFILE,
    live_link: GITHUB_PROFILE,
  },
  {
    name: "Atlas AI Pipeline",
    description: "AI-powered workflow engine that automates content generation, data processing, and intelligent decision flows using large language models, vector search, and scalable orchestration.",
    features: [
      "Email verification and OTP-based authentication patterns using JWT.",
      "Students can browse and purchase courses; instructors can create, edit, and delete courses.",
      "MongoDB integration for user data, course data, and progress tracking.",
      "RESTful API architecture for clean frontend-backend communication.",
      "Payment integration-ready structure.",
      "PWA (Progressive Web App) support.",
    ],
    tags: [
      { name: "LLMs", color: "blue-text-gradient" },
      { name: "LANGCHAIN", color: "green-text-gradient" },
      { name: "VECTORDB", color: "pink-text-gradient" },
      { name: "PYTHON", color: "orange-text-gradient" },
      { name: "APIs", color: "blue-text-gradient" },
      { name: "", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: GITHUB_PROFILE,
    live_link: GITHUB_PROFILE,
  },
  {
    name: "Nimbus Web Platform",
    description:
      "Scalable full-stack web platform architecture focused on authentication, modular services, performance optimization, and cloud-native deployment patterns for modern SaaS products.",
    features: [
      "Users can add products to a watchlist from the product page.",
      "Users can set a price threshold to trigger alerts.",
    ],
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Chrome Extension", color: "green-text-gradient" },
      { name: "ReactJs", color: "pink-text-gradient" },
    ],
    image: tracker,
    source_code_link: GITHUB_PROFILE,
    live_link: GITHUB_PROFILE,
  },
  {
    name: "Sentinel Ops",
    description:
      "Operational monitoring and alerting platform designed to track system health, automate incident responses, and provide real-time visibility across distributed services and workflows.",
    features: [
      "User authentication using JWT and OAuth providers.",
      "Infinite scroll for posts.",
      "Image and video uploads.",
      "Like, comment, and share posts.",
      "Follow and unfollow users.",
      "Dark mode support.",
    ],
    tags: [
      { name: "NEXTJS", color: "blue-text-gradient" },
      { name: "TYPESCRIPT", color: "green-text-gradient" },
      { name: "AUTH", color: "pink-text-gradient" },
      { name: "SUPABASE", color: "orange-text-gradient" },
      { name: "VERCEL", color: "blue-text-gradient" },
    ],
    image: socialSphere,
    source_code_link: GITHUB_PROFILE,
    live_link: GITHUB_PROFILE,
  },
];

export { services, technologies, projects };
