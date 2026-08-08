export const experience = [
    {
        company: "Dalhousie University",
        position: "Web Developer Intern",
        location: "Halifax, NS",
        duration: "Jun - Aug 2024",
        image: "/logos/logo_dal.png",
        description: "Built responsive, accessible interfaces with bilingual support.",
        stack: ["JavaScript", "React", "Sass", "Framer Motion", "i18n"],
        active: false
    },
    {
        company: "Dalhousie University",
        position: "Undergraduate Teaching Assistant",
        location: "Halifax, NS",
        duration: "Sep 2024 - May 2025",
        image: "/logos/logo_dal.png",
        description: "Taught intro programming, computer science and web development.",
        stack: ["Java", "JavaScript"],
        active: false
    },
    {
        company: "SpryPoint",
        position: "Software Engineer Intern",
        location: "Charlottetown, PEI (Remote)",
        duration: "May - Aug 2025",
        image: "/logos/logo_sprypoint.png",
        description: "Built a Java PDF reporting system used by 5 water utilities.",
        stack: ["Java", "JavaScript", "Play Framework", "KnockoutJS", "jQuery"],
        active: false
    },
    {
        company: "PRAXES Medical Group",
        position: "Full-Stack Software Engineer Intern",
        location: "Halifax, NS",
        duration: "Jan 2026 - Apr 2026",
        image: "/logos/logo_praxes.jpg",
        description: "Migrated legacy admin systems to a multi-tenant Go/Vue stack.",
        stack: ["Go", "TypeScript", "Vue.js", "PostgreSQL"],
        active: false
    }
]

export const stack = {
    'Languages': ["Java", "Go", "JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML", "CSS"],
    'Frameworks/Libraries': ["React", "Vue.js", "Node.js", "Express.js", "Gin", "Astro", "Knockout.js", "jQuery"],
    'Cloud/Infra': ["Docker", "Amazon Web Services", "Google Cloud Platform", "Terraform"],
    'Dev Tools': ["Git", "GitHub", "MySQL", "PostgreSQL", "Postman", "Jira"]
};

export const projects = [
    {
        name: "My Turn",
        description: "Real-time meeting participation analyzer",
        stack : ["Python", "Flask", "WhisperX", "React", "Docker"],
        github: "https://github.com/niaxidos/MyTurn"
    },
    {
        name: "Women in Technology Society Bulletin Board",
        description: "Interactive web app for sharing self-drawn portraits and bios at a society expo",
        stack: ["React", "Supabase"],
        github: "https://github.com/phuongwj/wits-bulletin-board"
    },
    {
        name: "Medical AI Assistant",
        description: "Lightweight Retrieval-Augmented Generation FAQ chatbot for reducing clinician administrative burden in medical centres",
        stack: ["AWS EBS, VPC, S3, RDS", "Gemini", "HTML/CSS", "Node.js", "Express.js"],
        github: "https://github.com/phuongwj/medical-ai-assistant"
    },
    {
        name: "Dalhousie Syllabus Database",
        description: "Browse, search, and contribute Dalhousie's course syllabi",
        stack: ["AWS S3, CloudFront", "Gin", "Astro", "React"],
        github: "https://github.com/phuongwj/dal-syllabus-db"
    }
]