import BLOGS from "../data/blogs"
import Card from "./Card";

const Blogs = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="w-[60%]">
        <h1 className="text-4xl font-semibold">Blogs</h1>
        <div className="grid grid-cols-2 gap-6 mt-5">
          {BLOGS.map((blog, i) => (
            <Card element={blog} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
