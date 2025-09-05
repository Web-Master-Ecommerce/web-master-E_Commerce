import Aside_Blogs from "./Aside_Blogs";
import Blogs_Content from "./Blogs_Content";

export default function Blogs_Container() {
  return (
    <section className="w-full flex justify-center items-center mt-[40px]">
      <section className="w-[90%] flex justify-between items-start gap-5">
        {/*Blogs Content*/}
          <Blogs_Content />
        {/*Aside Blogs*/}
          <Aside_Blogs />
      </section>
    </section>
  )
}
