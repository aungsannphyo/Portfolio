import { dsAndAlgoArticle } from "@/features/articles/data/data-structure-and-algorithms"
import { designPatternArticle } from "@/features/articles/data/design-patterns-content"
import { es6Article } from "@/features/articles/data/es6-content"
import { Article } from "@/features/articles/types/article-type"



interface ContentHandler {
    handle(categoryKey: string, subCategoryKey?: string): Array<Article>
}

//Main business logic
class ES6ContentHandler implements ContentHandler {
    handle(categoryKey: string): Array<Article> {
        return es6Article.filter(es => es.categoryKey === categoryKey)
    }
}

class DesignPatternContentHandler implements ContentHandler {
    handle(categoryKey: string, subCategoryKey: string): Array<Article> {
        return designPatternArticle.filter(ds => ds.categoryKey === categoryKey &&
            ds.subCategoryKey === subCategoryKey)
    }
}


class DataStruAndAlgoContentHandler implements ContentHandler {
    handle(categoryKey: string, subCategoryKey: string): Array<Article> {
        return dsAndAlgoArticle.filter(ds => ds.categoryKey === categoryKey &&
            ds.subCategoryKey === subCategoryKey)
    }
}

const contentHandlerMap: Record<string, ContentHandler> = {
    es6: new ES6ContentHandler(),
    design_patterns: new DesignPatternContentHandler(),
    data_structure_and_algorithms: new DataStruAndAlgoContentHandler()
}

export const getContentListByKey = (categoryKey: string, subCategoryKey?: string): Array<Article> => {
    const handler = contentHandlerMap[categoryKey]
    if (!handler) {
        return []
    }
    return handler.handle(categoryKey, subCategoryKey)
}