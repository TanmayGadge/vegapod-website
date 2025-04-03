// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import BlogPost from "@/components/BlogPost";
// import axios from "axios";

// const Page = () => {
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const params = useParams();
//   const { slug } = params;

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         const response = await axios.get(
//           "https://raw.githubusercontent.com/TanmayGadge/vegapod-blogs/master/blogs.json"
//         );

//         // Log the raw response for debugging
//         console.log("Raw response:", response.data);
        
//         let cleanedData;
//         if (typeof response.data === 'string') {
//           // First, fix the JSON structure - it appears to be malformed with nested objects
//           cleanedData = response.data
//             // Fix double opening brackets and no array
//             .replace(/{\s*{/g, '[{')
//             // Fix double closing brackets and no array end
//             .replace(/}\s*}/g, '}]')
//             // Remove trailing commas
//             .replace(/,(\s*[}\]])/g, '$1');
//         } else {
//           // If it's already parsed as an object, we need to extract the values
//           cleanedData = JSON.stringify(Object.values(response.data));
//         }
        
//         console.log("Cleaned data:", cleanedData);
        
//         try {
//           const parsedData = JSON.parse(cleanedData);
//           const postsArray = Array.isArray(parsedData) ? parsedData : [parsedData];
          
//           // Find the post that matches the slug
//           const foundPost = postsArray.find(post => post.slug === slug);
          
//           if (foundPost) {
//             setPost(foundPost);
//           } else {
//             setError("Blog post not found");
//           }
//         } catch (parseError) {
//           console.error("JSON parsing error:", parseError);
//           setError(`Failed to parse blog data: ${parseError.message}`);
//         }
//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(`Failed to load blog post: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       fetchNewsData();
//     }
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-xl">Loading post...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-xl text-red-600">{error}</p>
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-xl">Blog post not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       <BlogPost post={post} />
//     </div>
//   );
// };

// export default Page;