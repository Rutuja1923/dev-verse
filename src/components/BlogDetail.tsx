import { useParams } from "react-router-dom";
import { blogData } from "./blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog)
    return <div className="text-center text-white">Blog not found</div>;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center min-h-screen text-white p-4 w-[60%]">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img
          src={blog.cover}
          className="w-full h-[300px] object-cover mb-4 rounded-md"
        />
        <p className="text-sm text-gray-300 mb-2">By {blog.author}</p>
        <p>
          This is a dummy blog description for: <strong>{blog.title}</strong>
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
