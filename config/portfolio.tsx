export const portfolioConfig = {
  name: "Nguyễn Phú Huy",
  role: "Fullstack Developer",
  bio: "Full-stack Developer with 2 years of experience developing web applications using ReactJS, Java, and Spring Boot. Experienced in building responsive frontend systems, developing RESTful APIs, and optimizing SQL queries.",
  about:
    "Là Full-stack Developer tại FPT Software, tôi đã tham gia phát triển các ứng dụng web doanh nghiệp cho quản lý sản xuất thông minh, hệ thống cấp phép lao động và nền tảng đánh giá kỹ năng nội bộ. Kinh nghiệm xây dựng frontend scalable, backend APIs và tối ưu database performance.",
  skills: [
    { name: "ReactJS", icon: "⚛️" },
    { name: "NextJS", icon: "▲" },
    { name: "Redux/Zustand", icon: "🔄" },
    { name: "NodeJS", icon: "🟢" },
    { name: "Java Spring Boot", icon: "☕" },
    { name: "Spring Security", icon: "🔐" },
    { name: "JPA/Hibernate", icon: "🗃️" },
    { name: "Redis", icon: "🔴" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS (S3, EC2)", icon: "☁️" },
    { name: "Git", icon: "📦" },
  ],
  projects: [
    {
      title: "OP51 - Work Permit Management",
      description:
        "A dedicated management system for factory work permits in South Korea. The platform digitizes and streamlines the approval process, monitors permit validity, and ensures strict safety compliance within industrial environments.",
      techStack: ["ReactJS", "Zustand", "Spring Boot 3", "SQL Server", "Redis"],
      impact: "Optimized SQL queries ~8x faster (1634s→213s) on datasets of ~500K records. Built reusable component library for maintainability.",
      role: "Fullstack Developer",
      image: "/projects/op51.png",
      github: null,
      live: null,
    },
    {
      title: "IFacts - Smart Factory Management",
      description:
        "A web-based platform designed to digitize manufacturing processes. Provides real-time monitoring, data visualization, and automated workflows through interactive dashboards and production analytics.",
      techStack: ["ReactJS", "Zustand", "Java 17", "Spring Boot 3", "Redis", "WebSocket"],
      impact: "Led migration from legacy to ReactJS, refactored 30+ screens. Integrated Redis caching reducing API response time significantly.",
      role: "Fullstack Developer",
      image: "/projects/ifacts.png",
      github: null,
      live: null,
    },
    {
      title: "Skill Assessment Platform",
      description:
        "An internal project designed to assess and evaluate the programming skills of new FPT Software employees, with AI-based automatic generation of skill assessment questions.",
      techStack: ["NextJS", "Redux", "Ant Design", "Java Spring Boot", "PostgreSQL"],
      impact: "Developed 20+ responsive screens reducing page load by ~25%. Built 15+ RESTful APIs. Reduced deployment issues by ~40% via GitLab CI/CD.",
      role: "Fullstack Developer",
      image: "/projects/skill-assessment.png",
      github: null,
      live: null,
    },
  ],
  experience: [
    {
      title: "Fullstack Developer",
      company: "FPT Software",
      period: "04/2024 - 05/2026",
      description:
        "Worked as a Full-stack Developer at FPT Software, contributing to enterprise web applications for manufacturing management, work permit systems, and internal assessment platforms using ReactJS, Java, and Spring Boot.",
      highlights: [
        "Optimized complex SQL queries, stored procedures, and indexing strategies on SQL Server, achieving ~8x faster execution (1634s down to 213s) on datasets of ~500K records",
        "Led migration of frontend codebase from legacy structures to ReactJS (Functional Components & Hooks), refactoring 30+ screens to improve maintainability and rendering performance",
        "Developed and optimized Wijmo dashboards and data grids integrated with ReactJS for real-time manufacturing data",
        "Built and maintained 15+ RESTful APIs with Java Spring Boot 3 for authentication, user management, test submissions, and AI-generated question management",
        "Collaborated in a 5-member agile team using GitLab for version control, merge requests, and CI/CD workflows, reducing deployment and integration issues by ~40%",
        "Developed 20+ responsive frontend screens using NextJS and Ant Design, reducing page loading time by ~25%",
      ],
    },
  ],
  education: {
    degree: "Software Engineering",
    school: "Hanoi University of Industry",
    period: "10/2020 - 06/2024",
    gpa: 3.27,
  },
  socials: {
    github: "https://github.com/nguyenphuhuy0405",
    linkedin: "https://www.linkedin.com/in/nguyen-phu-huy/",
    email: "nguyenphuhuybgg@gmail.com",
  },
};