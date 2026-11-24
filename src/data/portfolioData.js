export const personalInfo = {
  name: "Dushyant Kamboj",
  role: "Full Stack Developer",
  tagline: "B.Tech Computer Science graduate specializing in MERN Stack, Python, REST APIs, and modern responsive web applications.",
  bio: "B.Tech Computer Science graduate with hands-on experience in full-stack development using the MERN stack. Completed industry training at TechGlock Software Solutions. Solved 150+ DSA problems on LeetCode. Skilled in JavaScript, Python, REST APIs, and database management, with knowledge of AI/ML and strong leadership skills.",
  availability: "Available for Full-time Roles & Projects",
  email: "dushyantkamboj28@gmail.com",
  phone: "+91 8708716077",
  location: "Yamunanagar, Haryana, India",
  github: "https://github.com/Dushyantkamboj",
  linkedin: "https://linkedin.com/in/dushyant-kamboj-8837b7386",
  stats: [
    { label: "Problems Solved", value: "150+", sub: "LeetCode & DSA" },
    { label: "Badges Earned", value: "50 & 100", sub: "Days LeetCode Badges" },
    { label: "Industry Training", value: "3 Months", sub: "TechGlock MERN Trainee" },
    { label: "NCC Certification", value: "A, B & C", sub: "Grade B Certified" }
  ]
};

export const technicalSkills = {
  programming: [
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", color: "from-yellow-400 to-amber-500", desc: "Async/await, closures, modern ES features, DOM APIs" },
    { name: "Python", level: "Proficient", icon: "Terminal", color: "from-amber-400 to-yellow-600", desc: "Speech recognition, NLP, automation, ML scripting" },
    { name: "Java (Basic)", level: "Basic", icon: "Boxes", color: "from-red-400 to-orange-500", desc: "Core OOP fundamentals, syntax and basic algorithms" }
  ],
  frontend: [
    { name: "React.js", level: "Advanced", icon: "Code2", color: "from-cyan-400 to-blue-500", desc: "Hooks, component architecture, state management, SPA" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Palette", color: "from-teal-400 to-cyan-500", desc: "Utility-first design, dark mode, responsive layouts" },
    { name: "Next.js (Basic)", level: "Basic", icon: "Layout", color: "from-slate-200 to-slate-400", desc: "Server components, routing principles, hybrid rendering" },
    { name: "HTML5 & CSS3", level: "Expert", icon: "Layout", color: "from-orange-400 to-red-500", desc: "Semantic markup, modern flexbox, CSS grid, animations" },
    { name: "Responsive Web Design", level: "Advanced", icon: "Laptop", color: "from-purple-400 to-indigo-500", desc: "Mobile-first development, cross-browser compatibility" }
  ],
  backend: [
    { name: "Node.js", level: "Proficient", icon: "Server", color: "from-emerald-400 to-green-600", desc: "Modular backend runtime, event-driven architecture" },
    { name: "Express.js", level: "Proficient", icon: "Cpu", color: "from-slate-300 to-slate-500", desc: "REST routing, middleware, error handling, security" },
    { name: "REST API Design", level: "Advanced", icon: "Network", color: "from-purple-400 to-indigo-500", desc: "CRUD design, JSON payloads, auth headers, token flows" }
  ],
  database: [
    { name: "MongoDB", level: "Proficient", icon: "Database", color: "from-green-500 to-emerald-700", desc: "Mongoose ODM, schemas, collections, NoSQL queries" },
    { name: "MySQL (Basic)", level: "Basic", icon: "Table2", color: "from-blue-400 to-indigo-600", desc: "Relational queries, tables, normalization, Sequelize ORM" }
  ],
  aiml: [
    { name: "ML Fundamentals", level: "Intermediate", icon: "Sparkles", color: "from-violet-400 to-fuchsia-500", desc: "Infosys Foundation training, supervised learning concepts" },
    { name: "Python-based ML", level: "Intermediate", icon: "Binary", color: "from-pink-400 to-purple-600", desc: "Data preprocessing, scikit-learn basics, feature extraction" },
    { name: "AIML Training", level: "Certified", icon: "Award", color: "from-cyan-400 to-blue-600", desc: "Certified by Infosys Foundation with Grade B" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", color: "from-orange-500 to-red-600", desc: "Version control, branching workflows, pull requests" },
    { name: "Postman", level: "Proficient", icon: "Send", color: "from-orange-400 to-amber-600", desc: "API testing, endpoint debugging, environment variables" },
    { name: "Visual Studio Code", level: "Expert", icon: "Laptop", color: "from-sky-400 to-blue-600", desc: "IDE customization, debugging extensions, CLI integration" }
  ],
  competencies: [
    "Problem Solving",
    "Leadership",
    "Teamwork",
    "Communication",
    "Time Management",
    "Adaptability"
  ]
};

// Aliased for backwards compatibility in components
export const skillsData = {
  frontend: technicalSkills.frontend,
  backend: technicalSkills.backend,
  database: technicalSkills.database,
  programming: technicalSkills.programming,
  tools: technicalSkills.tools,
  aiml: technicalSkills.aiml
};

export const projectsData = [
  {
    id: "hr-management-system",
    title: "HR Management System",
    category: "MERN Stack Application",
    badge: "Full-Stack Enterprise",
    tagline: "Comprehensive employee records and organizational operations platform",
    description: "Built a full-stack HR management application using MongoDB, Express.js, React.js, and Node.js to manage employee records and HR operations.",
    features: [
      "Designed an admin dashboard enabling management of employee data, roles, and permissions, improving HR process efficiency",
      "Implemented RESTful APIs for seamless data operations between the frontend and backend",
      "Full CRUD operations for staff profiles, departments, and organizational structures",
      "Role-based authorization and secure session management"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/Dushyantkamboj/HR_Management-_System2",
    demo: "http://hr.54.253.99.131.nip.io/login",
    hasLiveDemo: true,
    fallbackColor: "from-violet-900/60 via-purple-900/40 to-slate-900"
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    category: "Full Stack Web App",
    badge: "Admin & Customer Panels",
    tagline: "Online shopping platform with separate Admin and Customer panels",
    description: "Developed a full-stack e-commerce application with separate Admin and Customer panels, featuring role-based authentication and authorization.",
    features: [
      "Separate Admin and Customer panels with distinct authorization boundaries",
      "Implemented product management, shopping cart, discounts, and coupon application",
      "Complete checkout flow, order management, and detailed purchase history",
      "Relational data modeling with MySQL and Sequelize ORM"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Sequelize", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Dushyantkamboj/Ecommerce-website",
    demo: "http://shop.54.253.99.131.nip.io/",
    hasLiveDemo: true,
    fallbackColor: "from-blue-900/60 via-cyan-900/40 to-slate-900"
  },
  {
    id: "ai-chatbot",
    title: "Groq-Powered AI Chatbot",
    category: "MERN Stack & AI",
    badge: "Groq LPU Inference",
    tagline: "Ultra-fast conversational AI chatbot powered by Groq API",
    description: "Developed a full-stack MERN AI chatbot powered by the Groq API high-speed inference engine, providing instant responses, context awareness, code generation, and chat history.",
    features: [
      "Sub-second AI inference responses utilizing high-throughput Groq API LPU integration",
      "Syntax-highlighted code generation with one-click clipboard copying and markdown parsing",
      "Conversational memory with multi-turn context retention and dynamic prompt templates",
      "Clean responsive chat interface with streaming simulation and pre-built prompt shortcuts"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API", "Tailwind CSS"],
    github: "https://github.com/Dushyantkamboj/AI-Chatbot",
    demo: "http://ai.54.253.99.131.nip.io/",
    hasLiveDemo: true,
    fallbackColor: "from-emerald-900/60 via-teal-900/40 to-slate-900"
  },
  {
    id: "password-manager",
    title: "Secure Password Manager",
    category: "React.js Web Application",
    badge: "Security & Credential Tool",
    tagline: "Client-side credential organizer and password security manager",
    description: "Developed a secure Password Manager application to store, manage, and organize user credentials in one place with a simple, user-friendly interface.",
    features: [
      "Store, manage, and organize credentials with categorized vaults",
      "Implemented features for adding, editing, deleting, and viewing saved passwords",
      "User-friendly intuitive UI with one-click credential copy and visibility toggles",
      "Responsive state management with instant search and filtering"
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Local Storage", "Responsive Design"],
    github: "https://github.com/Dushyantkamboj/Password-Manager",
    demo: "http://pass.54.253.99.131.nip.io/",
    hasLiveDemo: true,
    fallbackColor: "from-emerald-900/60 via-teal-900/40 to-slate-900"
  },
  {
    id: "ai-virtual-assistant",
    title: "AI Virtual Assistant",
    category: "Python & Automation",
    badge: "Voice & NLP Assistant",
    tagline: "Desktop voice assistant utilizing speech recognition and NLP",
    description: "Developed a voice-based AI virtual assistant using speech recognition and natural language processing to automate daily tasks.",
    features: [
      "Speech-to-text recognition and text-to-speech engine for natural voice interaction",
      "Natural language processing to parse intent and execute system automation",
      "Hands-free web search, application launch, and automated information retrieval",
      "Modular Python architecture for extensible custom skill plugins"
    ],
    techStack: ["Python", "Speech Recognition", "NLP", "Pyttsx3", "Automation"],
    github: "https://github.com/Dushyantkamboj",
    demo: "https://github.com/Dushyantkamboj",
    fallbackColor: "from-amber-900/60 via-orange-900/40 to-slate-900"
  },
  {
    id: "user-authentication-system",
    title: "User Authentication System",
    category: "Backend & Security",
    badge: "JWT & Bcrypt Security",
    tagline: "Robust backend auth service with access/refresh token rotation",
    description: "Developed a secure backend authentication system implementing JWT authentication and bcrypt password hashing with protected route endpoints.",
    features: [
      "Secure backend authentication implementing JWT authentication and bcrypt password hashing",
      "Built dual access/refresh token flow to ensure persistent yet secure sessions",
      "Implemented protected routes and custom middleware to secure API endpoints",
      "Rigorous error handling, password validation, and payload sanitization"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "REST API Design"],
    github: "https://github.com/Dushyantkamboj/User-Authentication-System",
    demo: "https://github.com/Dushyantkamboj",
    fallbackColor: "from-purple-900/60 via-indigo-900/40 to-slate-900"
  }
];

export const experienceEducation = [
  {
    type: "experience",
    title: "MERN Stack Development Trainee",
    organization: "TechGlock Software Solutions",
    period: "2/July/2026 – 30/September/2026",
    badge: "Industry Training (3 Months)",
    description: "Completed an intensive 3-month hands-on training program in MERN Stack development, covering MongoDB, Express.js, React.js, and Node.js.",
    highlights: [
      "Completed a 3-month hands-on training program in MERN Stack development, covering MongoDB, Express.js, React.js, and Node.js.",
      "Gained practical experience in RESTful API development, database design, and responsive UI implementation.",
      "Built confidence in independently researching and resolving technical issues during development."
    ]
  },
  {
    type: "education",
    title: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
    organization: "Haryana, India",
    period: "09/2022 – 07/2026",
    badge: "Undergraduate Degree",
    description: "Pursuing B.Tech in Computer Science Engineering with comprehensive coursework in software systems, algorithms, databases, and computer networks.",
    highlights: [
      "Rigorous core curriculum in Data Structures, Algorithms, Database Management, Operating Systems, and Networks.",
      "Hands-on project work in full-stack web architectures and software engineering methodologies.",
      "Active engagement in technical problem-solving and algorithmic challenges on LeetCode."
    ]
  },
  {
    type: "education",
    title: "Senior Secondary (Class 12th)",
    organization: "Haryana, India",
    period: "04/2020 – 05/2021",
    badge: "Score: 86%",
    description: "Completed Senior Secondary education with high academic achievement in science and mathematics.",
    highlights: [
      "Secured 86% aggregate score in Senior Secondary board examinations.",
      "Strong foundation in Mathematics, Physics, and logical problem solving."
    ]
  },
  {
    type: "education",
    title: "Secondary (Class 10th)",
    organization: "Haryana, India",
    period: "04/2018 – 05/2019",
    badge: "Score: 88%",
    description: "Completed Secondary School education with excellence across all core academic disciplines.",
    highlights: [
      "Secured 88% aggregate score in Secondary School board examinations.",
      "Demonstrated early academic excellence, discipline, and interest in technology."
    ]
  }
];

export const achievementsData = [
  {
    id: "leetcode",
    title: "LeetCode 150+ Problems & Badges",
    issuer: "LeetCode",
    description: "Solved 150+ Data Structures & Algorithms problems; earned both official 50-Day and 100-Day badges demonstrating relentless daily consistency and problem-solving prowess.",
    icon: "Code",
    stat: "150+",
    statLabel: "DSA Solved",
    highlight: "50-Day & 100-Day Badges",
    color: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400"
  },
  {
    id: "ncc",
    title: "National Cadet Corps (NCC) 'A', 'B' & 'C' Certificates",
    issuer: "National Cadet Corps (NCC)",
    description: "Awarded 'A', 'B', and 'C' Certificates with Grade B; demonstrated high leadership, discipline, resilience, and teamwork through national-level training camps.",
    icon: "ShieldCheck",
    stat: "Grade B",
    statLabel: "'A', 'B' & 'C' Certified",
    highlight: "National-Level Camps",
    color: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    id: "infosys-aiml",
    title: "AI & ML Training — Infosys Foundation",
    issuer: "Infosys Foundation",
    description: "Completed certified Artificial Intelligence & Machine Learning (AIML) training with Grade B; gained practical knowledge of AI concepts and Python-based ML.",
    icon: "Sparkles",
    stat: "Grade B",
    statLabel: "AIML Certified",
    highlight: "AI Concepts & Python ML",
    color: "from-cyan-500/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400"
  },
  {
    id: "techglock",
    title: "MERN Stack Industry Trainee",
    issuer: "TechGlock Software Solutions",
    description: "Completed 3 months hands-on professional training in full-stack MERN development, RESTful APIs, database design, and independent technical resolution.",
    icon: "Award",
    stat: "3 Months",
    statLabel: "MERN Certified",
    highlight: "Full-Stack Development",
    color: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400"
  }
];
