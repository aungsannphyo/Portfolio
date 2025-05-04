import { StaticImageData } from "next/image"

export type About = {
    role: string
    university: string
    bachelor: string
}

export type Summary = {
    firstSummary: string
    secondSummary: string
}

export type ContactLink = {
    github: string
    linkedin: string
    telegram: string
    discord: string
}



export type Company = {
    name: string
    role: string
    duration: string
    jobType: string
    location: string
    image: StaticImageData
    responsibilities: Array<string>
    skills: Array<string>
}