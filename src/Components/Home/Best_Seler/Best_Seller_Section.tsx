import Section_Title from "@/Utils/Section_Title";

export default function Best_Seller_Section() {
  return (
    <section className="w-[75%] flex justify-center items-center">
        {/*Section Title*/}
        <Section_Title title={'best sellers'} description={'do not miss the current offers until the end of march'} href={'/'} />
    </section>
  )
}
