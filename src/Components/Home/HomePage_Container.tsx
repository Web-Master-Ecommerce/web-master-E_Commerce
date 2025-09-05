import Best_Sellers_Container from "./Best_Seler/Best_Sellers_Container";
import Landing_Container from "./Landing/Landing_Container";

export default function HomePage_Container() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
        {/*Landing Container*/}
        <Landing_Container />
        {/*BestSeller Container*/}
        <Best_Sellers_Container />
    </main>
  )
}
