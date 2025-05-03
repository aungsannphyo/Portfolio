import { es6Article } from "@/articles-data/es6-content"
import { designPatternArticle } from "@/articles-data/design-patterns-content"
import { Article } from "@/type/articles/content-type"


interface ContentHandler {
    handle(categoryKey: string, subCategoryKey?: string): Array<Article>
}

//Main business logic
class ES6ContentHandler implements ContentHandler {
    handle(categoryKey: string): Array<Article> {
        return es6Article.filter(es => es.categoryKey === categoryKey)
    }
}

class DesignContentPatternHandler implements ContentHandler {
    handle(categoryKey: string, subCategoryKey: string): Array<Article> {
        return designPatternArticle.filter(ds => ds.categoryKey === categoryKey &&
            ds.subCategoryKey === subCategoryKey)
    }
}

const contentHandlerMap: Record<string, ContentHandler> = {
    es6: new ES6ContentHandler(),
    design_patterns: new DesignContentPatternHandler()
}

export const getContentListByKey = (categoryKey: string, subCategoryKey?: string): Array<Article> => {
    const handler = contentHandlerMap[categoryKey]
    if (!handler) {
        return []
    }
    return handler.handle(categoryKey, subCategoryKey)
}