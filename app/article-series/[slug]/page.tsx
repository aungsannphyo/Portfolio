import { getMarkdownArticleData } from "@/app/api/markdown";
import ArticleContent from "@/features/articles/article-content";
import ArticleError from "@/features/articles/article-error";

export default async function ArticleDetails({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ key?: string }>;
}) {
  const { slug } = await params;
  const search = await searchParams;
  const key = search.key || "default";

  const { article, markdown, errorMessage } = await getMarkdownArticleData(
    slug,
    key
  );

  if (!article || !markdown) {
    return <ArticleError message={errorMessage} />;
  }

  return <ArticleContent markdown={markdown} />;
}
