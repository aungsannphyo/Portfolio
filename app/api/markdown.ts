import { Article } from "@/features/articles/types/article-type";
import { getArticle } from "@/services/article-handler";


export async function fetchMarkdownFromGithub(article: Article): Promise<string> {
    const { user, repo, branch, path, markdown } = article;
    const baseUrl = "https://raw.githubusercontent.com";
    const url = path
        ? `${baseUrl}/${user}/${repo}/${branch}/${path}/${markdown}`
        : `${baseUrl}/${user}/${repo}/${branch}/${markdown}`;

    try {
        const response = await fetch(url, {
            cache: "no-store",

        });
        if (!response.ok) {
            throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        throw new Error(`Error fetching markdown: ${error}`);
    }

}

export async function getMarkdownArticleData(
    slug: string,
    categoryKey: string
): Promise<{ markdown?: string; article?: Article, errorMessage: string }> {
    const article = getArticle(slug, categoryKey);

    if (!article) {
        throw new Error("Article not found");
    }
    try {
        const markdown = await fetchMarkdownFromGithub(article);
        return { article: article, markdown: markdown, errorMessage: "" };
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
        return { article: undefined, markdown: undefined, errorMessage };
    }
}
