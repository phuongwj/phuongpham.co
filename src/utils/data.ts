export const techColors: Record<string, string> = {
    "Java": "#F89820",
    "JavaScript": "#F7DF1E",
    "TypeScript": "#3178C6",
    "React": "#61DAFB",
    "Vue.js": "#42B883",
    "Go": "#00ADD8",
    "PostgreSQL": "#4169E1",
    "Sass": "#CC6699",
    "Framer Motion": "#E040FB",
    "i18n": "#8BC34A",
    "Play Framework": "#93D500",
    "KnockoutJS": "#E42E16",
    "jQuery": "#0769AD",
    "Spring": "#6DB33F",
    "Docker": "#2496ED",
};

export const experience = [
    {
        company: "Dalhousie University",
        position: "Web Developer Intern",
        duration: "6/2024 - 8/2024",
        image: "/logos/logo_dal.png",
        description: "Developed responsive, accessible web interfaces with bilingual support",
        stack: ["JavaScript", "React", "Sass", "Framer Motion", "i18n"]
    },
    {
        company: "Dalhousie University",
        position: "Undergraduate Teaching Assistant",
        duration: "9/2024 - 5/2025",
        image: "/logos/logo_dal.png",
        description: "Intro to Computer Programming (CSCI 1105), Computer Science (CSCI 1110), Web Development (CSCI 1170)",
        stack: ["Java", "JavaScript"]
    },
    {
        company: "SpryPoint",
        position: "Software Developer Intern",
        duration: "5/2025 - 8/2025",
        image: "/logos/logo_sprypoint.png",
        description: "Built and maintained PDF report generation for water utilities",
        stack: ["Java", "JavaScript", "Play Framework", "KnockoutJS", "jQuery"]
    },
    {
        company: "PRAXES Medical Group",
        position: "Full-Stack Developer Intern",
        duration: "1/2026 - Present",
        image: "/logos/logo_praxes.jpg",
        description: "Built modular backend APIs for legacy codebase migration",
        stack: ["Go", "TypeScript", "Vue.js", "PostgreSQL"]
    }
]

export const stack = {
    'languages': ["Java", "Go", "JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML/CSS"],
    'frameworks/libraries': ["React", "Vue.js", "Astro", "Gin", "Node.js", "Express.js"],
    'devops/cloud': ["Docker", "GCP", "AWS", "Terraform"],
    'developer tools': ["Git", "GitHub", "PostgreSQL", "MySQL"]
};

export const projects = [
    {
        name: "My Turn",
        description: "Real-time meeting participation analyzer",
        image: "/placeholder.jpg",
        stack : ["Python", "Flask", "WhisperX", "React", "Docker"],
        github: "https://github.com/niaxidos/MyTurn"
    },
    {
        name: "Women in Technology Society Bulletin Board",
        description: "Interactive web app for sharing self-drawn portraits and bios at a society expo",
        image: "/placeholder.jpg",
        stack: ["React", "Supabase"],
        github: "https://github.com/phuongwj/wits-bulletin-board"
    },
    {
        name: "Dalhousie Microwaves",
        description: "Find, rate, and explore Dalhousie's campus microwaves",
        image: "/placeholder.jpg",
        stack: ["React", "Node.js", "Express.js"],
        github: "https://github.com/phuongwj/dal-microwaves"
    },
    {
        name: "Dalhousie Syllabi Database",
        description: "Browse, search, and contribute Dalhousie course syllabi",
        image: "/placeholder.jpg",
        stack: ["AWS S3", "Gin", "Astro", "React"],
        github: "https://github.com/phuongwj/dal-syllabus-db"
    }
]