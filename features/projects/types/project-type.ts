import { StaticImageData } from "next/image"


export type Project = {
    title: string
    summary: string
    responsibilities: Array<string>
    techStack: Array<string>
    image: StaticImageData
    link: string
}