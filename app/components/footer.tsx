import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap  text-center -mb-10 -mx-4 ">
            <div className="lg:w-1/6  w-full px-4 ">
              <p>400 University Drive Suit 200 Coral</p>
              <p>Gables</p>
              <p>FL 33134 USA</p>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
                Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"#"} className="font-medium">Home</Link>
                </li>
                <li>
                <Link href={"#"}className="font-medium">Shop</Link>
                </li>
                <li>
                <Link href={"#"}className="font-medium">About</Link>
                </li>
                <li>
                <Link href={"#"}className="font-medium">Contact</Link>
                </li>
              </nav>
            </div>
           
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
                Help
              </h2>
              <nav className="list-none mb-10">
                <li>
                <Button variant={"ghost"}>Payment Options</Button>
                </li>
                <li>
                <Button variant={"ghost"}>Returns</Button>
                </li>
                <li>
                <Button variant={"ghost"}>Privacy Policies</Button>
                </li>
                
                
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
                Newsletter
              </h2>
              <div className="flex  ">
              <Input
                      placeholder="Enter Your Email"
                      className=" underline border-white focus:outline-none  w-36 py-1 "
                    />
                     <Button variant={"ghost"}  className="underline  text-black font-bold hover:text-blue-700">SUBSCRIBE</Button>
                   
              </div>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4"></div>
          </div>
        </div>
       
        <div className="bg-white w-full border-t-2 border-gray-300 p-4">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center sm:justify-start justify-center ">
            <p className="text-black  text-sm text-center sm:text-left">
            2022 Meubel House. All rights reverved
            </p>
          </div>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;