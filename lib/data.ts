export interface ProjectItem {
  slug: string;
  number: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  nodes?: string[];
  github: string;
  caseStudy?: string;
  accentColor: string;
  badgeBg: string;
  color?: string;
  image?: string;
  content?: {
    problem: string;
    architecture: string;
    development: string;
    demo: string;
    lessons: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    slug: "yugen",
    number: "01",
    title: "YUGĒN",
    role: "AUTONOMOUS AI SURVEILLANCE ROVER",
    description: "An end-to-end distributed architecture transforming raw IoT video feeds into a low-latency, biometric threat-detection system. By separating resource-constrained edge hardware from centralized compute, it achieves real-time security monitoring.",
    tech: ["ESP32", "YOLOv8", "COMPUTER VISION", "WEBSOCKETS"],
    nodes: ["ESP32", "Camera", "YOLOv8", "Detection", "Dashboard"],
    github: "https://github.com/sohansa035-bot/Yugen",
    caseStudy: "/build/yugen",
    accentColor: "#FB4D04",
    badgeBg: "bg-[#FFF2EB]",
    color: "from-orange-500/20 to-amber-500/0",
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
    slug: "openenv",
    number: "02",
    title: "OPENENV",
    role: "RL SIMULATION ENVIRONMENT",
    description: "A fully interactive State/Action/Reward Reinforcement Learning simulation. Designed as a live environment that simulates critical production server incidents and trains an autonomous AI agent to proactively restore system health.",
    tech: ["PYTHON", "PYTORCH", "GRADIO", "REINFORCEMENT LEARNING"],
    nodes: ["Live Server", "Metrics", "RL Agent", "Action Engine", "Recovery"],
    github: "https://github.com/sohansa035-bot/OpenEnv",
    caseStudy: "/build/openenv",
    accentColor: "#5D41CF",
    badgeBg: "bg-[#F4F0FF]",
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
    slug: "autosre",
    number: "03",
    title: "AUTOSRE",
    role: "AUTONOMOUS INCIDENT RECOVERY",
    description: "A collaborative Reinforcement Learning simulation for training AI to autonomously debug and resolve production server outages using constrained system commands. Built for the Meta PyTorch OpenEnv Hackathon.",
    tech: ["PYTHON", "PYTORCH", "STREAMLIT", "DOCKER"],
    nodes: ["Game Board", "Player Agent", "Live Dashboard", "Observation Sync", "Recovery"],
    github: "https://github.com/VyomVadodariya/AutoSRE-PostMortem",
    caseStudy: "/build/autosre",
    accentColor: "#04CB6B",
    badgeBg: "bg-[#E6FBF0]",
    color: "from-green-500/20 to-emerald-500/0",
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
    slug: "ai-soc",
    number: "04",
    title: "AI-SOC THREAT PIPELINE",
    role: "THREAT INTELLIGENCE PIPELINE",
    description: "A deterministic incident triage pipeline featuring a FastAPI microservice, containerized with Docker and deployed to Hugging Face Spaces for log anomaly classification and automated routing.",
    tech: ["FASTAPI", "PYTHON", "HUGGING FACE", "DOCKER"],
    nodes: ["System Logs", "FastAPI", "Hugging Face Model", "Triage", "Alerts"],
    github: "https://github.com/sohansa035-bot/ai-soc-threat-pipeline",
    caseStudy: "/build/ai-soc",
    accentColor: "#FFB800",
    badgeBg: "bg-[#FEF3C7]",
    color: "from-amber-500/20 to-yellow-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpolygon points='400,100 500,300 300,300' fill='none' stroke='%23f43f5e' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Security Operations Centers (SOCs) are overwhelmed by false positive alerts. Analysts spend substantial time triaging benign logs instead of investigating real threats.",
      architecture: "A FastAPI microservice that ingests system logs, preprocesses them, and passes them to a pre-trained transformer model hosted on Hugging Face for zero-shot classification of threat severity.",
      development: "The pipeline was containerized using Docker for reproducible deployment. I built a comprehensive test suite to ensure deterministic triage routing regardless of the server load.",
      demo: "Users can submit raw firewall or system logs via the API or a minimal UI, and the pipeline instantly returns a structured JSON response with a confidence score and recommended action.",
      lessons: "Deploying ML models as microservices highlighted the importance of API contract strictness and robust error handling in security applications."
    }
  },
  {
    slug: "terrasense",
    number: "05",
    title: "TERRASENSE",
    role: "PHYGITAL AGRICULTURAL DASHBOARD",
    description: "An interactive telemetry and agricultural monitoring dashboard showcasing hardware specifications and real-time sensor metrics with low-latency data synchronization.",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "IOT"],
    nodes: ["Sensors", "Gateway", "Cloud API", "Next.js UI", "Insights"],
    github: "https://github.com/sohansa035-bot/TerraSense",
    caseStudy: "/build/terrasense",
    accentColor: "#E11D48",
    badgeBg: "bg-[#FFE4E6]",
    color: "from-rose-500/20 to-pink-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Crect x='300' y='100' width='200' height='200' fill='none' stroke='%2310b981' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "Modern precision agriculture produces massive amounts of sensor data, but traditional dashboards are often sluggish and fail to provide actionable insights in real time.",
      architecture: "A Next.js front-end leveraging React Server Components for fast initial loads, paired with a real-time WebSocket connection to agricultural hardware gateways.",
      development: "The main challenge was creating a highly interactive dashboard without compromising performance, utilizing Framer Motion for smooth data transitions without blocking the main thread.",
      demo: "The dashboard live-updates soil moisture, humidity, and temperature metrics. When thresholds are crossed, visual alerts trigger seamlessly.",
      lessons: "Building TerraSense taught me how to balance complex data visualization with strict performance budgets in a React environment."
    }
  },
  {
    slug: "oceanintel",
    number: "06",
    title: "OCEANINTEL",
    role: "SATELLITE MARITIME INTELLIGENCE",
    description: "A geospatial intelligence system combining Sentinel-1 SAR imagery, deep-learning segmentation (U-Net/ResNet-34), environmental drift modeling, and AIS correlation for marine oil-spill investigations.",
    tech: ["PYTHON", "FASTAPI", "U-NET", "PYTORCH", "SAR IMAGERY"],
    nodes: ["Sentinel-1 SAR", "AI Segmentation", "Spill Metrics", "Drift Backtracking", "AIS Correlation"],
    github: "https://github.com/VyomVadodariya/OceanIntel",
    caseStudy: "/build/oceanintel",
    accentColor: "#0284C7",
    badgeBg: "bg-[#E0F2FE]",
    color: "from-sky-500/20 to-blue-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Ccircle cx='400' cy='200' r='120' fill='none' stroke='%230284c7' stroke-width='1' stroke-dasharray='4'/%3E%3Ccircle cx='400' cy='200' r='60' fill='none' stroke='%230284c7' stroke-width='1' stroke-dasharray='2'/%3E%3Cline x1='400' y1='60' x2='400' y2='340' stroke='%230284c7' stroke-width='1' stroke-dasharray='4'/%3E%3Cline x1='260' y1='200' x2='540' y2='200' stroke='%230284c7' stroke-width='1' stroke-dasharray='4'/%3E%3C/svg%3E",
    content: {
      problem: "When an oil slick is detected in satellite imagery, ocean currents and surface winds have continuously displaced and deformed it. The detected position does not represent where the discharge occurred, making it virtually impossible for maritime authorities to identify polluters or isolate candidate vessels using raw imagery alone.",
      architecture: "The system ingests Level-1 Ground Range Detected (GRD) Sentinel-1 C-band SAR products, calibrates linear radar amplitude to decibels, and segments low-backscatter oil slicks via U-Net (ResNet-34 encoder). It computes physical metrics (area, elongation, perimeter), inverts hydrodynamic models (CMEMS currents + ERA5 wind) to simulate 6h/12h/24h backward drift corridors, and correlates candidate vessel historical AIS tracks through spatial-temporal intersection.",
      development: "Built an asynchronous FastAPI pipeline handling full SAR scene tiling and inference, containerized for high throughput. Integrated 2D kinematic particle trajectory modeling with windage coefficients and designed a deterministic evidence-fusion scoring engine to evaluate AIS observation gaps without making biased legal determinations.",
      demo: "The interactive MapLibre dashboard visualizes raw SAR imagery overlays, extracted oil slick GeoJSON boundaries, simulated reverse-drift probability plumes, and ranked candidate vessels with timeline playback of their AIS positions across the spill corridor.",
      lessons: "Maritime investigation requires transparent, explainable scoring rather than black-box labels. Distinguishing genuine telemetry blackouts from natural coverage gaps was crucial to establishing credible, defensible evidence fusion."
    }
  },
  {
    slug: "floodx",
    number: "07",
    title: "FLOODX",
    role: "HYPERLOCAL FLASH-FLOOD INTELLIGENCE",
    description: "A disaster-intelligence decision-support engine combining time-series AI hazard forecasting, graph-based predictive evacuation routing, and uncertainty quantification for mountainous terrain.",
    tech: ["PYTHON", "TIME-SERIES AI", "GRAPH NETWORKS", "IOT SENSORS", "AWS"],
    nodes: ["IoT Gauges", "MongoDB Atlas", "AWS Lambda", "Time-Series AI", "Bedrock & Routing"],
    github: "https://github.com/VyomVadodariya/FloodX",
    caseStudy: "/build/floodx",
    accentColor: "#FB4D04",
    badgeBg: "bg-[#FFF2EB]",
    color: "from-orange-500/20 to-red-500/0",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpolygon points='400,80 550,320 250,320' fill='none' stroke='%23fb4d04' stroke-width='1' stroke-dasharray='4'/%3E%3Cpath d='M250,260 Q400,200 550,260' fill='none' stroke='%23fb4d04' stroke-width='1.5'/%3E%3Ccircle cx='400' cy='180' r='8' fill='%23fb4d04'/%3E%3C/svg%3E",
    content: {
      problem: "Flash floods in mountainous terrain develop in under 30 minutes from cloudbursts or rapid glacial melt. Traditional basin forecasting requires days of lead time, relies on sparse gauge networks, and ignores dynamic human exposure like seasonal pilgrims and tourists, failing to provide actionable evacuation windows before routes become submerged.",
      architecture: "A serverless pipeline deployed on AWS. IoT rain gauges, river level sensors, and soil moisture probes stream time-series metrics through AWS API Gateway into MongoDB Atlas. AWS Lambda orchestrates feature engineering (rates of change, upstream propagation delays), multi-horizon hazard forecasting (15/30/60/120 min), and dynamic risk estimation (Hazard × Exposure × Vulnerability).",
      development: "Implemented rolling-window acceleration algorithms to detect non-linear hazard spikes. Integrated NetworkX graph-based predictive evacuation routing that evaluates future predicted road submergence rather than static distances, paired with Amazon Bedrock to generate multilingual emergency broadcast alerts.",
      demo: "During simulated flash flood surge events, the dashboard displays live sensor telemetry, dynamic 4-horizon risk heatmaps, uncertainty bounds that widen during sensor dropouts, and turn-by-turn evacuation corridors dynamically rerouting around predicted submerged road segments.",
      lessons: "In life-critical disaster systems, uncertainty quantification is as vital as the prediction itself. When sensor nodes fail during storms, the model must degrade gracefully, explicitly signaling confidence boundaries to disaster response teams."
    }
  }
];
