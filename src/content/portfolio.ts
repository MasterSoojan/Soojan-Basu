const givenName = "Soojan";
const familyName = "Basu";
const graduationYear = 2027;

/** Candidate identity and primary contact/social links. */
export type Profile = {
  givenName: string;
  familyName: string;
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  avatarUrl?: string;
  introduction: string;
};

export const profile: Profile = {
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
  avatarUrl: "",
  introduction:
    "BCA student with AI Product internship experience building Python-based LLM automation and report-generation workflows, alongside full-stack web and embedded-systems projects. Interested in software engineering, backend development, and AI applications; comfortable working across application logic, databases, and deployment configuration.",
};

export type ExperienceHighlight = {
  category: string;
  title: string;
  description: string;
  tags?: string[];
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  headlineRole?: string;
  shortCompany?: string;
  dates: string;
  mode: string;
  title: string;
  summary?: string;
  points: string[];
  highlights?: ExperienceHighlight[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "ai-product",
    company: "Humanize Business Solutions Pvt Ltd",
    role: "Intern · AI Product",
    // The compact Hero wording belongs to this resume entry, not a second
    // hard-coded account of the candidate's current role inside the component.
    headlineRole: "AI Product Intern",
    shortCompany: "Humanize Business Solutions",
    dates: "1 Aug 2026 – 30 Oct 2026",
    mode: "Kolkata · On-site",
    title: "Turning AI reasoning into reliable workflows.",
    summary:
      "Architected Python-based LLM evaluation pipelines, concurrent asyncio scoring stages, and a custom full-stack CMS with AWS cloud delivery.",
    points: [
      "Developed a Python-based competitive analysis pipeline combining web-context extraction, LLM evaluation, evidence validation, structured outputs, and automated Word/PDF report generation.",
      "Used asyncio to evaluate New Implementation, Migration, and AMS Support stages concurrently; separated LLM-generated assessments from deterministic scoring, normalization, validation, N/A handling, and effort calculations.",
      "Implemented fallback across multiple AI engines and structured capability assessments, evidence, limitations, and AI-assisted effort estimates.",
      "Designed and implemented key functionality for a custom CMS powering Humanize's landing page, enabling authenticated content management through a React frontend and Node.js/Express/TypeScript backend with MongoDB Atlas/Mongoose.",
      "Applied DRY/KISS principles and maintainability-focused refactoring, directing implementation, reviewing logic, and making targeted code and UX changes with AI coding assistance.",
      "Configured and verified AWS deployment components, including CloudFront routing and cache invalidation; improved SEO fallback behavior, backend-failure handling, and multiple areas of the landing-page UX.",
    ],
    highlights: [
      {
        category: "AI & Automation",
        title: "Competitive Analysis Pipeline",
        description:
          "Engineered a Python-based pipeline combining web-context extraction, LLM evaluation, evidence validation, structured outputs, and automated Word/PDF report generation.",
        tags: ["Python", "LangChain", "Structured Outputs"],
      },
      {
        category: "Async Backend",
        title: "Concurrent Evaluation & Deterministic Scoring",
        description:
          "Used asyncio to evaluate New Implementation, Migration, and AMS Support stages concurrently; cleanly separated non-deterministic LLM assessments from deterministic scoring, validation, and effort calculations.",
        tags: ["asyncio", "Python", "Scoring Logic"],
      },
      {
        category: "AI Reliability",
        title: "Multi-Engine Fallback & Guardrails",
        description:
          "Implemented fallback across multiple AI engines, standardizing structured capability assessments, evidence citation, system limitations, and AI-assisted effort estimates.",
        tags: ["Multi-LLM", "Fault Tolerance", "Evaluation"],
      },
      {
        category: "Full-Stack Web",
        title: "Custom Landing-Page CMS",
        description:
          "Designed and implemented key functionality for an authenticated CMS powering Humanize's landing page with React, Node.js/Express/TypeScript, and MongoDB Atlas.",
        tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      },
      {
        category: "Cloud & Edge",
        title: "AWS CloudFront & Cache Invalidation",
        description:
          "Configured and verified AWS deployment components including CloudFront routing, cache invalidation, SEO fallback behavior, and backend-failure resilience.",
        tags: ["AWS", "CloudFront", "CDN", "Resilience"],
      },
      {
        category: "Engineering DX",
        title: "DRY/KISS Refactoring & UX Polish",
        description:
          "Applied maintainability-focused refactoring, directing implementation, reviewing logic, and making targeted code and UX refinements with AI coding assistance.",
        tags: ["DRY/KISS", "Code Review", "UX Polish"],
      },
    ],
    tags: [
      "Python",
      "LangChain",
      "asyncio",
      "Structured outputs",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
    ],
  },
  {
    id: "documentation",
    company: "Humanize Business Solutions Pvt Ltd",
    role: "Intern · AI Product",
    dates: "19 Jan 2026 – 30 Apr 2026",
    mode: "Remote",
    title: "Making product knowledge easier to use.",
    summary:
      "Produced comprehensive video walkthroughs and standardized technical documents for engineering and product teams.",
    points: [
      "Produced and organized video recordings for project documentation and AI Product team activities.",
      "Created and restructured .docx, .xlsx, and .pptx documents to improve organization, consistency, and usability.",
    ],
    highlights: [
      {
        category: "Knowledge Transfer",
        title: "Technical Video Documentation",
        description:
          "Produced and organized video walkthroughs and technical recordings for project documentation and AI Product team activities.",
        tags: ["Video Production", "Knowledge Transfer"],
      },
      {
        category: "Asset Standardization",
        title: "Product Asset Restructuring",
        description:
          "Created and restructured .docx, .xlsx, and .pptx documents to improve organization, consistency, and usability across product teams.",
        tags: ["Technical Documentation", "MS Office"],
      },
    ],
    tags: ["Product documentation", "Video production", "MS Office"],
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
    id: "cookies",
    title: "VRCookiez",
    category: "Full-stack web",
    label: "01 / Commercial platform",
    graphic: "FROM OVEN TO ONLINE",
    summary: "A deployed, responsive web platform for a cookie business.",
    points: [
      "Built and deployed a responsive commercial web application with modern CSS and reusable UI components.",
      "Integrated Supabase for relational data, storage, and authenticated administrative controls; configured deployment through GitHub and Vercel.",
    ],
    stack: ["React", "Vite", "Supabase", "Vercel"],
  },
  {
    id: "beacon",
    title: "Smart Safety Beacon",
    category: "Embedded + Android",
    label: "02 / Connected hardware",
    graphic: "BLE ↔ ANDROID",
    summary:
      "An environmental and health-monitoring wearable connected to an Android companion.",
    points: [
      "Worked on integrating MAX30102 biometric, BME680 environmental, and SSD1306 OLED modules over I²C; implemented filtered heart-rate processing and live air-quality monitoring.",
      "Contributed to the Android companion app and BLE GATT telemetry pipeline, including hazard thresholds, physical SOS triggering, and Android foreground-service alerts.",
    ],
    stack: ["ESP32-C3", "C++", "Kotlin", "BLE / GATT", "I²C"],
  },
  {
    id: "vehicle",
    title: "PID-Controlled Line-Follower & Dual-Mode Vehicle",
    category: "Embedded systems",
    label: "03 / Robotics",
    graphic: "SENSE → STEER",
    summary:
      "An ESP32 robotic vehicle with closed-loop line tracking and custom circuitry.",
    points: [
      "Helped build an ESP32 robotic vehicle using an 8-channel IR sensor array, TB6612FNG motor driver, and custom power circuitry.",
      "Contributed to coding, closed-loop PID line-tracking calibration, board assembly, and soldering.",
    ],
    stack: ["ESP32", "C / C++", "PID control", "Circuit prototyping"],
  },
  {
    id: "disaster",
    title: "DisasterReady",
    category: "Web development",
    label: "04 / Team project",
    graphic: "LEARN. PLAY. PREPARE.",
    summary:
      "An interactive platform for learning disaster preparedness through modules and games.",
    points: [
      "Refactored the React/Node.js codebase extensively around DRY/KISS principles, reducing duplication and improving maintainability; built educational games and fixed bugs across the platform.",
    ],
    stack: ["React", "Node.js", "Python"],
  },
  {
    id: "credify",
    title: "Credify",
    category: "Web + Android",
    label: "05 / Trust verification",
    graphic: "VERIFY. UNDERSTAND.",
    summary:
      "Trust-verification workflows and a companion mobile security application.",
    points: [
      "Contributed across the application, including document-scanning and fraud-reporting workflows and Android suspicious-communication alerts.",
      "Designed normalized MySQL tables and implemented backend verification logic to track document checks and fraud reports.",
    ],
    stack: ["Node.js", "Kotlin", "Supabase", "MySQL"],
  },
];

/** Categorized technical skills and tooling capabilities. */
export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Programming & AI",
    items: [
      "Python",
      "Java",
      "C / C++",
      "JavaScript",
      "TypeScript",
      "Bash",
      "LangChain",
      "LangGraph",
      "Pydantic",
      "asyncio",
      "Structured outputs",
      "Prompt engineering",
    ],
  },
  {
    title: "Web & databases",
    items: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "REST APIs",
      "HTML5 / CSS3",
      "MySQL",
      "MongoDB / Mongoose",
      "Supabase",
      "PostgreSQL",
      "JDBC",
    ],
  },
  {
    title: "Cloud & tools",
    items: [
      "AWS (CloudFront, IAM, EC2)",
      "Git / GitHub",
      "GitHub Actions",
      "Linux",
      "DSA & Algorithms",
      "Database normalization",
      "MS Office / Word / Excel",
      "Video editing",
    ],
  },
  {
    title: "Mobile & embedded",
    items: [
      "Kotlin",
      "Android",
      "BLE / GATT",
      "Foreground services",
      "ESP32",
      "Arduino",
      "PID control",
      "Sensor interfacing",
      "Circuit prototyping",
    ],
  },
];

/** Degree, university, and academic coursework details. */
export type Education = {
  degree: string;
  shortDegree: string;
  institution: string;
  graduationYear: number;
  graduation: string;
  cgpa: string;
  coursework: string;
};

export const education: Education = {
  degree: "Bachelor of Computer Applications",
  shortDegree: "BCA",
  institution: "RCC Institute of Information Technology, Kolkata",
  graduationYear,
  graduation: `Expected June ${graduationYear}`,
  cgpa: "7.85",
  coursework:
    "Data structures and algorithms, object-oriented programming, operating systems, computer networks, computer architecture, RDBMS, machine learning, database normalization, transaction management, UNIX/shell programming, and JDBC.",
};

/** Hackathon and competitive achievements. */
export type Achievement = {
  event: string;
  level: string;
  outcome: string;
};

export const achievements: Achievement[] = [
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

/** Personal interests, languages, and extracurricular background. */
export type Personal = {
  cricket: string;
  chess: string;
  languages: string[];
  interests: string[];
};

export const personal: Personal = {
  cricket:
    "Competitive bowling all-rounder; played in CAB U-13, U-15, U-18, and 2nd Division leagues.",
  chess:
    "Trained at Dibyendu Barua Chess Academy and represented school in tournament competitions.",
  languages: ["English", "Bengali", "Hindi"],
  interests: ["Electric vehicles", "Gaming", "Fitness"],
};
