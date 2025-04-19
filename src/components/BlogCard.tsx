import React from "react";
import { Heart } from "phosphor-react";
import { Link } from "react-router-dom";

type BlogCardProps = {
  id: number;
  title: string;
  cover: string;
  author: string;
  onLike: (id: number) => void;
  isLiked: boolean;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  cover,
  author,
  onLike,
  isLiked,
  id,
}) => {
  return (
    <div className="bg-[#313131] text-white p-4 m-2 rounded-[12px] w-[80%] mx-auto relative">
      <img
        src={cover}
        alt="blog cover"
        className="w-full h-[200px] object-cover rounded-md"
      />
      <div className="mt-2">
        <Link to={`/blog/${id}`}>
          <h2 className="text-lg font-semibold hover:underline">{title}</h2>
        </Link>
        <h4 className="text-sm text-gray-300">By {author}</h4>
      </div>
      <button onClick={() => onLike(id)} className="absolute top-2 right-2">
        <Heart
          size={24}
          weight={isLiked ? "fill" : "regular"}
          className={isLiked ? "text-red-500" : "text-white"}
        />
      </button>
    </div>
  );
};

export default BlogCard;
