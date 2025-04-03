// BlogPost.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const BlogPost = ({ post }) => {
  // This would normally come from props or an API
  

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.subtitle} />
      </Head>
      <div className="bg-light-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          {/* Article Header */}
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              {post.subtitle}
            </h2>

            {/* Author info and metadata */}
            <div className="flex items-center mb-8">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {post.author.name}
                </p>
                <div className="flex text-gray-500 text-sm">
                  <span>{post.publishedAt}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  key={tag}
                >
                  <p className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition">
                    {tag}
                  </p>
                </Link>
              ))}
            </div> */}
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-96 mb-10 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt="Cover image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="font-medium text-lg text-gray-900 mb-1">
                  {post.author.name}
                </p>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
            {/* <div className="mt-4">
              <Link
                href={`/author/${post.author.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <p className="text-green-600 font-medium hover:text-green-700">
                  More from {post.author.name}
                </p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
