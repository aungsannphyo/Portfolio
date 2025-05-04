"use client";

import React from "react";

interface IContentCategoryButton {
  categoryKey: string;
  setCategoryKey: React.Dispatch<React.SetStateAction<string>>;
  contentCategory: string;
  categoryName: string;
}

const ContentCategoryButton: React.FC<IContentCategoryButton> = ({
  categoryKey,
  setCategoryKey,
  contentCategory,
  categoryName,
}) => {
  const isSelected = categoryKey === contentCategory;

  return (
    <button
      className={`whitespace-nowrap px-4 py-2 cursor-pointer text-sm font-medium rounded-full border transition-all duration-300
        ${
          isSelected
            ? "bg-black text-white border-black shadow"
            : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-black"
        } focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1`}
      onClick={() => setCategoryKey(contentCategory)}
    >
      # {categoryName}
    </button>
  );
};

export default ContentCategoryButton;
