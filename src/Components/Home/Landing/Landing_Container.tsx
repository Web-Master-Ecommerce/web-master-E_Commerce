import Landing_Aside from "./Landing_Aside";
import Landing_Section from "./Landing_Section";

export default function Landing_Container() {
  return (
    <section className="w-[90%] flex justify-between items-center mt-[40px]">
      
        {/*Aside*/}
        <Landing_Aside />
        {/*Slider*/}
        <Landing_Section />
    </section>
  )
}
