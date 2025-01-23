import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


function SingleProduct() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center space-x-5 w-full h-[100px]  py-5 px-4">
        <Link href={"/shop"}>
          {" "}
          <span className="text-[#9F9F9F]  text-[16px]  ">Home</span>
        </Link>
        <span className="text-black  font-medium ">{">"}</span>
        <span className="text-[#9F9F9F]  text-[16px]">Shop</span>
        <span className="text-black  font-medium">{">"}</span>
        <span className="text-[#9F9F9F]">|</span>
        <span className="text-black  font-medium flex">Asgaard Sofa</span>
      </div>

      <div className="flex flex-col-reverse lg:flex-row item-center justify-between px-6 lg:px-16 py-16 ">
        {/* left side */}
        <div>
          <Image
            src={"/Images/Group 102.svg"}
            alt="Asgaard Sofa"
            width={553}
            height={500}
          ></Image>
        </div>

        {/* right side */}
        <div className=" lg:mr-48 ">
          <h1 className="font-medium text-[30px] lg:text-[42px] leading-tight mb-4">
            Asgaard Sofa{" "}
          </h1>
          <h1 className="font-medium text-[24px] text-[#9F9F9F]">
            Rs. 250,000.00
          </h1>
          <p className="text-[#9F9F9F] ">⭐⭐⭐⭐ | 5 Customer Review</p>
          <p className="font-[13px] w-56">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <p className="text-[14px] text-[#9F9F9F] mt-2">Size</p>
          <div className="flex gap-2 mt-2">
            <button className="w-12 h-12 rounded-xl border flex items-center justify-center text-sm font-medium text-black bg-[#9F9F9F] hover:bg-[#FBEBB5] transition-all">
              L
            </button>
            <button className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-sm font-medium text-black bg-[#9F9F9F] hover:bg-[#FBEBB5] transition-all">
              M
            </button>
            <button className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-sm font-medium text-black bg-[#9F9F9F] hover:bg-[#FBEBB5] transition-all">
              S
            </button>
          </div>
          <p className="text-[14px] text-[#9F9F9F] mt-2"> Color</p>
          <div className="flex gap-2 mt-2">
            <button className="w-12 h-12 rounded-full border flex items-center justify-center text-sm font-medium  bg-[#816DFA]  transition-all"></button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium  bg-black  transition-all"></button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium  bg-[#CDBA7B]  transition-all"></button>
          </div>

          <div className="flex gap-5 ">
            <Button
              variant={"ghost"}
              className="w-[123px] h-[64px] flex items-center justify-center text-black  py-2  mt-4 px-6 outline outline-1 outline-gray-400 hover:bg-slate-400 rounded "
            >
              {" "}
              - 1 +{" "}
            </Button>
            <Button
              variant={"ghost"}
              className="w-[215px] h-[64px] flex items-center justify-center text-black  py-2  mt-4 px-6 outline outline-1 outline-black hover:bg-red-500 rounded text-[20px] "
            >
              Add to Cart
            </Button>
          </div>

          <div className="border-t-2 border-gray-300 mt-8 "></div>

          <div className=" sm:items-center sm:justify-center text-[#9F9F9F]">
            <div className="flex lg:justify-between lg:mr-60 ">
              <p>SKU</p>
              <p className="">: SS001</p>
            </div>

            <div className="flex lg:justify-between lg:mr-60 text-[#9F9F9F] ">
              <p>Category</p>
              <p className="">: Sofas</p>
            </div>

            <div className="flex lg:justify-between lg:mr-28 text-[#9F9F9F] ">
              <p>Tags</p>
              <p className="">: Sofa ,Chair,Home,Shop</p>
            </div>

            <div className="flex lg:justify-between lg:mr-52 mb-4 text-[#9F9F9F]">
              <p>Share</p>
              <p className="flex gap-2">
                : <FaFacebook className="mt-1 text-black" />{" "}
                <FaLinkedin className="mt-1 text-black" />{" "}
                <AiFillTwitterCircle className="mt-1 text-black" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 "></div>
    </div>
  );
}

export default SingleProduct;
