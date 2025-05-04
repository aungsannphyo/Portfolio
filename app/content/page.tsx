"use client";

import ContentCategories from "@/features/content/content-categories";
import React from "react";

const ContentPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 space-y-6">
      <div className="bg-yellow-100 text-yellow-800 px-4 py-4 rounded text-center dark:bg-yellow-900 dark:text-yellow-200">
        📢 <strong>Announcement:</strong> To ensure you can read the contents
        properly, it is necessary to keep the VPN turned on.
      </div>
      <ContentCategories />
    </main>
  );
};

export default ContentPage;
