"use client";

import React from "react";

interface IArticleError {
  message: string;
}

const ArticleError: React.FC<IArticleError> = ({ message }) => {
  return (
    <div className="text-center text-red-600 font-semibold mt-8">
      ⚠️ Oops! We couldn&apos;t load the article content.
      <div className="text-sm text-gray-500 mt-2">
        {message?.length !== 0 &&
          "Please try again later or contact support if the issue persists."}
      </div>
    </div>
  );
};

export default ArticleError;
