import Best_Seller_Aside from "./Best_Seller_Aside";
import Best_Seller_Section from "./Best_Seller_Section";

export default function Best_Sellers_Container() {
  return (
    <section className="w-[90%] flex justify-between items-center mt-[40px]">
        {/*Aside*/}
          <Best_Seller_Aside />
        {/*Best Seler Section*/}
          <Best_Seller_Section />
          
    </section>
  )
}
