import { ContentCategoryEnum, DesignPatternSubCategories, DataStructureAndAlgorithmsSubCategories } from "@/enum/category-enum"
import { ContentCategory, ContentSubCategory } from "../types/content-type"



const designPatternSubCategories: ContentSubCategory[] = [
    {
        subtitle: "Behavioral Patterns",
        subCategoryKey: DesignPatternSubCategories.BE_PATTERNS
    },
    {
        subtitle: "Creational Patterns",
        subCategoryKey: DesignPatternSubCategories.CE_PATTERNS
    },
    {
        subtitle: "SOLID",
        subCategoryKey: DesignPatternSubCategories.SOLID
    },
    {
        subtitle: "Structural Patterns",
        subCategoryKey: DesignPatternSubCategories.ST_PATTENRS
    },
    {
        subtitle: "Other",
        subCategoryKey: DesignPatternSubCategories.OTHER
    }
]


const dataStructureAndAlgorithmsSubCategories: ContentSubCategory[] = [
    {
        subtitle: "Introduction",
        subCategoryKey: DataStructureAndAlgorithmsSubCategories.INTRODUCTION
    },
    {
        subtitle: "Numbering System",
        subCategoryKey: DataStructureAndAlgorithmsSubCategories.NUMBERING_SYSTEM
    },
    {
        subtitle: "Boolean Algebra",
        subCategoryKey: DataStructureAndAlgorithmsSubCategories.BOOLEAN_ALGEBRA
    },
    {
        subtitle: "Data Structure And Algorithm",
        subCategoryKey: DataStructureAndAlgorithmsSubCategories.DATA_STRUCTURE_ALGORITHM
    },
    {
        subtitle: "Control Flow and Flow Chart",
        subCategoryKey: DataStructureAndAlgorithmsSubCategories.CONTROL_FLOW_CHART
    },
]



export const contentCategories: Array<ContentCategory> = [
    {
        id: 1001,
        category: "Design Patterns",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKeyList: designPatternSubCategories
    },
    {
        id: 2002,
        category: "Data Structure And Algorithms",
        categoryKey: ContentCategoryEnum.DS_AND_ALGO,
        subCategoryKeyList: dataStructureAndAlgorithmsSubCategories
    },
    {
        id: 3003,
        category: "Introduction to ES6",
        categoryKey: ContentCategoryEnum.ES6
    },

]



