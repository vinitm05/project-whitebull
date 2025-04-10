import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import { Link } from "react-router";
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogCategories = [
    "All Posts",
    "Accounting Tips",
    "Tax Updates",
    "Practice Growth",
    "Industry News",
    "Outsourcing Advice"
  ];

  const [activeCategory, setActiveCategory] = useState("All Posts");

  const blogPosts = [
    {
      id: 3,
      title: "5 Ways to Streamline Your Accounts Preparation Process",
      excerpt: "Improve efficiency and accuracy in your accounts preparation workflow with these practical techniques.",
      category: "Accounting Tips",
      author: "Sarah Thompson",
      date: "15 March 2025",
      image: "../../assets/blog/blog-1.webp"
    },
    {
      id: 4,
      title: "The Complete Guide to Outsourcing for UK Accounting Firms",
      excerpt: "Everything you need to know about successfully implementing outsourcing in your accounting practice.",
      category: "Outsourcing Advice",
      author: "James Wilson",
      date: "8 March 2025",
      image: "../../assets/blog/blog-2.webp"
    },
    {
      id: 5,
      title: "Building Client Trust When Using Outsourced Services",
      excerpt: "Practical strategies for maintaining strong client relationships while leveraging outsourced accounting support.",
      category: "Practice Growth",
      author: "Emily Parker",
      date: "1 March 2025",
      image: "../../assets/blog/blog-3.webp"
    },
    {
      id: 6,
      title: "MTD Updates: Preparing for the Next Phase of Digital Tax",
      excerpt: "Essential information on upcoming Making Tax Digital requirements and how to prepare your practice and clients.",
      category: "Tax Updates",
      author: "Michael Bennett",
      date: "22 February 2025",
      image: "../../assets/blog/blog-4.webp"
    },
    {
      id: 7,
      title: "The Hidden Costs of In-House Accounting Teams",
      excerpt: "An analysis of the true cost of maintaining an in-house team versus strategic outsourcing.",
      category: "Outsourcing Advice",
      author: "Sarah Thompson",
      date: "15 February 2025",
      image: "../../assets/blog/blog-5.webp"
    },
    {
      id: 8,
      title: "How Technology is Transforming UK Accounting Practices",
      excerpt: "Explore the latest technological innovations reshaping the accounting industry and how firms can adapt.",
      category: "Industry News",
      author: "James Wilson",
      date: "8 February 2025",
      image: "../../assets/blog/blog-6.webp"
    }
  ];

  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <LandingImage
        title="White Bull Blog"
        link="Blog"
      />

      {/* Blog Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Insights for <span className="text-[#2a4768]">Accounting Firms</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Expert advice, industry updates, and practical strategies to help your accounting practice thrive.
          </p>
        </div>
      </div>

      {/* Blog Categories and Posts */}
      <div className="my-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium ${
                    activeCategory === category
                      ? "bg-[#2a4768] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaTag className="mr-1 text-[#2a4768]" />
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaUser className="text-[#2a4768] mr-2" />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#2a4768] font-semibold flex items-center text-sm hover:underline"
                    >
                      Read More <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;