import { designPatternArticle } from "@/features/articles/data/design-patterns-content"
import { es6Article } from "@/features/articles/data/es6-content"
import { Article } from "@/features/articles/types/article-type"



interface ArticleHandler {
    handle(slug: string, categoryKey: string): Article | undefined
}

class ES6ArticleHandler implements ArticleHandler {
    handle(slug: string, categoryKey: string): Article | undefined {
        return es6Article.find(es6 => es6.categoryKey === categoryKey && es6.slug === slug)
    }
}

class DesignPatternArticleHandler implements ArticleHandler {
    handle(slug: string, categoryKey: string): Article | undefined {
        return designPatternArticle.find(ds => ds.categoryKey === categoryKey && ds.slug === slug)
    }
}

const articleHandlerMap: Record<string, ArticleHandler> = {
    es6: new ES6ArticleHandler(),
    design_patterns: new DesignPatternArticleHandler()
}


export const getArticle = (slug: string, categoryKey: string): Article | undefined => {
    const handler = articleHandlerMap[categoryKey]
    return handler.handle(slug, categoryKey)
}