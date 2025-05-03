"use client";

import React from "react";
import ContentCategories from "@/components/content/content-categories";

const ContentPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 space-y-6">
      <h2 className="text-3xl font-bold text-center">My Articles</h2>
      <ContentCategories />
    </main>
  );
};

export default ContentPage;
