import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
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

  const featuredPosts = [
    {
      id: 1,
      title: "How UK Accounting Firms Can Reduce Costs Without Sacrificing Quality",
      excerpt: "Discover proven strategies for maintaining service excellence while significantly reducing operational expenses in your accounting practice.",
      category: "Practice Growth",
      author: "James Wilson",
      date: "24 March 2025",
      image: "../../assets/blog/blog-featured-1.webp",
      featured: true
    },
    {
      id: 2,
      title: "Key Tax Updates for 2025: What Accounting Firms Need to Know",
      excerpt: "Stay ahead of recent UK tax changes and ensure your firm is providing clients with the most current and accurate tax advice.",
      category: "Tax Updates",
      author: "Michael Bennett",
      date: "18 March 2025",
      image: "../../assets/blog/blog-featured-2.webp",
      featured: true
    }
  ];

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

      {/* Help Section */}
      <div className="mx-auto w-11/12 my-8 rounded-2xl border border-[#2a4768] bg-white p-4.5">
        <TbPhoneCalling className="text-6xl text-[#2a4768]" />
        <h2 className="text-lg font-bold">Need Help?</h2>
        <p className="pt-2 pb-5 text-gray-500">
          Get in touch and let us know how we can help. We'll be in touch as soon as possible.
        </p>
        <Link
          to="/contact"
          className="rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      {/* Blog Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Insights for <span className="text-[#2a4768]">UK Accounting Firms</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Expert advice, industry updates, and practical strategies to help your accounting practice thrive.
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">
            Featured <span className="text-[#2a4768]">Articles</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-[#e6eef5] text-[#2a4768] px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="mx-3">•</span>
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaUser className="text-[#2a4768] mr-2" />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#2a4768] font-semibold flex items-center hover:underline"
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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-50 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#2a4768] py-16 px-4.5 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with the Latest Insights
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive expert advice, industry updates, and practical strategies for UK accounting firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 rounded-md w-full"
            />
            <button className="bg-white text-[#2a4768] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-[#2a4768]">Transform</span> Your Accounting Practice?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Discover how White Bull's outsourced accounting services can help your firm reduce costs, increase efficiency, and deliver exceptional service to your clients.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/services"
            className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-50 transition-all"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;