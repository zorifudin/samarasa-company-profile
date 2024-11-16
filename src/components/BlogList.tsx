import React, { FC } from "react";
import BlogCard from "./BlogCard";
import { Website } from "@/types/website";

interface BlogListProps {
  websites: Website[];
}

const BlogList: FC<BlogListProps> = ({ websites }) => {
  return (
    <section className="container mx-auto min-h-screen bg-gray-900 px-4 bg-blend-color-burn">
      <div className="bg-center0 absolute bg-cover">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
              Check Our Tasty Menu
            </h1>
            <div className="h-1 w-24 rounded-full bg-amber-400"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3 lg:pt-4">
            {websites.map((website, index) => (
              <BlogCard key={index} website={website} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
