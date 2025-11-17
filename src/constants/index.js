export const servicesData = [
  {
    title: "Python Backend Development",
    description: "Through my one-year further education as a Python Backend Developer, I develop scalable backend systems and web APIs with focus on clean architecture and modern technologies.",
    items: [
      {
        title: "Backend Engineering",
        description: "(Django, Python, REST APIs, Database Design)",
      },
      {
        title: "API Development & Integration",
        description: "(External APIs, Data Processing, System Integration)",
      },
      {
        title: "Database Management",
        description: "(PostgreSQL, Data Modeling, Optimization)",
      },
    ],
  },
  {
    title: "FullStack Web Development",
    description: "I develop complete web applications with modern technologies - from database to user interface for a seamless user experience.",
    items: [
      {
        title: "Frontend Development",
        description: "(HTML5, CSS3, JavaScript, Bootstrap)",
      },
      {
        title: "Web Frameworks",
        description: "(Django, Responsive Design, Cross-Browser)",
      },
      {
        title: "Deployment & Hosting",
        description: "(Heroku, AWS S3, Cloud Deployment)",
      },
    ],
  },
  {
    title: "BIM Automation & Revit Scripting",
    description: "As a technical systems planner with an electrical engineering background, I develop Python scripts for Revit to automate BIM processes and efficient data processing.",
    items: [
      {
        title: "PyRevit Scripting",
        description: "(BIM Process Automation, Revit API)",
      },
      {
        title: "Data Export & Processing",
        description: "(CSV, Excel, Data Preparation)",
      },
      {
        title: "Electrical Components",
        description: "(Filtering, Documentation, Analysis)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description: "I deploy applications professionally in the cloud and ensure smooth operations through modern DevOps practices and task management.",
    items: [
      {
        title: "Cloud Deployment",
        description: "(Heroku, Neon, Amazon S3)",
      },
      {
        title: "Database as a Service",
        description: "(PostgreSQL with Neon, Data Management)",
      },
      {
        title: "Task Management",
        description: "(Celery, Redis, Background Processing)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Portwise - Portfolio Management",
    description: "A FullStack web application for managing investment portfolios with automatic stock price updates and PDF import functionality. Focus on external API integration and backend development.",
    href: "https://github.com/FabianDev3006/Portwise",
    image: "/assets/projects/Portwise.jpg",
    bgImage: "/assets/background/portwise.jpg",
    frameworks: [
      { id: 1, name: "Django" },
      { id: 2, name: "Python" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "JavaScript" },
      { id: 5, name: "Bootstrap" },
    ],
  },
  {
    id: 2,
    name: "Revit BIM Automation",
    description: "Python scripts for Revit to automatically filter and process electrical components in building models. Export to CSV/TXT and Excel files with data formatting.",
    href: "https://github.com/FabianDev3006/BIM-Project-Revit",
    image: "/assets/projects/BIM.png",
    bgImage: "/assets/backgrounds/BMI background.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "PyRevit" },
      { id: 3, name: "Revit API" },
      { id: 4, name: "CSV/Excel" },
    ],
  },
  {
    id: 3,
    name: "Command-Line-Quiz",
    description: "A command-line based quiz game built with Python and PostgreSQL. Players can register, login, and test their knowledge by answering randomly selected questions from a database.",
    href: "https://github.com/FabianDev3006/command-line-quiz-db",
    image: "/assets/projects/CommandLine.png",
    bgImage: "/assets/backgrounds/quiz background.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Database" },
      { id: 4, name: "UserLogin" },
    ],
  },
  {
    id: 4,
    name: "Discord Bot - Chat Police",
    description: "A Discord bot developed in Python that controls the chat by deleting messages containing forbidden words and issuing warnings to users. It uses regex for word detection.",
    href: "https://github.com/FabianDev3006/Discord-Bot",
    image: "/assets/projects/Discord.png",
    bgImage: "/assets/backgrounds/Discord bot background.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "RegEx" },
      { id: 3, name: "Discord API" },
      { id: 4, name: "" },
    ],
  },
  

];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fabian-thamm-442758376" },
  { name: "GitHub", href: "https://github.com/FabianDev3006" },
];