"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/TanmayGadge/vegapod-blogs/master/blogs.json"
        );

        let data = await response.text(); // Get raw response as text

        // console.log("Raw response:", data); // Debugging

        // Fix potential trailing commas or whitespace issues
        data = data.trim(); // Remove extra whitespace
        data = data.replace(/,\s*([\]}])/g, "$1"); // Remove trailing commas before ] or }

        let parsedData = JSON.parse(data);

        if (!Array.isArray(parsedData)) {
          throw new Error("Invalid blog data format");
        }

        setBlogs(parsedData);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(`Failed to load blogs: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // useEffect(() => {
  //   console.log("Updated blogs:", blogs);
  // }, [blogs]);

  if (loading) {
    return (
      // <div className="flex justify-center items-center min-h-screen">
      //   <p className="text-xl">Loading blogs...</p>
      // </div>
      <div className="bg-light-100">
        <div className="max-w-7xl  mx-auto grid place-content-center h-[50vh]">
          <div className="w-[20rem] h-5 bg-gray-400 mb-16 animate-pulse"></div>
          <div className="animate-pulse space-y-6">
            <div className="w-[40rem] h-5 bg-gray-400"></div>
            <div className="w-[40rem] h-5 bg-gray-400"></div>
            <div className="w-[40rem] h-5 bg-gray-400"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex bg-light-100 justify-center items-center min-h-screen">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-light-100">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}  className="group">
              <div className="cursor-pointer border rounded-lg p-4 group-hover:rounded-2xl transition bg-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-24 h-16 object-cover rounded-md group-hover:rounded-2xl"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{blog.title}</h2>
                    <p className="text-sm text-gray-500">{blog.subtitle}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {blog.publishedAt} • {blog.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
