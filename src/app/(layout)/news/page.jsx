// NewsGrid.jsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid } from "./_components/ArticleLayout";
import images from "./images";

import { Gallery } from "react-grid-gallery";

const Page = () => {
  // Sample news articles data for fallback
 
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const images2 = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
 ];

  useEffect(() => {

    const fetchNewsData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/TanmayGadge/vegapod-blogs/master/news.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        console.log(`Raw Response: ${data}`);
        setArticles(JSON.parse(data));
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNewsData();
  }, []);

  // Use fetched articles or fallback to sample articles
  const displayArticles = articles ;
  console.log("Displaying articles:", displayArticles);

  return (
    <div className="bg-light-100">
      <div className="max-w-7xl mx-auto">
        <div className="container px-4 py-8 mx-auto">
          <h2 className="mb-8 text-7xl  text-center text-gray-900 dark:text-white">
            <span className="text-gray-500">Latest</span> News
          </h2>

          {isLoading && (
            <div className="text-center py-8">
              <p>Loading news articles...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-4 text-red-500">
              <p>Error loading articles. Showing sample data instead.</p>
            </div>
          )}

          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayArticles && displayArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div> */}
          <LayoutGrid cards={images}/>
          {/* <Gallery images={images2}/> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
const NewsCard = ({ article }) => {
  return (
    <Link
      href={article.imageUrl}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full transition-transform duration-200 hover:scale-100"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-2xl hover:rounded-[40px] transition-all duration-300  bg-white dark:bg-gray-800">
        {/* Image container with fixed aspect ratio */}
        <div className="relative w-full pt-[56.25%]">
          {" "}
          {/* 16:9 aspect ratio */}
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-4">
          {/* <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {article.title}
          </h3>
          <p className="flex-grow mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
            {article.description}
          </p> */}
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
};