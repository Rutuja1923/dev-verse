import { useState } from "react";
import { blogData } from "./blogData";
import BlogCard from "./BlogCard";

type Blog = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

const Blog: React.FC = () => {
  const [likedBlogs, setLikedBlogs] = useState<number[]>([]);
  const handleLike = (id: number) => {
    setLikedBlogs((prev) =>
      prev.includes(id) ? prev.filter((blogId) => blogId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 m-auto">
      <h1 className="text-white text-center text-2xl font-bold mt-4 mb-6">
        Welcome to Blog Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {blogData.map((blog: Blog) => (
          <BlogCard
            key={blog.id}
            {...blog}
            onLike={handleLike}
            isLiked={likedBlogs.includes(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
