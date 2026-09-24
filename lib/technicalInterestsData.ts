export interface InterestCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const coreAreas: InterestCard[] = [
  {
    id: "ai",
    number: "01",
    title: "Artificial Intelligence",
    description: "Exploring intelligent systems and practical AI applications."
  },
  {
    id: "ml",
    number: "02",
    title: "Machine Learning",
    description: "Learning how models can identify patterns and support intelligent decision-making."
  },
  {
    id: "ai-agents",
    number: "03",
    title: "AI Agents",
    description: "Exploring systems that can reason, use tools, and perform tasks toward defined objectives."
  },
  {
    id: "intelligent-systems",
    number: "04",
    title: "Intelligent Systems",
    description: "Interested in combining AI, software, data, and decision-making into practical systems."
  },
  {
    id: "computer-vision",
    number: "05",
    title: "Computer Vision",
    description: "Exploring visual perception and AI-powered image understanding."
  }
];

export const systemsEmergingTech: InterestCard[] = [
  {
    id: "autonomous-systems",
    number: "01",
    title: "Autonomous Systems",
    description: "Exploring systems that combine perception, decision-making, and action."
  },
  {
    id: "iot",
    number: "02",
    title: "IoT",
    description: "Interested in connected intelligent systems and sensor-driven applications."
  },
  {
    id: "edge-computing",
    number: "03",
    title: "Edge Computing",
    description: "Exploring AI and computation closer to where data is generated."
  },
  {
    id: "robotics",
    number: "04",
    title: "Robotics",
    description: "Exploring the intersection of intelligent software, perception, and physical systems."
  },
  {
    id: "defense-technology",
    number: "05",
    title: "Defense Technology",
    description: "Exploring applications of intelligent systems in safety, surveillance, and defense-oriented technology."
  }
];

export const currentlyExploring = {
  description: "Learning by building — experimenting with ideas, developing systems, and refining what works.",
  domains: [
    "Machine Learning",
    "AI Agents",
    "Computer Vision",
    "Intelligent Systems",
    "Autonomous Systems",
    "IoT & Edge Computing"
  ],
  loopStages: ["LEARN", "EXPERIMENT", "BUILD", "REFINE"]
};

export interface SkillCategory {
  title: string;
  badgeBg: string;
  accentColor: string;
  skills: string[];
}

export const technicalSkills = {
  description: "Technologies and tools I currently work with across AI, intelligent systems, and development.",
  categories: [
    {
      title: "AI / ML & TOOLS",
      badgeBg: "bg-[#F4F0FF]",
      accentColor: "bg-[#5D41CF]",
      skills: [
        "Python",
        "OpenCV",
        "YOLOv8",
        "NumPy",
        "Pandas",
        "Hugging Face",
        "OpenEnv",
        "Lyzr"
      ]
    },
    {
      title: "SYSTEMS & IoT",
      badgeBg: "bg-[#E6FBF0]",
      accentColor: "bg-[#04CB6B]",
      skills: [
        "ESP32",
        "IoT Systems",
        "Edge Computing",
        "Autonomous Systems"
      ]
    },
    {
      title: "DEVELOPMENT & TOOLS",
      badgeBg: "bg-[#FFF2EB]",
      accentColor: "bg-[#FB4D04]",
      skills: [
        "C",
        "Git",
        "GitHub",
        "Docker"
      ]
    }
  ]
};

