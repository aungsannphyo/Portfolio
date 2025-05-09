"use client";

import React from "react";
import BackButton from "@/components/back-buttom";
import MarkdownRenderer from "@/features/articles/markdown-renderer";

interface IArticleContent {
  markdown: string;
}

const ArticleContent: React.FC<IArticleContent> = ({ markdown }) => {
  return (
    <div className="flex justify-center px-4">
      <div
        className="prose prose-sm sm:prose-base md:prose-md prose-slate dark:prose-invert 
                      prose-headings:font-semibold prose-code:before:content-none 
                      prose-code:after:content-none prose-pre:not-prose w-full max-w-3xl tracking-wide"
      >
        <BackButton />
        <MarkdownRenderer content={markdown} />
        <BackButton />
      </div>
    </div>
  );
};
export default ArticleContent;
