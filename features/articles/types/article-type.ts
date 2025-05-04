import { StaticImageData } from "next/image"


export type Article = {
    sectionTitle: string
    slug: string
    categoryKey: string
    subCategoryKey?: string
    imageUrl: StaticImageData
    user: string
    repo: string
    branch: string
    path: string
    markdown: string
}
