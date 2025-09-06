import React, { useEffect, useState } from 'react'

import img5 from  '../../../public/assets/Images/aboutus2.png'
import bgImage from'../../../public/assets/Images/slider 2.png'
export default function About() {
    const [counter, setcounter] = useState(0)
    useEffect(()=>{

    },[])
    return (
      <>
        {/* Header */}
        <div
          className="mb-10 header relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px", // أقل على الموبايل
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-2">
              About for Bacola
            </h1>
            <p className="font-semibold text-xs sm:text-sm md:text-base leading-snug uppercase tracking-widest">
              W e c a n d o m o r e f o r y o u
            </p>
          </div>
        </div>
    
        {/* Sections */}
        <section className="container mx-auto py-12 px-4">
          {/* فقرة أولى */}
          <p className="font-normal text-sm sm:text-base leading-6 tracking-normal mb-8">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero
            commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur
            quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus
            non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit
            amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam,
            pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate
            tortor blandit nec.
          </p>
    
          {/* فقرة ثانية مع عنوان */}
          <div className="mb-12">
          <h1 className="font-bold px-2 sm:px-5 text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight mb-4">
              Quisque erat urna, congue et libero <br /> in eleifend euismod velit.
            </h1>
            <p className="font-normal text-sm sm:text-base leading-6 tracking-normal px-2 sm:px-5">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero
              commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur
              quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus
              non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit
              amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor
              quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel
              vulputate tortor blandit nec.
            </p>
          </div>
    
          {/* صورة + كابشن */}
          <section className="container mx-auto px-4 relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* الصورة */}
              <div className="md:col-span-6 relative">
                <img
                  src={img5}
                  alt="CEO"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-md"
                />
              </div>
    
              {/* النصوص */}
              <div className="md:col-span-6 flex flex-col justify-start px-2 sm:px-4">
                <span className="font-normal text-sm sm:text-base md:text-lg leading-6 tracking-tight mb-2">
                  Rachel Leonard - Bacola CEO
                </span>
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-snug mb-3">
                  Duis convallis luctus pretium. Pellentesque habitant morbi
                </h3>
                <p className="font-normal text-sm sm:text-base leading-6 tracking-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. In fermentum mi ut sapien semper, a
                  sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus,
                  turpis orci vehicula ipsum, eget porttitor sapien tortor at neque.
                  Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
                  bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet,
                  interdum dictum felis...
                </p>
              </div>
            </div>
    
            {/* البوكس الأبيض المغطي الصورة */}
            <div className="absolute left-0 md:left-[10%] bottom-0 
                w-full md:w-4/5 bg-white rounded-xl 
                p-4 sm:p-6 md:p-8 
                -translate-y-6 sm:translate-y-4 md:translate-y-8 lg:translate-y-10 
                shadow-md">
              <p className="font-normal text-xs sm:text-sm md:text-base leading-6 tracking-normal">
                In nec purus eget neque accumsan finibus. Duis condimentum elit ut
                libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
                consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
                rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
                dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis...
              </p>
            </div>
          </section>
    
          {/* فقرة ختامية */}
          <p className="font-normal text-sm sm:text-base leading-6 tracking-normal mt-20">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero
            commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur
            quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus
            non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit
            amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam,
            pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate
            tortor blandit nec.
          </p>
        </section>
      </>
    );
    
    
}