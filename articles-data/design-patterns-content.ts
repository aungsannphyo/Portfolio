import { BE_PATTERNS, CE_PATTERNS, DESIGN_PATTERNS, OTHER, SOLID, ST_PATTENRS } from "../type/articles/content";
import { Article } from "../type/articles/content-type";
import DSImage from "@/public/language-image/ds.jpg"

const behavioral: Array<Article> = [{
    sectionTitle: "Chain Of Responsibility",
    slug: "chain-of-responsibility",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "behavioral-patterns",
    markdown: "chain-of-responsibility.md",
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: BE_PATTERNS,
    imageUrl: DSImage
},]

const creational: Array<Article> = [{
    sectionTitle: "Singleton Pattern",
    slug: "singleton-pattern",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "creational-patterns",
    markdown: "singleton-pattern.md",
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: CE_PATTERNS,
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
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: CE_PATTERNS,
    imageUrl: DSImage
},]

const structural: Array<Article> = [{
    sectionTitle: "Adapter Pattern",
    slug: "adapter-patern",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "structural-patterns",
    markdown: "adapter-pattern.md",
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: ST_PATTENRS,
    imageUrl: DSImage
},]

const solid: Array<Article> = [{
    sectionTitle: "Single Responsibility Principle ( SRP )",
    slug: "single-responsibility-principle",
    user: "aungsannphyo",
    repo: "design-pattern",
    branch: "master",
    path: "solid",
    markdown: "1-Single-Responsibility-Principle-(SRP).md",
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: SOLID,
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
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: SOLID,
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
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: SOLID,
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
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: SOLID,
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
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: SOLID,
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
    categoryKey: DESIGN_PATTERNS,
    subCategoryKey: OTHER,
    imageUrl: DSImage
}]

export const designPatternArticle: Array<Article> = [
    ...other,
    ...behavioral,
    ...creational,
    ...structural,
    ...solid
]

