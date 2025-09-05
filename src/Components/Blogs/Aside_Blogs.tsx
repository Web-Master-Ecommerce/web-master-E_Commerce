import * as icon from '@/Utils/Icons/Icons';

export default function Aside_Blogs() {
    return (
        <aside className='w-[20%]'>
            {/*Posts*/}
            <div className="RecentPosts mt-4 rounded shadow w-full  ">
                <h2 className='text-lg mb-2 font-semibold'>Recent Posts</h2>
                {/*List Of Posts*/}
                <ul className='list-disc w-full  flex flex-col justify-between items-start gap-2'>
                    {/*First Post Content*/}
                    <li className="flex items-center mb-2 mx-4 hover:scale-105 transition-transform duration-200">
                        <div className="relative w-[50%]">
                            <span className="absolute -top-0 -right-1 text-xs w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full shadow z-10">1</span>
                            <img src="/assets/Images/blog/Recent_Posts1.png" alt="" className='w-[50px] h-[50px] object-cover mr-2 rounded-full  ' />
                        </div>
                        <a href="#" className="ml-2  hover:text-primary lg:text-xs">Get Premium Style in Business Apps, Business Style</a>
                    </li>
                    {/*Second Post Content*/}
                    <li className="flex items-center mb-2 mx-4 hover:scale-105 transition-transform duration-200">
                        <div className="relative w-[50%]">
                            <span className="absolute -top-0 -right-1 text-xs w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full shadow z-10 ">
                                2
                            </span>
                            <img src="/assets/Images/blog/Recent_Posts2.png" alt="" className='w-[50px] h-[50px] object-cover mr-2 rounded-full ' />
                        </div>
                        <a href="#" className="ml-2  hover:text-primary lg:text-xs">Top Problems With Typefaces on the Web</a>
                    </li>
                    {/*Third Post Content*/}
                    <li className="flex items-center mb-2 mx-4 hover:scale-105 transition-transform duration-200">
                        <div className="relative w-[50%]">
                            <span className="absolute -top-0 -right-1 text-xs w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full shadow z-10">
                                3
                            </span>
                            <img src="/assets/Images/blog/Recent_Posts3.png" alt="" className='w-[50px] h-[50px] object-cover mr-2 rounded-full' />
                        </div>
                        <a href="#" className="ml-2  hover:text-primary lg:text-xs">English Breakfast Tea with Tasty Brand Concerns</a>
                    </li>
                </ul>
            </div>
            {/*Social Media*/}
            <div className="SocialMedia shadow p-4 rounded mt-4 w-full ">
                <h2 className='text-lg mb-2 font-semibold'>SOCIAL MEDIA</h2>
                <div className="flex flex-col space-y-2">
                    <a href="#" className="bg-[#3B5998] p-2 text-white text-center flex justify-start items-center gap-8 hover:scale-105 transition-transform duration-200">
                       <icon.FaFacebookF /> Facebook</a>
                    <a href="#" className="bg-[#000000] p-2 text-white text-center flex justify-start items-center gap-8 hover:scale-105 transition-transform duration-200">
                       <icon.BsTwitterX /> X</a>
                    <a href="#" className="bg-[#E1306C] p-2 text-white text-center flex justify-start items-center gap-8 hover:scale-105 transition-transform duration-200">
                       <icon.IoLogoInstagram /> Instagram</a>
                    <a href="#" className="bg-[#0077B5] p-2 text-white text-center flex justify-start items-center gap-8 hover:scale-105 transition-transform duration-200">
                       <icon.FaLinkedinIn /> LinkedIn</a>
                    <a href="#" className="bg-[#FF0000] p-2 text-white text-center flex justify-start items-center gap-8 hover:scale-105 transition-transform duration-200">
                       <icon.FaYoutube /> YouTube</a>
                    <a href="#" className="bg-[#E60023] p-2 text-white text-center flex justify-start items-center gap-8 hover:scale-105 transition-transform duration-200">
                       <icon.FaPinterestP /> Pinterest</a>
                </div>
            </div>
            {/*Widgest*/}
            <div className="WidgetBanner container p-4 mt-4 rounded shadow w-full ">
                <h3 className='text-lg my-2 font-semibold'>WIDGET BANNER</h3>
                <img src="/assets/Images/blog/Widget_Banner.png" alt="Widget Banner" className='w-full mt-4 rounded shadow' />
            </div>
            {/*Tags*/}
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
        </aside>
    );
};
