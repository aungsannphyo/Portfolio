import { ContentCategoryEnum, ContentSubCategoryEnum } from "@/enum/category-enum"
import { ContentCategory, ContentSubCategory } from "../types/content-type"



const contentSubCategories: ContentSubCategory[] = [
    {
        subtitle: "Behavioral Patterns",
        subCategoryKey: ContentSubCategoryEnum.BE_PATTERNS
    },
    {
        subtitle: "Creational Patterns",
        subCategoryKey: ContentSubCategoryEnum.CE_PATTERNS
    },
    {
        subtitle: "SOLID",
        subCategoryKey: ContentSubCategoryEnum.SOLID
    },
    {
        subtitle: "Structural Patterns",
        subCategoryKey: ContentSubCategoryEnum.ST_PATTENRS
    },
    {
        subtitle: "Other",
        subCategoryKey: ContentSubCategoryEnum.OTHER
    }
]

export const contentCategories: Array<ContentCategory> = [
    {
        id: 1001,
        category: "Introduction to ES6",
        categoryKey: ContentCategoryEnum.ES6
    },
    {
        id: 2002,
        category: "Design Patterns",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKeyList: contentSubCategories
    },
]



