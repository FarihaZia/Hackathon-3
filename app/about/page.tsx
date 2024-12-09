
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogPost {
  title: string;
  image: string;
  date: string;
  author: string;
  category: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Going all-in with millennial design",
    image: "/Images/blog1.svg", 
    date: "14 Oct 2022",
    author: "Admin",
    category: "Wood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Exploring new ways of decorating",
    image: "/Images/blog2.svg",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Handmade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Handmade pieces that took time to make",
    image: "/Images/blog3.svg",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Crafts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
       <div className="relative bg-[url('/Images/mainbg.svg')] bg-cover bg-center h-[316px] ">
          
          <div className="absolute inset-0  "></div>
  
     
          <div className="relative flex flex-col items-center justify-center h-full">
       
            <div className="mb-4 -mt-10">
              <Image
                src="/Images/Logo.svg"
                alt="Shop Logo"
                width={77} 
                height={77} 
                      className="object-contain"
              />
            </div>
            <h1 className="font-medium text-[48px] -mt-5">Blog</h1>
  
           
            <nav className="text-black text-sm  mt-3">
              <Link href="/" className="font-bold">
                Home
              </Link>
              <span className="mx-2 font-bold">{">"}</span>
          <Link href={"/checkout"}   > <span className="hover:underline ">Blog</span></Link>
            </nav>
          </div>
          </div>
      <div className="flex flex-wrap">
    
        <div className="w-full lg:w-8/12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="mb-8 mt-9 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                height={500}
                width={817}
                className=" object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <button
                  
                  className="mt-4 inline-block text-mainRed font-semibold hover:underline"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-4/12 pl-0 lg:pl-8">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#" className="hover:text-mainRed">
                  Crafts (2)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mainRed">
                  Design (0)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mainRed">
                  Handmade (7)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mainRed">
                  Interior (1)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-mainRed">
                  Wood (6)
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              
                <li  className="flex space-x-4">
                  <Image
                    src={"/Images/recentpost1.svg"}
                    alt={"blog"}
                    width={80}
                    height={80}
                    className=" object-cover rounded"
                  />
                  <div>
                    <h2
                      
                      className="text-gray-800 font-medium hover:underline"
                    >
                     
                    </h2>
                    <p className='text-black'>Going all-in with millennial design</p>
                    <p className="text-gray-500 text-sm">{"03 Aug 2022"}</p>
                  </div>
                </li>
            
                <li  className="flex space-x-4">
                  <Image
                    src={"/Images/recentpost2.svg"}
                    alt={"blog"}
                    width={80}
                    height={80}
                    className=" object-cover rounded"
                  />
                  <div>
                    <h2
                      
                      className="text-gray-800 font-medium hover:underline"
                    >
                     
                    </h2>
                    <p className='text-black'>Going all-in with millennial design</p>
                    <p className="text-gray-500 text-sm">{"03 Aug 2022"}</p>
                  </div>
                </li>

                <li  className="flex space-x-4">
                  <Image
                    src={"/Images/recentpost3.svg"}
                    alt={"blog"}
                    width={80}
                    height={80}
                    className=" object-cover rounded"
                  />
                  <div>
                    <h2
                      
                      className="text-gray-800 font-medium hover:underline"
                    >
                     
                    </h2>
                    <p className="text-black">Handmade pieces that took time to make</p>
                    <p className="text-gray-500 text-sm">{"03 Aug 2022"}</p>
                  </div>
                </li>

                <li  className="flex space-x-4">
                  <Image
                    src={"/Images/recentpost4.svg"}
                    alt={"blog"}
                    width={80}
                    height={80}
                    className=" object-cover rounded"
                  />
                  <div>
                    <h2
                      
                      className="text-gray-800 font-medium hover:underline"
                    >
                     
                    </h2>
                    <p className="text-black">Modern home in Milan</p>
                    <p className="text-gray-500 text-sm">{"03 Aug 2022"}</p>
                  </div>
                </li>

                <li  className="flex space-x-4">
                  <Image
                    src={"/Images/recentpost4.svg"}
                    alt={"blog"}
                    width={80}
                    height={80}
                    className=" object-cover rounded"
                  />
                  <div>
                    <h2
                      
                      className="text-gray-800 font-medium hover:underline"
                    >
                     
                    </h2>
                    <p className="text-black">Colorful office redesign</p>
                    <p className="text-gray-500 text-sm">{"03 Aug 2022"}</p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FAF4F4] items-center  justify-between gap-6  h-[300px] mt-8">
          <div>
            <h1 className="font-medium lg:text-[32px] text-[25px]">
              Free Delivery
            </h1>
            <p className="lg:text-[20px] text-[15px]">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          <div className="">
            <h1 className="font-medium lg:text-[32px] text-[25px] ">
              90 Days Return
            </h1>
            <p className="lg:text-[20px] text-[15px]">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          <div>
            <h1 className="font-medium lg:text-[32px] text-[25px]">
              Secure Payment
            </h1>
            <p className="lg:text-[20px] text-[15px]">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>


    </div>
  );
};

export default BlogPage;
