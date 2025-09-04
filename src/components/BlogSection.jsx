import React from "react";
import MobileAppDev from "../assets/Mobile-App-Development-for-E-commerce-Features-Your-App-Must-Have-300x195.jpg";
import RoleOfAi from "../assets/The-Role-of-Ai-and-machine-learning-in-Modern-Logistic-App-Development-300x195.jpg";
import UltimateImage from "../assets/The-Ultimate-Guide-to-Choosing-the-Right-Tech-Stack-for-Grocery-Delivery-Apps-300x195.jpg";
const blogPosts = [
  {
    id: 1,
    date: "September 12, 2024",
    title: "Mobile App Development for E-commerce: Features Your App Must Have",
    author: "Ranjit Singh",
    image: MobileAppDev,
  },
  {
    id: 2,
    date: "September 2, 2024",
    title:
      "The Role of AI and Machine Learning in Modern Logistic App Development",
    author: "Sohan Singh",
    image: RoleOfAi,
  },
  {
    id: 3,
    date: "August 20, 2024",
    title:
      "The Ultimate Guide to Choosing the Right Tech Stack for Grocery Delivery Apps",
    author: "Ranjit Singh",
    image: UltimateImage,
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Words of <span className="text-[#ff6565]">Wisdom</span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Where we share insights, industry trends, opinions, tips. It&apos;s
            all here.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date Badge */}
                <span className="inline-block bg-[#ff6565] text-white text-sm font-medium px-3 py-1 rounded">
                  {post.date}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h3>

                {/* Space before author + link row */}
                <div className="mt-6 flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                  {/* Author */}
                  <span className="flex-1">{post.author}</span>

                  {/* Divider */}
                  <span className="w-px h-4 bg-gray-300 mx-4" />

                  {/* Read Post */}
                  <a
                    href="#"
                    className="text-[#ff6565] font-medium hover:underline flex items-center"
                  >
                    Read Post <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
