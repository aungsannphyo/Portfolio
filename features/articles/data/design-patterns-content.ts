import DSImage from "@/public/language-image/ds.jpg"
import { Article } from "../types/article-type";
import { ContentSubCategoryEnum, ContentCategoryEnum } from "@/enum/category-enum";

const behavioral: Array<Article> = [
    {
        sectionTitle: "Observer Pattern",
        slug: "observer-pattern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "behavioral-patterns",
        markdown: "observer.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.BE_PATTERNS,
        imageUrl: DSImage
    },
    {
        sectionTitle: "Chain Of Responsibility Pattern",
        slug: "chain-of-responsibility",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "behavioral-patterns",
        markdown: "chain-of-responsibility.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.BE_PATTERNS,
        imageUrl: DSImage
    },
    {
        sectionTitle: "Strategy Pattern",
        slug: "strategy-pattern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "behavioral-patterns",
        markdown: "strategy-pattern.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.BE_PATTERNS,
        imageUrl: DSImage
    },
]

const creational: Array<Article> = [
    {
        sectionTitle: "Singleton Pattern",
        slug: "singleton-pattern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "creational-patterns",
        markdown: "singleton-pattern.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.CE_PATTERNS,
        imageUrl: DSImage
    }, {
        sectionTitle: "Builder Pattern",
        slug: "builder-pattern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "creational-patterns",
        markdown: "builder-pattern.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.CE_PATTERNS,
        imageUrl: DSImage
    },

    {
        sectionTitle: "Factory Method",
        slug: "factory-method",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "creational-patterns",
        markdown: "factory-method.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.CE_PATTERNS,
        imageUrl: DSImage
    },]

const structural: Array<Article> = [
    {
        sectionTitle: "Adapter Pattern",
        slug: "adapter-patern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "structural-patterns",
        markdown: "adapter-pattern.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.ST_PATTENRS,
        imageUrl: DSImage
    },
    {
        sectionTitle: "Decorator Pattern",
        slug: "decoratio-patern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "structural-patterns",
        markdown: "decorator-pattern.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.ST_PATTENRS,
        imageUrl: DSImage
    },
    {
        sectionTitle: "Proxy Pattern",
        slug: "proxy-patern",
        user: "aungsannphyo",
        repo: "design-pattern",
        branch: "master",
        path: "structural-patterns",
        markdown: "proxy-pattern.md",
        categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
        subCategoryKey: ContentSubCategoryEnum.ST_PATTENRS,
        imageUrl: DSImage
    },
]

const solid: Array<Article> = [{
    sectionTitle: "Single Responsibility Principle ( SRP )",
    slug: "single-responsibility-principle",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "solid",
    markdown: "1-Single-Responsibility-Principle-(SRP).md",
    categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
    subCategoryKey: ContentSubCategoryEnum.SOLID,
    imageUrl: DSImage
},
{
    sectionTitle: "Open/Close Principle",
    slug: "open-close-principle",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "solid",
    markdown: "2-OpenClose-Principle.md",
    categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
    subCategoryKey: ContentSubCategoryEnum.SOLID,
    imageUrl: DSImage
},
{
    sectionTitle: "Liskov Substitution Principle",
    slug: "liskov-substitution-principle",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "solid",
    markdown: "3-Liskov-Substitution-Principle.md",
    categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
    subCategoryKey: ContentSubCategoryEnum.SOLID,
    imageUrl: DSImage
},
{
    sectionTitle: "Interface Segregation Principle",
    slug: "interface-segregation-principle",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "solid",
    markdown: "4-Interface-Segregation-Principle.md",
    categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
    subCategoryKey: ContentSubCategoryEnum.SOLID,
    imageUrl: DSImage
},
{
    sectionTitle: "Dependency Inversion Principle",
    slug: "dependency-inversion-principle",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "solid",
    markdown: "5-Dependency-Inversion-Principle.md",
    categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
    subCategoryKey: ContentSubCategoryEnum.SOLID,
    imageUrl: DSImage
},]


const other: Array<Article> = [{
    sectionTitle: "Composition Over Inheritance",
    slug: "composition-over-inheritance",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "",
    markdown: "composition-over-inheritance.md",
    categoryKey: ContentCategoryEnum.DESIGN_PATTERNS,
    subCategoryKey: ContentSubCategoryEnum.OTHER,
    imageUrl: DSImage
}]

export const designPatternArticle: Array<Article> = [
    ...other,
    ...behavioral,
    ...creational,
    ...structural,
    ...solid
]

