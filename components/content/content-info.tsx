import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Article } from "@/type/articles/content-type";

const ContentInfo = ({ articles }: { articles: Article[] }) => {
  const [inView, setInView] = useState<boolean[]>(
    new Array(articles.length).fill(false)
  );
  const articleRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prevState) => {
              const updatedState = [...prevState];
              updatedState[index] = true;
              return updatedState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    articleRefs.current.forEach((article) => {
      if (article) {
        observer.observe(article);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [articles.length]);

  return (
    <div className="space-y-6 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/content/${article.slug}?key=${article.categoryKey}`}
            className={`group border border-black rounded-xl overflow-hidden bg-white hover:shadow-md hover:scale-[1.01] transition-all ${
              inView[index] ? "fade-in" : ""
            }`}
            ref={(el) => {
              articleRefs.current[index] = el;
            }}
          >
            <div className="relative w-full h-36">
              <Image
                src={article.imageUrl}
                alt={article.sectionTitle}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-black group-hover:underline">
                {article.sectionTitle}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentInfo;
