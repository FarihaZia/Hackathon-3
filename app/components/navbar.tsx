"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";

import React, { useState } from "react";
import CategoryList from "./categorylist";
import SearchBar from "./searchbar";

const Navbar = () => {
  const categories = ["Sofa", "Chair", "Table", "Bed"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className=" w-full p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex relative">
          <h1 className="text-2xl font-bold">Simply Furnish</h1>

          <div className=" text-gray-700">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              {/* Hamburger Menu (Visible Only on Large Screens) */}

              <button
                onClick={toggleMenu}
                className="text-2xl focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 bg-gray-700 text-white rounded-lg shadow-md mt-2 w-48">
                  <ul className="flex flex-col space-y-2 p-4">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={`/category/${category}`}
                          className="hover:underline block"
                          onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:items-center gap-10 mt-2 mx-auto">
          <Link href={"/"} className="text-[16px] font-medium hover:underline ">
            Home
          </Link>
          <Link
            href={"/shop"}
            className="text-[16px] font-medium hover:underline"
          >
            shop
          </Link>
          <Link
            href={"/about"}
            className="text-[16px] font-medium hover:underline"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-[16px] font-medium hover:underline"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex   gap-4">
          <SearchBar />
          <div>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Link href={"/signup"}>
              
                <User />
              </Link>
            </Button>

            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Link href={"/wishlist"}>
                <Heart />
              </Link>
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Link href={"/cart"}>
                
                <ShoppingCart />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden">
          <div className="">
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Link href={"/wishlist"}>
                {" "}
                <Heart />
              </Link>
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Link href={"/cart"}>
                {" "}
                <ShoppingCart />
              </Link>
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Link href={"/signup"}>
                {" "}
                <User />
              </Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger className=" ">
              <Menu className="size-4 text-gray-400 mr-2" />
            </SheetTrigger>
            <SheetContent side={"right"} className="bg-white">
              <SheetHeader className="flex items-start">
                <SheetTitle>Welcome!</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                <Link href={"/"} className="text-sm font-normal">
                  Home
                </Link>
                <Link href={"/shop"} className="text-sm font-normal">
                  Shop
                </Link>
                <Link href={"/about"} className="text-sm font-normal">
                  About
                </Link>
                <Link href={"/contact"} className="text-sm font-normal">
                  Contact
                </Link>
                <h1 className="text-2xl font-bold">Categories:</h1>
                <CategoryList categories={categories} />
                <div className="mt-4 gap-4">
                  <div className="relative">
                    <Input
                      placeholder="Search"
                      className="bg-[#f5f5f5] rounded border-[#f5f5f5] w-[246px] "
                    />
                    <Search className="absolute right-2 top-2 text-gray-600" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
