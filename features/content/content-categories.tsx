"use client";

import React, { useState } from "react";
import { contentCategories } from "@/features/content/data/content";
import { ES6 } from "@/enum/category-enum";
import { ContentCategory } from "@/features/content/types/content-type";
import { IoArrowDown } from "react-icons/io5";
import { getContentListByKey } from "@/services/content-handler";
import ContentCategoryButton from "./content-category-button";
import ContentInfo from "./content-info";
import { Article } from "../articles/types/article-type";

const ContentCategories = () => {
  const [categoryKey, setCategoryKey] = useState<string>(ES6);

  const selectedCategory = contentCategories.find(
    (cat) => cat.categoryKey === categoryKey
  );

  const generalArticles: Array<Article> = getContentListByKey(categoryKey);

  return (
    <React.Fragment>
      <div className="hidden sm:flex gap-6 mb-12 overflow-x-auto">
        <div className="flex flex-wrap w-max gap-3 sm:gap-4 px-1 py-2">
          {contentCategories.map((category: ContentCategory) => (
            <ContentCategoryButton
              key={category.id}
              categoryKey={categoryKey}
              setCategoryKey={setCategoryKey}
              contentCategory={category.categoryKey}
              categoryName={category.category}
            />
          ))}
        </div>
      </div>
      {/* Mobile: Select Dropdown */}
      <div className="relative w-full max-w-xs mx-auto md:hidden block">
        <select
          value={categoryKey}
          onChange={(e) => setCategoryKey(e.target.value)}
          className="appearance-none border border-black bg-white text-black px-6 py-2 pr-10 text-base shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer w-full"
        >
          {contentCategories.map((category: ContentCategory) => (
            <option key={category.id} value={category.categoryKey}>
              {category.category}
            </option>
          ))}
        </select>

        {/* Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <IoArrowDown />
        </div>
      </div>

      {/* Articles List based on selected category */}
      <div className="space-y-10">
        {/* Articles Section */}
        {/* General Articles (not under subcategories) */}
        {generalArticles.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold border-b border-black pb-2">
              Overview
            </h3>
            <ContentInfo articles={generalArticles} />
          </div>
        )}

        {selectedCategory?.subCategoryKeyList?.map((sub) => {
          const subArticles: Array<Article> = getContentListByKey(
            categoryKey,
            sub.subCategoryKey
          );
          return subArticles.length > 0 ? (
            <div key={sub.subCategoryKey} className="space-y-4">
              <h3 className="text-2xl font-semibold border-b border-black pb-2">
                {sub.subtitle}
              </h3>
              <ContentInfo articles={subArticles} />
            </div>
          ) : null;
        })}
      </div>
    </React.Fragment>
  );
};

export default ContentCategories;
