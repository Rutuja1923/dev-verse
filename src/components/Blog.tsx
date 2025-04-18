import { blogData } from "./blogData";

type Blog = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 m-auto">
      <h1 className="text-white text-center text-2xl font-bold mt-4 mb-6">
        Welcome to Blog Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {blogData.map((blog: Blog) => (
          <div
            className="bg-[#313131] text-white p-2 m-2 rounded-[12px] w-[80%] mx-auto"
            key={blog.id}
          >
            <img
              src={blog.cover}
              alt="image"
              className="w-full h-[200px] object-cover rounded-md"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <h4 className="text-sm text-gray-300">By {blog.author}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
