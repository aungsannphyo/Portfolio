import ImminLogo from "@/public/companys/imminsg_logo.jpeg"
import PicoLogo from "@/public/companys/pico_logo.jpeg"
import MHSLogo from "@/public/companys/myanmar_high_society_logo.jpeg"
import { About, Company, ContactLink, Summary } from "../types/about-type"

export const summary: Summary = {
    firstSummary: `Hi, I'm a Software Engineer who loves turning ideas 
    into real-world applications. I specialize in front-end development 
    with React and mobile app development using React Native and Flutter. 
    On the backend, I build scalable APIs and systems with Node.js, Java, and Golang.`,
    secondSummary: `I believe great software is a blend of performance, 
    simplicity, and user delight. I enjoy tackling tough problems, 
    learning new technologies, and collaborating with teams that push the limits of what’s possible. 
    Let's build something amazing together!`
}

export const me: About = {
    role: "Software Engineer",
    university: "University of Computer Studies, Mandalay",
    bachelor: " Bachelor of Computer Science – B.C.Sc"

}

export const contactLink: ContactLink = {
    github: "https://github.com/aungsannphyo",
    linkedin: "https://www.linkedin.com/in/aung-sann-phyo-56ab4718b/",
    telegram: "https://t.me/asphyo",
    discord: "https://discord.com/users/650934875528101911"
}

export const experience: Array<Company> = [
    {
        name: "Immin",
        role: "Software Engineer",
        duration: "Aug 2021 - Present",
        jobType: "Full-Time ( Remote )",
        location: "Singapore",
        image: ImminLogo,
        responsibilities: [
            "Designing and developing responsive web interfaces using modern frontend frameworks.",
            "Implementing scalable backend APIs and services.",
            "Building and maintaining cross-platform mobile applications.",
            "Collaborating with cross-functional teams to deliver high-quality software products."
        ],
        skills: ["Docker", "React Native", "React.js",
            "GraphQL", "RestApi", "JavaScript", " Flutter ", "Java",
            " Node.js", "English as a Second Language (ESL)",
            "Python (Programming Language)"]
    },
    {
        name: "Myanmar High Society",
        role: "Web Developer",
        duration: "Dec 2020 - Aug 2021",
        location: "Yangon, Myanmar",
        jobType: "Full-time ( On-site )",
        image: MHSLogo,
        responsibilities: [
            "Developing modern, responsive user interfaces using frameworks like (React, TypeScript, Tailwind CSS)",
            "Translating UI/UX designs into high-quality code with attention to performance and accessibility.",
            "Integrating RESTful APIs and working closely with backend engineers to ensure seamless data flow.",
            "Ensuring cross-browser compatibility and mobile responsiveness.",
            "Optimizing frontend performance and maintaining reusable component libraries.",
            "Contributing to backend APIs and mobile features when needed to support full-stack requirements."
        ],
        skills: ["Docker", "React Native", "React.js", "RestApi", "Tailwind CSS"]
    },
    {
        name: "Pico Innovation",
        role: "Web Developer",
        duration: "Apr 2019 - May 2020",
        location: "Mandalay, Myanmar",
        jobType: "Full-time ( On-site )",
        image: PicoLogo,
        responsibilities: [
            "Developing intuitive and responsive user interfaces using modern frontend technologies (React, TypeScript, Tailwind CSS).",
            "Collaborating with UI/UX designers to bring mockups and prototypes to life with pixel-perfect precision.",
            "Implementing and maintaining scalable backend APIs using Laravel and database systems (MySql, MongoDB).",
            "Ensuring high performance, accessibility, and cross-browser compatibility across devices.",
            "Writing clean, maintainable, and testable code following best practices and design patterns.",
            "Integrating RESTful and ensuring seamless frontend-backend communication."
        ],
        skills: ["Docker", "Laravel", "React.js", "RestApi", "Tailwind css"]
    },
]


