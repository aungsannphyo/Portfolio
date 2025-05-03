import BackButton from "@/components/back-buttom";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getMarkdownArticleData } from "@/api/markdown";

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

  let markdown: string | null = null;
  let article = null;
  let errorMessage: string | null = null;

  try {
    const data = await getMarkdownArticleData(slug, key);
    markdown = data.markdown;
    article = data.article ?? null;
  } catch (err) {
    if (err instanceof Error) {
      errorMessage = err.message;
    } else {
      errorMessage = "An unknown error occurred.";
    }
  }

  if (!article || !markdown) {
    return (
      <div className="text-center text-red-600 font-semibold mt-8">
        ⚠️ Oops! We couldn&apos;t load the article content.
        <div className="text-sm text-gray-500 mt-2">
          {errorMessage?.length !== 0 &&
            "Please try again later or contact support if the issue persists."}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4">
      <div
        className="prose prose-sm sm:prose-base md:prose-md prose-slate dark:prose-invert 
                    prose-headings:font-semibold prose-code:before:content-none 
                    prose-code:after:content-none prose-pre:not-prose w-full max-w-3xl"
      >
        <BackButton />
        <MarkdownRenderer content={markdown} />
        <BackButton />
      </div>
    </div>
  );
}
