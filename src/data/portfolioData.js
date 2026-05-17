// Personal Information
export const personalInfo = {
  name: "Hasib Ar Rafiul Fahim",
  title: "Software Engineer and Game Programmer",
  description: "I am passionate about software engineering and game programming. I love creating games and solving problems.",
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
    github: "GITHUB"
  },
  {
    id: 1,
    title: "Screen OCR & Translation Overlay",
    tech: "Python, WinRT, Tkinter, Google Translate",
    highlights: [
      "Built a lightweight always-on-top Windows overlay that captures any screen region, performs OCR via Windows native WinRT engine, and translates text in real time between English and Japanese.",
      "Designed a minimal floating UI (draggable mini-button → expandable panel) with per-pixel transparency, taskbar hiding, and cached screenshot re-processing; leveraged local LLMs via Ollama to accelerate development."
    ],
    github: "GITHUB"
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