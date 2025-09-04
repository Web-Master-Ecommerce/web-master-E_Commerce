import LBlog from "./LBlog/LBlog";
import RBlog from "./RBlog";

const Blog = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-20 gap-4 my-3">
        <div className="lg:col-span-2 ">
          <LBlog />
        </div>
        <div className="lg:col-span-1 ">
          <RBlog />
        </div>
</div>
    </>
  );
};

export default Blog;