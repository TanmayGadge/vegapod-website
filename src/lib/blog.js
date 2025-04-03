import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { generateSlug } from './generateSlug';

// Example assuming markdown blog posts in /content/blog directory
const blogDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts with essential data
 */
export async function getAllBlogPosts() {
  // Read all files from the blog directory
  const fileNames = fs.readdirSync(blogDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Generate slug from title or use provided slug
      const slug = matterResult.data.slug || generateSlug(matterResult.data.title);
      
      // Combine the data with the id
      return {
        id,
        slug,
        ...(matterResult.data),
        excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 160)
      };
    })
    // Sort posts by date
    .sort((a, b) => (new Date(b.publishedAt) - new Date(a.publishedAt)));
    
  return allPostsData;
}

/**
 * Get a list of all blog post slugs
 */
export async function getAllBlogSlugs() {
  const posts = await getAllBlogPosts();
  return posts.map(post => post.slug);
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug) {
  const posts = await getAllBlogPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (!post) return null;
  
  // Read markdown file as string
  const fullPath = path.join(blogDirectory, `${post.id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  
  // Combine the data with the id and contentHtml
  return {
    ...post,
    content: contentHtml
  };
}