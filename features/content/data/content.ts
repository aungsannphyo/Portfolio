import { BE_PATTERNS, CE_PATTERNS, DESIGN_PATTERNS, ES6, OTHER, SOLID, ST_PATTENRS } from "@/type/type"
import { ContentCategory, ContentSubCategory } from "../types/content-type"



const contentSubCategories: ContentSubCategory[] = [
    {
        subtitle: "Behavioral Patterns",
        subCategoryKey: BE_PATTERNS
    },
    {
        subtitle: "Creational Patterns",
        subCategoryKey: CE_PATTERNS
    },
    {
        subtitle: "SOLID",
        subCategoryKey: SOLID
    },
    {
        subtitle: "Structural Patterns",
        subCategoryKey: ST_PATTENRS
    },
    {
        subtitle: "Other",
        subCategoryKey: OTHER
    }
]

export const contentCategories: Array<ContentCategory> = [
    {
        id: 1001,
        category: "Introduction to ES6",
        categoryKey: ES6
    },
    {
        id: 2002,
        category: "Design Patterns",
        categoryKey: DESIGN_PATTERNS,
        subCategoryKeyList: contentSubCategories
    },
]



