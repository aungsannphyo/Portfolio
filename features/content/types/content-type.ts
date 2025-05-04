
export type ContentSubCategory = {
    subtitle: string,
    subCategoryKey: string;
}

export type ContentCategory = {
    id: number
    categoryKey: string
    category: string
    subCategoryKeyList?: ContentSubCategory[];
}