"use client";
import React from "react";
import Image from "next/image";
import { TbCarouselVertical } from "react-icons/tb";
import { PiCirclesFourFill } from "react-icons/pi";
import { LiaSlidersHSolid } from "react-icons/lia";

import ProductGrid from "./products";
import Link from "next/link";

import Middlebar from "../components/middlebar";

const MainHeader = () => {
  return (
    <div className="max-w-7xl mx-auto">
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
          <h1 className="font-medium text-[48px] -mt-5">Shop</h1>

          <nav className="text-black text-sm  mt-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <span className="hover:underline ">Shop</span>
          </nav>
        </div>
      </div>

      <div className="bg-[#FAF4F4] w-full py-5 mt-5  ">
        <div className="container flex flex-wrap items-center justify-between px-4 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <LiaSlidersHSolid className="h-6 w-6 text-black " />
              <span className="text-black text-sm font-medium hidden md:flex">
                Filter
              </span>
            </div>

            <PiCirclesFourFill className=" h-6 w-6 text-black" />

            <div className="flex items-center space-x-2">
              <TbCarouselVertical className="h-6 w-6 text-black hidden md:flex" />
            </div>

            <span className="text-black">|</span>

            <span className="text-black text-sm text-[20px]">
              Showing 1-8 of 21 results
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="show-results" className="text-sm text-black">
                Show
              </label>
              <select
                id="show-results"
                className="bg-white  text-[#9F9F9F] text-sm rounded-md px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-sm text-black">
                Sort by
              </label>
              <select
                id="sort-by"
                className="bg-white text-[#9F9F9F] text-sm rounded-md px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="default">Default</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <ProductGrid />
      <Middlebar />
    </div>
  );
};

export default MainHeader;
