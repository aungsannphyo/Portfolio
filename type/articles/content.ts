import { ContentCategory, ContentSubCategory } from "./content-type"

export const ES6 = "es6"
export const DESIGN_PATTERNS = "design_patterns"

//content subtitle fro sub key
export const OTHER = "other"
export const BE_PATTERNS = "behavioral_patterns"
export const CE_PATTERNS = "creational_patterns"
export const SOLID = "solid"


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



