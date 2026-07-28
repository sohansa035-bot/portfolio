export const projectsData = [
  {
    slug: "yugen",
    title: "Yugēn",
    role: "Autonomous AI Surveillance Rover",
    description: "An end-to-end distributed architecture transforming raw IoT video feeds into a low-latency, biometric threat-detection system. By separating resource-constrained edge hardware from a centralized processing server, it achieves professional-grade, real-time security monitoring.",
    tech: ["ESP32", "YOLOv8", "Computer Vision", "WebSockets", "C++"],
    nodes: ["ESP32", "Camera", "YOLOv8", "Detection", "Dashboard"],
    github: "https://github.com/sohansa035-bot/Yugen",
    caseStudy: "/build/yugen",
    color: "from-blue-500/20 to-cyan-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Ccircle cx='400' cy='200' r='100' fill='none' stroke='%233b82f6' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Traditional surveillance systems rely on static cameras with significant blind spots or highly expensive enterprise robots. Processing heavy biometric ML models directly on edge devices like the ESP32 is impossible due to memory constraints.",
      architecture: "The solution splits the pipeline: The ESP32 acts merely as a mobile camera and transmission node. It streams video via WebSockets to a centralized Node.js/Python server, which runs YOLOv8 for real-time threat detection. This allows the rover to be extremely cheap while leveraging unlimited cloud compute.",
      development: "Developing the real-time WebSocket video stream required optimizing packet sizes and managing network latency. The YOLOv8 model was custom-trained on security threat datasets and integrated via a Python subprocess bridging to the main Node.js dashboard backend.",
      demo: "When deployed, the rover patrols autonomously. Upon detecting an unrecognized individual, the bounding boxes are drawn in real-time on the Next.js dashboard, and the system logs the incident to a secure database.",
      lessons: "Separating the ML inference from the hardware edge was the pivotal architectural decision. It taught me the trade-offs of network latency versus compute power in IoT robotics."
    }
  },
  {
    slug: "terrasense",
    title: "TerraSense",
    role: "Phygital Agricultural Dashboard",
    description: "An enterprise-level marketing landing page and interactive agricultural dashboard, showcasing precise hardware specifications and AI-driven agricultural solutions. Real-time data syncs across the globe with millisecond latency.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "IoT"],
    nodes: ["Sensors", "Gateway", "Cloud API", "Next.js UI", "Insights"],
    github: "https://github.com/sohansa035-bot/TerraSense",
    caseStudy: "/build/terrasense",
    color: "from-emerald-500/20 to-teal-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Crect x='300' y='100' width='200' height='200' fill='none' stroke='%2310b981' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Modern precision agriculture produces massive amounts of sensor data, but the dashboards used by farm operators are often sluggish, outdated, and fail to provide actionable insights in real time.",
      architecture: "A Next.js front-end leveraging React Server Components for fast initial loads, paired with a real-time WebSocket connection to the agricultural hardware gateways. Tailwind CSS is used for a premium, responsive UI.",
      development: "The main challenge was creating a highly interactive, animated dashboard that didn't compromise on performance. I heavily utilized Framer Motion to create smooth transitions for data updates without blocking the main thread.",
      demo: "The dashboard live-updates soil moisture, humidity, and temperature metrics. When thresholds are crossed, visual alerts trigger seamlessly.",
      lessons: "Building TerraSense taught me how to balance complex data visualization with strict performance budgets in a React environment."
    }
  },
  {
    slug: "openenv",
    title: "OpenEnv",
    role: "RL Simulation Environment",
    description: "A fully interactive State/Action/Reward Reinforcement Learning simulation. Designed as a live 'game board,' it simulates critical production server crashes and trains an autonomous AI agent to execute system commands to proactively restore server health.",
    tech: ["Python", "PyTorch", "Gradio", "RL"],
    nodes: ["Live Server", "Metrics", "RL Agent", "Action Engine", "Recovery"],
    github: "https://github.com/sohansa035-bot/OpenEnv",
    caseStudy: "/build/openenv",
    color: "from-purple-500/20 to-fuchsia-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpath d='M200,200 L600,200 M400,100 L400,300' stroke='%23a855f7' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Training Reinforcement Learning agents requires safe, reproducible environments. Testing AI-driven Site Reliability Engineering (SRE) tools on live production servers is extremely dangerous.",
      architecture: "OpenEnv provides an OpenAI Gym-compatible environment that mocks a live Linux server. It exposes a state space of CPU/RAM metrics and an action space of bash commands (like 'kill', 'restart', 'clear cache').",
      development: "I built the core simulation engine in Python, ensuring deterministic state transitions based on the agent's actions. I then integrated PyTorch to train a DQN agent on this environment.",
      demo: "The Gradio UI allows users to watch the agent interact with the simulated server. As metrics spike to dangerous levels, the agent autonomously selects the correct mitigating commands to return the server to a healthy state.",
      lessons: "Designing the reward function was the hardest part. I learned that sparse rewards lead to failed training, and shaping the reward based on continuous system stability metrics yielded the best autonomous policies."
    }
  },
  {
    slug: "ai-soc",
    title: "AI-SOC",
    role: "Threat Intelligence Pipeline",
    description: "A deterministic SRE Incident Triage environment featuring a FastAPI server, deployed seamlessly to cloud environments like Hugging Face Spaces for live inference. Monitors system logs and auto-resolves anomalies.",
    tech: ["FastAPI", "Python", "Hugging Face", "Docker"],
    nodes: ["System Logs", "FastAPI", "Hugging Face Model", "Triage", "Alerts"],
    github: "https://github.com/sohansa035-bot/ai-soc-threat-pipeline",
    caseStudy: "/build/ai-soc",
    color: "from-rose-500/20 to-red-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpolygon points='400,100 500,300 300,300' fill='none' stroke='%23f43f5e' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Security Operations Centers (SOCs) are overwhelmed by false positive alerts. Human analysts spend too much time triaging benign logs instead of investigating real threats.",
      architecture: "A FastAPI microservice that ingests system logs, preprocesses them, and passes them to a pre-trained transformer model hosted on Hugging Face for zero-shot classification of threat severity.",
      development: "The pipeline was containerized using Docker for reproducible deployment. I built a comprehensive test suite to ensure deterministic triage routing regardless of the server load.",
      demo: "Users can submit raw firewall or system logs via the API or a minimal UI, and the pipeline instantly returns a structured JSON response with a confidence score and recommended action.",
      lessons: "Deploying ML models as microservices highlighted the importance of API contract strictness and robust error handling in security applications."
    }
  },
  {
    slug: "smps",
    title: "SMPS",
    role: "Enterprise Corporate Website",
    description: "A premium enterprise-grade digital experience for SMPS Electric. Emphasizing mission-critical infrastructure through sophisticated animated ecosystem diagrams and high-performance React architecture.",
    tech: ["Next.js", "Framer Motion", "Vercel", "Tailwind CSS"],
    nodes: ["Figma Design", "React Server Components", "Tailwind", "Framer Motion", "Vercel Edge"],
    github: "https://github.com/sohansa035-bot/smps_",
    caseStudy: "/build/smps",
    color: "from-amber-500/20 to-yellow-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpath d='M200,300 L400,100 L600,300' fill='none' stroke='%23f59e0b' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "SMPS Electric needed a corporate digital identity that reflected the high-stakes, mission-critical nature of their infrastructure products. Their previous site was slow and outdated.",
      architecture: "A statically generated Next.js application leveraging modern app router features. The UI relies on a strict design system implemented via Tailwind CSS.",
      development: "I focused heavily on the UX, ensuring that the complex electrical infrastructure diagrams were interactive and intuitive without overwhelming the user.",
      demo: "The site features a smooth, cinematic loading experience and highly optimized images, scoring 100 on Lighthouse performance metrics.",
      lessons: "Working on a corporate brand taught me how to balance engineering creativity with strict business requirements and established brand guidelines."
    }
  },
  {
    slug: "autosre",
    title: "AutoSRE",
    role: "Autonomous Incident Recovery",
    description: "A Reinforcement Learning simulation for training AI to autonomously debug and resolve production server outages. Built for the Meta PyTorch OpenEnv Hackathon.",
    tech: ["Python", "PyTorch", "Streamlit", "Docker"],
    nodes: ["Game Board", "Player Agent", "Live Dashboard", "Observation Sync", "Recovery"],
    github: "https://github.com/VyomVadodariya/AutoSRE-PostMortem",
    caseStudy: "/build/autosre",
    color: "from-blue-500/20 to-indigo-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Ccircle cx='400' cy='200' r='100' fill='none' stroke='%233b82f6' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Most AI SRE tools just read logs and write post-mortems. We needed a live, interactive game board to train an agent to take active recovery actions.",
      architecture: "Divided into three layers: The Game Board (simulates server state and calculates rewards), The Player (autonomous agent executing strict actions), and The Spectator (real-time Streamlit UI).",
      development: "Pivoted from a static LLM prompt script to a fully interactive State/Action/Reward Reinforcement Learning environment compliant with OpenEnv standards.",
      demo: "The AI agent strictly uses system commands (check_metrics, list_processes, kill_process) to investigate and terminate malware like a crypto-miner maxing out CPU.",
      lessons: "Building a highly constrained action space is vital for a reinforcement learning agent to converge on correct production debugging behavior without crashing the system."
    }
  },
  {
    slug: "optcell",
    title: "OptCELL Global",
    role: "Deep Tech Innovation Platform",
    description: "An innovation ecosystem platform bridging academia and industry through collaborative R&D, advanced mentorship, and government initiatives.",
    tech: ["Web Development", "HTML", "CSS", "Deep Tech"],
    nodes: ["Student Portal", "R&D Labs", "Industry Partners", "Gov Initiatives", "Placement"],
    github: "https://github.com/VyomVadodariya/OptCELL-global",
    caseStudy: "/build/optcell",
    color: "from-green-500/20 to-teal-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpolygon points='400,100 500,300 300,300' fill='none' stroke='%2310b981' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "There is a gap between academic engineering education and industry expectations. Startups and students lack access to deep-tech R&D facilities and core engineering mentorship.",
      architecture: "A comprehensive web portal serving as the digital front door for 19+ academic and corporate partners, outlining program tracks and infrastructure availability.",
      development: "Developed a clean, responsive front-end landing page to drive applications for the IP Product R&D Track and Industry Advanced Internships, featuring dynamic program details and contact forms.",
      demo: "The platform highlights 90-day Deep Tech tracks, state-of-the-art facilities like holographic displays, and direct channels for government and R&D collaboration.",
      lessons: "Working on OptCELL emphasized the importance of clear, conversion-focused UI design when building platforms that connect elite engineering talent with industry leaders."
    }
  }
];
