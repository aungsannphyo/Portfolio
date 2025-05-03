"use client";

import React from "react";
import ContentCategories from "@/components/content/content-categories";

const ContentPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 space-y-6">
      <div className="bg-yellow-100 text-yellow-800 px-4 py-4 rounded text-center dark:bg-yellow-900 dark:text-yellow-200">
        📢 <strong>Announcement:</strong> To ensure you can read the contents
        properly, it is necessary to keep the VPN turned on.
      </div>
      <h2 className="text-3xl font-bold text-center">My Articles</h2>
      <ContentCategories />
    </main>
  );
};

export default ContentPage;
