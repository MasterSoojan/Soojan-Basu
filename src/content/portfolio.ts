const givenName = "Soojan";
const familyName = "Basu";
const graduationYear = 2027;

export const profile = {
  givenName,
  familyName,
  name: `${givenName} ${familyName}`,
  initials: `${givenName[0]}${familyName[0]}`,
  role: "Software developer · AI, web & embedded systems",
  location: "Kolkata, India",
  email: "supersoojanbasu@gmail.com",
  github: "https://github.com/MasterSoojan",
  linkedin: "https://www.linkedin.com/in/soojan-basu-b75572291/",
  resume: "/Soojan_Basu_Resume.pdf",
  introduction:
    "Computer Science student and AI Product intern building across software and hardware. I work on AI automation, full-stack applications, Android, and embedded systems—with a focus on reliable, real-world applications.",
} as const;

export const experience = [
  {
    id: "ai-product",
    company: "Humanize Business Solutions Pvt Ltd",
    role: "Intern · AI Product",
    // The compact Hero wording belongs to this resume entry, not a second
    // hard-coded account of the candidate's current role inside the component.
    headlineRole: "AI Product Intern",
    shortCompany: "Humanize Business Solutions",
    dates: "August 2026 – Present",
    mode: "Kolkata · In office",
    title: "Turning AI reasoning into reliable workflows.",
    points: [
      "Developed a competitive-analysis pipeline with Python and LangChain: web-context extraction, validation, structured LLM outputs, and automated reports.",
      "Used asyncio to evaluate implementation, migration, and AMS support concurrently, including evidence, limitations, and AI-assisted effort estimates.",
      "Kept scoring, normalization, validation, and effort calculations in deterministic Python; added AI-engine fallbacks and Word/PDF report generation.",
    ],
    tags: ["Python", "LangChain", "asyncio", "Structured outputs"],
  },
  {
    id: "documentation",
    company: "Humanize Business Solutions Pvt Ltd",
    role: "Intern · AI Product",
    dates: "January – April 2026",
    mode: "Remote",
    title: "Making product knowledge easier to use.",
    points: [
      "Produced and organized video recordings for project documentation and AI Product team activities.",
      "Restructured Word documents to improve organization, formatting consistency, and usability.",
    ],
    tags: ["Product documentation", "Video production", "Microsoft Word"],
  },
];

type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  points: string[];
  stack: string[];
  label: string;
  graphic: string;
};
// Describes contributions in the supplied resume, including historical versions.
// Add project URLs only after confirming the version being described.
export const projects: Project[] = [
  {
    id: "beacon",
    title: "Smart Safety Beacon",
    category: "Embedded + Android",
    label: "01 / Connected hardware",
    graphic: "BLE ↔ ANDROID",
    summary:
      "An environmental and health-monitoring wearable connected to an Android companion.",
    points: [
      "Integrated MAX30102, BME680, and an OLED on an ESP32-C3 shared I²C bus, with filtered heart-rate data and real-time gas monitoring.",
      "Built a custom BLE GATT telemetry pipeline in Kotlin for heart rate, air quality, device time, and system status.",
      "Connected physical SOS and hazard thresholds to Android foreground-service alerts; added OLED navigation and display timeout.",
    ],
    stack: ["ESP32-C3", "C++", "Kotlin", "BLE / GATT", "I²C"],
  },
  {
    id: "cookies",
    title: "VRCookiez",
    category: "Full-stack web",
    label: "02 / Commercial platform",
    graphic: "FROM OVEN TO ONLINE",
    summary: "A deployed, responsive web platform for a cookie business.",
    points: [
      "Built the commercial interface with React, Vite, and responsive CSS.",
      "Integrated Supabase relational storage, file storage, and authenticated administrative controls.",
      "Set up deployment through GitHub and Vercel.",
    ],
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Vercel"],
  },
  {
    id: "credify",
    title: "Credify",
    category: "Web + Android",
    label: "03 / Trust verification",
    graphic: "VERIFY. UNDERSTAND.",
    summary:
      "Trust-verification workflows and a companion mobile security application.",
    points: [
      "Developed document-scanning workflows and fraud-reporting functionality.",
      "Built an Android companion for suspicious-communication alerts.",
      "Implemented normalized database structures and Node.js verification-tracking logic.",
    ],
    stack: ["Node.js", "Kotlin", "MySQL"],
  },
  {
    id: "vehicle",
    title: "PID Line-Follower & Dual-Mode Vehicle",
    category: "Embedded systems",
    label: "04 / Robotics",
    graphic: "SENSE → STEER",
    summary:
      "An ESP32 robotic vehicle with closed-loop line tracking and custom circuitry.",
    points: [
      "Integrated an eight-channel IR array, TB6612FNG motor driver, and custom power circuitry.",
      "Calibrated the PID controller and assembled and soldered the hardware.",
    ],
    stack: ["ESP32", "C / C++", "PID control", "Circuit prototyping"],
  },
  {
    id: "disaster",
    title: "Disaster Management Learning Platform",
    category: "Web development",
    label: "05 / Team project",
    graphic: "LEARN. PLAY. PREPARE.",
    summary:
      "An interactive platform for learning disaster preparedness through modules and games.",
    points: [
      "Contributed responsive React learning modules and educational games, including development and testing.",
      "Implemented Node.js functionality for managing and delivering educational content.",
    ],
    stack: ["React", "Node.js", "Educational games"],
  },
];

export const skills = [
  {
    title: "Programming & AI",
    items: [
      "Python",
      "C / C++",
      "Java",
      "JavaScript",
      "Bash",
      "Pandas",
      "Pydantic",
      "LangChain",
      "LangGraph",
      "asyncio",
    ],
  },
  {
    title: "Web & databases",
    items: [
      "React",
      "Vite",
      "Node.js",
      "REST APIs",
      "HTML / CSS",
      "Supabase",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "JDBC",
    ],
  },
  {
    title: "Mobile & embedded",
    items: [
      "Kotlin",
      "Android Studio",
      "BLE / GATT",
      "Foreground services",
      "ESP32",
      "Arduino IDE",
      "PID tuning",
      "Sensor interfacing",
      "Circuit prototyping",
    ],
  },
  {
    title: "Foundations & tools",
    items: [
      "DSA",
      "OOP",
      "Operating systems",
      "Computer networks",
      "Database normalization",
      "Git / GitHub",
      "Linux",
      "Vim",
      "VS Code",
      "Microsoft Office",
    ],
  },
];
export const education = {
  degree: "Bachelor of Computer Applications",
  shortDegree: "BCA",
  institution: "RCC Institute of Information Technology, Kolkata",
  graduationYear,
  graduation: `Expected June ${graduationYear}`,
  cgpa: "7.85",
  coursework:
    "Data structures and algorithms, object-oriented programming, operating systems, computer networks, computer architecture, database normalization, transaction management, UNIX, and advanced Java.",
};
export const achievements = [
  {
    event: "Smart India Hackathon 2023",
    level: "National",
    outcome: "Qualified to second round",
  },
  {
    event: "Ignitathon 2025",
    level: "Regional",
    outcome: "Qualified to second round",
  },
  {
    event: "Smart India Hackathon 2025",
    level: "National",
    outcome: "Participant",
  },
];
export const personal = {
  cricket:
    "Competitive bowling all-rounder; played in CAB U-13, U-15, U-18, and 2nd Division leagues.",
  chess:
    "Trained at Dibyendu Barua Chess Academy and represented school in tournaments.",
  languages: ["English", "Bengali", "Hindi"],
  interests: ["Electric vehicles", "Gaming", "Fitness"],
};
