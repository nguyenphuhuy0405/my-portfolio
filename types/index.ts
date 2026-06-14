export interface Skill {
    name: string;
    icon: string;
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    impact: string;
    role: string;
    image: string;
    github: string | null;
    live: string | null;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    gpa: number;
}

export interface Socials {
    github: string;
    linkedin: string;
    email: string;
}

export interface PortfolioConfig {
    name: string;
    role: string;
    bio: string;
    about: string;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    education: Education;
    socials: Socials;
}