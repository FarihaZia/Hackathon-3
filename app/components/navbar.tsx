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
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full p-4">
      <div className="max-w-7xl mx-auto flex item-center justify-between">

        <div className="hidden md:flex md:items-center gap-10 mt-2 mx-auto">
          <Link href={"/"} className="text-[16px] font-medium hover:underline ">
            Home
          </Link>
          <Link href={"/shop"} className="text-[16px] font-medium hover:underline">
            shop
          </Link>
          <Link href={"/about"} className="text-[16px] font-medium hover:underline">
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
          
       
          <div>
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
           <Link href={"/signup"}>   <User /></Link>
            </Button>
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Search />
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Heart />
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
             <Link href={"/cart"}> <ShoppingCart /></Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden">
          <div className="">
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Heart />
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <Link href={"/cart"}>    <ShoppingCart /></Link>
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
           <Link href={"/signup"}  > <User /></Link>
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
