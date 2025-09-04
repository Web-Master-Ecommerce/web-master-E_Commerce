import React from 'react';

const RBlog = () => {
    return (
        <div className=' lg:max-w-[300px] '>
            <div className="RecentPosts p-4 mt-4 rounded shadow w-full min-w-[300px] ">
                <h2 className='text-lg mb-2 font-semibold'>Recent Posts</h2>
                <ul className='list-disc '>
                    <li className="flex items-center mb-2 mx-4 hover:scale-105 transition-transform duration-200">
                        <div className="relative ">
                            <span className="absolute top-1 right-1 text-xs w-5 h-5 flex items-center justify-center bg-[#35AFA0] text-white rounded-full shadow z-10">
                                1
                            </span>
                            <img src="/assets/blog/Recent_Posts1.png" alt="" className='w-16 h-16 object-cover mr-2 rounded-full  ' />
                        </div>
                        <a href="#" className="ml-2  hover:text-[#35AFA0] lg:text-xs">Get Premium Style in Business Apps, Business Style</a>
                    </li>
                    <li className="flex items-center mb-2 mx-4 hover:scale-105 transition-transform duration-200">
                        <div className="relative">
                            <span className="absolute top-1 right-1 text-xs w-5 h-5 flex items-center justify-center bg-[#35AFA0] text-white rounded-full shadow z-10 ">
                                2
                            </span>
                            <img src="/assets/blog/Recent_Posts2.png" alt="" className='w-16 h-16 object-cover mr-2 rounded-full ' />
                        </div>
                        <a href="#" className="ml-2  hover:text-[#35AFA0] lg:text-xs">Top Problems With Typefaces on the Web</a>
                    </li>
                    <li className="flex items-center mb-2 mx-4 hover:scale-105 transition-transform duration-200">
                        <div className="relative">
                            <span className="absolute top-1 right-1 text-xs w-5 h-5 flex items-center justify-center bg-[#35AFA0] text-white rounded-full shadow z-10">
                                3
                            </span>
                            <img src="/assets/blog/Recent_Posts3.png" alt="" className='w-16 h-16 object-cover mr-2 rounded-full' />
                        </div>
                        <a href="#" className="ml-2  hover:text-[#35AFA0] lg:text-xs">English Breakfast Tea with Tasty Brand Concerns</a>
                    </li>
                </ul>
            </div>
            <div className="SocialMedia shadow p-4 rounded mt-4 w-full min-w-[300px]">
                <h2 className='text-lg mb-2 font-semibold'>SOCIAL MEDIA</h2>
                <div className="flex flex-col space-y-2">
                    <a href="#" className="bg-[#3B5998] p-2 text-white text-center  hover:scale-105 transition-transform duration-200">Facebook</a>
                    <a href="#" className="bg-[#1DA1F2] p-2 text-white text-center  hover:scale-105 transition-transform duration-200">Twitter</a>
                    <a href="#" className="bg-[#E1306C] p-2 text-white text-center  hover:scale-105 transition-transform duration-200">Instagram</a>
                    <a href="#" className="bg-[#0077B5] p-2 text-white text-center  hover:scale-105 transition-transform duration-200">LinkedIn</a>
                    <a href="#" className="bg-[#FF0000] p-2 text-white text-center  hover:scale-105 transition-transform duration-200">YouTube</a>
                    <a href="#" className="bg-[#E60023] p-2 text-white text-center  hover:scale-105 transition-transform duration-200">Pinterest</a>
                </div>
            </div>
            <div className="WidgetBanner container p-4 mt-4 rounded shadow w-full min-w-[300px]">
                <h3 className='text-lg my-2 font-semibold'>WIDGET BANNER</h3>
                <img src="../public/assets/blog/Widget_Banner.png" alt="Widget Banner" className='w-full mt-4 rounded shadow' />
            </div>
            <div className="Tags">
                <h3 className='text-lg my-2 font-semibold'>TAGS</h3>
                <div className="flex flex-wrap">
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">advertising</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">best</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">grocery</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">summary</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">organic</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">sharp</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">website</a>
                    <a href="#" className="bg-gray-300 text-sm text-black py-1 px-2 rounded mr-2 mb-2 hover:bg-blue-500 hover:text-white">visual</a>
                </div>
            </div>
        </div>
    );
};

export default RBlog;