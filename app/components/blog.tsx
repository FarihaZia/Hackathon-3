"use client"
import Image from "next/image";
import React, { useState } from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: "/Images/Rectangle1.svg",
      date: "📅12th Oct 2022",
      readTime: "🕔5 min",
      fullText:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    },
    {
      id: 2,
      title: "Going all-in with millennial design",
      image: "/Images/Rectangle2.svg",
      date: "📅12th Nov 2022",
      readTime: "🕔5 min",
      fullText:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    },
    {
      id: 3,
      title: "Going all-in with millennial design",
      image: "/Images/Rectangle3.svg",
      
      date: "📅12th Dec 2022",
      readTime: "🕔5 min",
      fullText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        id: 4,
        title: "Going all-in with millennial design",
        image: "/Images/Rectangle1.svg",
        date: "📅12th Dec 2022",
        readTime: "🕔5 min",
        fullText:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        id: 5,
        title: "Going all-in with millennial design",
        image: "/Images/Rectangle2.svg",
    
        date: "📅12th Dec 2022",
        readTime: "🕔5 min",
        fullText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        id: 6,
        title: "Going all-in with millennial design",
        image: "/Images/Rectangle3.svg",
        date: "📅12th Dec 2022",
        readTime: "🕔5min",
        fullText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
  ];

  const [expandedBlog, setExpandedBlog] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const toggleReadMore = (id:number) => {
   
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
  
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-[36px] font-medium mb-2">Our Blogs</h2>
          <p className="font-medium text-[16px] text-[#9F9F9F] max-w-2xl mx-auto">
            Find a bright idea to suit your taste with our great selection.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="p-4 bg-white flex flex-col items-start hover:shadow-xl transition-shadow"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={393}
                height={393}
                className=" object-cover rounded mb-4"
              />
             <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              {expandedBlog === blog.id ? (
               <>
                <p className="text-gray-600 text-sm mb-4">{blog.fullText}</p>
              
                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors mb-4"
                >
                  Read Less
                </button>
                </>
              ):(
                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors mb-4"
                >
                  Read More
                </button>
              )}
              
              <p className="text-gray-500 text-xs">
                {blog.readTime} · {blog.date}
              </p>
            </div>
          ))}
        </div>

       
       <div className="mt-8 text-center">
          {visibleBlogs < blogs.length && (
            <button
              onClick={() => setVisibleBlogs(visibleBlogs + 3)}
              className="font-medium text-[20px] underline px-6 py-2 rounded hover:bg-slate-200 transition-colors mx-2"
            >
              View More
            </button>
          )}
          {visibleBlogs > 3 && (
            <button
              onClick={() => setVisibleBlogs(3)}
              className="font-medium text-[20px] underline px-6 py-2 rounded hover:bg-slate-200 transition-colors mx-2"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
