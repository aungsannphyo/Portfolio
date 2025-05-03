import { getArticle } from "@/handler/article-handler";
import { Article } from "@/type/articles/content-type";


export async function fetchMarkdownFromGithub(article: Article): Promise<string> {
    const { user, repo, branch, path, markdown } = article;
    const baseUrl = "https://raw.githubusercontent.com";
    const url = path
        ? `${baseUrl}/${user}/${repo}/${branch}/${path}/${markdown}`
        : `${baseUrl}/${user}/${repo}/${branch}/${markdown}`;
    console.log(process.env.GITHUB_KEY)
    const response = await fetch(url, {
        cache: "no-store",

    });

    if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.status}`);
    }

    return await response.text();

}


export async function getMarkdownArticleData(
    slug: string,
    categoryKey: string
): Promise<{ markdown: string; article?: Article }> {
    const article = getArticle(slug, categoryKey);

    if (!article) {
        throw new Error("Article not found");
    }

    const markdown = await fetchMarkdownFromGithub(article);

    return { markdown, article };
}
