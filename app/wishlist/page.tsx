"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const router = useRouter();

  const handleRemoveFromWishlist = (id: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== id)
    );
  };

  const handleContinueShopping = () => {
    router.push("/shop");
  };

  return (
    <div className="max-w-7xl mx-auto py-16">
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
          <h1 className="font-medium text-[48px] -mt-5">Wishlist</h1>

          <nav className="text-black text-sm  mt-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <Link href={"/wishlist"}>
              {" "}
              <span className="hover:underline ">wishlist</span>
            </Link>
          </nav>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div key={item._id} className="border rounded-lg p-4">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded"
                />
                <h2 className="text-lg font-bold mt-4">{item.name}</h2>
                <p className="text-gray-500">Rs. {item.price}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(item._id)}
                  className="text-red-500 underline mt-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleContinueShopping}
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-500">Your wishlist is empty.</p>
          <button
            onClick={handleContinueShopping}
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
