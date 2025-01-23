"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Middlebar from "../components/middlebar";
import FAQPage from "../components/faqs";

const Contact = () => {
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
          <h1 className="font-medium text-[48px] -mt-5">My Account</h1>

          <nav className="text-black text-sm  mt-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <Link href={"/checkout"}>
              {" "}
              <span className="hover:underline ">My Account</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-5 py-10">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 mb-8 ">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📍</span>
              <div>
                <h4 className="text-lg font-semibold ">Address</h4>
                <p className="w-40">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📞</span>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>Mobile: (+84) 546-6789</p>
                <p>Hotline: (+84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <span className="text-xl">⏰</span>
              <div>
                <h4 className="text-lg font-semibold">Working Time</h4>
                <p>Monday–Friday: 9:00–22:00</p>
                <p>Saturday–Sunday: 9:00–21:00</p>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-black py-7"
                >
                  Your name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full p-3 border border-gray-300 rounded-xl "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-black pb-7"
                >
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="abc@def.com"
                  className="w-full p-3 border border-gray-300 rounded-xl "
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-medium text-black pb-7"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full p-3 border border-gray-300 rounded-xl "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-black pb-7"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about"
                  className="w-full p-3 border border-gray-300 rounded-xl "
                  rows={4}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[237px] h-[48px] bg-white outline outline-gray-800 outline-1 
           text-black py-3 rounded-2xl hover:bg-gray-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <FAQPage />
      <Middlebar />
    </div>
  );
};

export default Contact;
