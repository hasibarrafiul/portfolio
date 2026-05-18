// Personal Information
export const personalInfo = {
  name: "Hasib Ar Rafiul Fahim",
  title: "Software Engineer",
  description: "I build production-grade SaaS and ERP systems. I also have a passion for game development and enjoy exploring it as a creative outlet.",
  location: "Tokyo, Japan"
};

// Skill Highlight Categories
export const skillCategories = [
  {
    title: 'Languages & Frameworks',
    items: ['JavaScript/TypeScript', 'Python', 'Java', 'React', 'Node.js', 'NestJS', 'Django', 'Spring Boot']
  },
  {
    title: 'Cloud & Infrastructure',
    items: ['Kubernetes (AKS)', 'Terraform', 'Docker', 'CI/CD', 'GitHub Actions', 'Argo CD']
  },
  {
    title: 'System Design',
    items: ['Microservices Architecture', 'Distributed Systems', 'Event-Driven Messaging', 'API Design', 'Caching', 'Scalability']
  },
  {
    title: 'Databases & Tools',
    items: ['PostgreSQL', 'MySQL', 'Git', 'Jest', 'Figma', 'Selenium', 'Cursor', 'Azure', 'Ollama', 'GitHub Copilot', 'Unity']
  }
];

// SYSystem Company
export const sysystemCompany = {
  name: "SYSystem Co. Ltd.",
  location: "Tokyo, Japan",
  role: "Software Engineer",
  period: "Aug 2023 - Present"
};

export const sysystemProjects = [
  {
    id: 3,
    title: "Hospital Management System (1,200+ Users)",
    tech: "React, Node.js, NestJS, PostgreSQL, CI/CD",
    highlights: [
      "Evaluated client requirements, made feasibility decisions, conducted code reviews, coordinated task distribution, and mentored new joiners to ensure on-time delivery and system stability in a Kanban-based Agile environment.",
      "Built a modular NestJS monorepo for public and internal APIs, defining service boundaries and database schemas, improving API response time by 35% through query optimization.",
      "Improved system stability and delivery speed by refactoring frontend and backend, fixing memory leaks (–40%), adding cached PDF generation, and using AI-assisted workflows (Claude) to accelerate development by 30%."
    ]
  },
  {
    id: 2,
    title: "Ammonia Tank IoT Inventory & HR Management Systems",
    tech: "React, Node.js, TypeScript, Docker, CI/CD, Kubernetes",
    highlights: [
      "Built dashboards with React to visualize IoT sensor data from ammonia tanks used in electricity generation for a major energy provider, collaborating with UX designer in Figma, replaced manual inventory tracking with status monitoring.",
      "Built Node.js APIs to process and validate IoT sensor data and enforce low-level threshold detection rules, implemented notifications using Azure Graph and deployed services via CI/CD pipelines on AKS for reliable zero-downtime releases.",
      "Decomposed a monolithic app into microservices, defining clear service boundaries to enable independent deployments and improve team delivery velocity by 40% while working with international teams in an Agile/Scrum environment.",
      "Implemented CI/CD pipelines for zero-downtime microservices releases and improved code quality through refactoring and TDD (Jest, Playwright), reducing production-blocking defects by 30%."
    ]
  },
  {
    id: 1,
    title: "Task Notification Automation System",
    tech: "Python, Selenium, Cron, WebDriver",
    highlights: [
      "Built a Python/Selenium automation system with cron-scheduled jobs to extract task data from Excel and internal sources, sending deadline alerts via Slack, Microsoft Teams, and LINE WORKS — eliminating manual tracking overhead."
    ]
  }
];

// SynapTech Company
export const synapTechCompany = {
  name: "SynapTech (Startup)",
  location: "Dhaka, Bangladesh",
  role: "Software Developer",
  period: "Jan 2022 - Jul 2023"
};

export const synapTechProjects = [
  {
    id: 2,
    title: "ERP & Ship Management System",
    tech: "React, Node.js, MySQL | Backend Team Lead",
    highlights: [
      "Took full ownership of an ERP & Ship Management System from 0 to 1, leading a backend team of 3, driving API design, system architecture, and deployment, while collaborating directly with stakeholders to ship inventory management and vessel-based logistics modules in a fast-paced startup environment."
    ]
  },
  {
    id: 1,
    title: "BSMARU E-diary",
    tech: "Android, Java, Servlet, MySQL",
    highlights: [
      "Built a university portal Android app with Java, integrating Spring Boot RESTful APIs and MySQL to manage student/teacher schedules, events, and announcements."
    ]
  }
];

// Personal Projects
export const personalProjectsInfo = {
  title: "Personal Projects"
};

export const personalProjects = [
  {
    id: 2,
    title: "Cloud-Native Microservices Platform",
    tech: "Python, Django, Terraform, Kubernetes, Argo CD",
    highlights: [
      "Built and deployed containerized Django microservices on Azure Kubernetes Service using Terraform for infrastructure provisioning and GitOps-based CI/CD (GitHub Actions + Argo CD) for automated, zero-downtime deployments.",
      "Implemented event-driven inter-service communication via RabbitMQ, JWT-based authentication, Horizontal Pod Autoscaling, and comprehensive monitoring with Prometheus/Grafana for production stability."
    ],
    github: "https://github.com/hasibarrafiul/k8s-ci-cd-django-microservices"
  },
  {
    id: 1,
    title: "Screen OCR & Translation Overlay",
    tech: "Python, WinRT, Tkinter, Google Translate",
    highlights: [
      "Built a lightweight always-on-top Windows overlay that captures any screen region, performs OCR via Windows native WinRT engine, and translates text in real time between English and Japanese.",
      "Designed a minimal floating UI (draggable mini-button → expandable panel) with per-pixel transparency, taskbar hiding, and cached screenshot re-processing; leveraged local LLMs via Ollama to accelerate development."
    ],
    github: "https://github.com/hasibarrafiul/screenTranslator-windows-python-OCR"
  }
];

// Education, Certifications & Languages (Page 6)
export const educationInfo = {
  title: "Education & Certifications"
};

export const educationData = [
  {
    id: 1,
    degree: "BSc in Computer Science and Engineering",
    institution: "East West University",
    year: "2022",
    specialization: "Major: Software Engineering; AI & Data Science"
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "MetLife Hackathon (Tokyo)",
    achievement: "1st Place",
    date: "Feb 2026"
  },
  {
    id: 2,
    title: "ITEE FE Certification",
    achievement: "Full Passer",
    date: "Apr 2022"
  }
];

export const languagesData = [
  { id: 1, language: "Bangla", proficiency: "Native" },
  { id: 2, language: "English", proficiency: "Business Level" },
  { id: 3, language: "Japanese", proficiency: "Conversational Level" },
  { id: 4, language: "Hindi", proficiency: "Fluent" }
];

export const publicationsData = [
  {
    id: 1,
    title: "Augmented Reality and Virtual Reality in learning Solar System",
    institution: "East West University",
    date: "Dec 12, 2022",
    description: "The purpose of this study was to determine how well-augmented reality and virtual reality technology may improve the comprehension of the solar system among elementary school children. Twenty students were divided into two groups, one for conventional classroom instruction and the other for augmented reality and virtual reality. In contrast to the augmented reality and virtual reality group, which utilized two apps to engage in interactive solar system exploration, the traditional group got classroom instruction using textbooks. Both Unity and Unreal engine were used to create the applications. To gauge students' understanding of the solar system, pre-and post-tests were given; meanwhile, a survey was employed to gauge their interest in the subject. The outcomes revealed that when compared to the traditional group, the augmented reality and virtual reality groups had significantly higher post-test scores and indicated better levels of engagement. The study emphasizes how augmented reality and virtual reality technologies might improve students' scientific learning outcomes and motivation.",
    url: "http://dspace.ewubd.edu:8080/handle/123456789/4349"
  },
  {
    id: 2,
    title: "A Sustainable E-Waste Management System for Bangladesh",
    institution: "Springer Link",
    date: "Sep 1, 2022",
    description: "The rapid rise in e-waste in Bangladesh, due to inadequate infrastructure and policies, poses environmental risks, necessitating sustainable management solutions and better policy enforcement.",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-34622-4_58?fbclid=IwAR01k_cp0KYsgoXCWUXZeMUiuAOOiEhyjFvJ7rfTc3su8ENQIQmbBocZidE"
  }
];

// Social Links (Page 7)
export const contactLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/hasibarrafiul',
    icon: 'github'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hasibarrafiul/',
    icon: 'linkedin'
  },
  {
    id: 'stackoverflow',
    label: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/10941617/hasib-ar-rafiul-fahim',
    icon: 'stackoverflow'
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:hasibarrafiulfahim@gmail.com',
    icon: 'email'
  }
];