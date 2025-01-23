"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/cart-context"; // Import the useCart hook
import { urlFor } from "@/sanity/lib/image";
import Middlebar from "../components/middlebar";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

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
          <h1 className="font-medium text-[48px] -mt-5">Cart</h1>

          <nav className="text-black text-sm  mt-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <Link href={"/cart"}>
              {" "}
              <span className="hover:underline ">Cart</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between p-4 gap-8">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          {/* Header Row */}
          <div className="flex md:gap-16 gap-4 bg-[#FFF9E5] h-[55px] p-2 pl-6 text-black font-medium">
            <div className="w-1/4">Product</div>
            <div className="w-1/4">Price</div>
            <div className="w-1/4">Quantity</div>
            <div className="w-1/4">SubTotal</div>
          </div>

          {/* Product Row */}
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 border-b"
              >
                <div className="w-[106px] h-[106px] flex-shrink-0">
                  <Image
                    src={
                      item.image ? urlFor(item.image).url() : "/placeholder.jpg"
                    }
                    alt={item.name}
                    width={106}
                    height={106}
                  />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <div className="w-1/4 text-gray-800">{item.name}</div>
                  <div className="w-1/4 text-gray-800 text-center">
                    Rs.{item.price}
                  </div>
                  <div className="w-1/4 text-gray-800 text-center">
                    {item.quantity}
                  </div>
                  <div className="w-1/4 text-gray-800 text-right">
                    Rs.{item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        {/* Right Section */}
        <div className="w-[393px] h-[390px] md:w-1/3 bg-[#FFF9E5] rounded-lg shadow-lg p-6">
          {/* Total and Checkout Section */}
          <h2 className="text-[32px] text-center font-semibold text-black mb-8">
            Cart Items
          </h2>
          <div className="flex justify-between mb-6">
            <span className="font-medium text-[16px] text-black">Subtotal</span>
            <span className="font-medium text-[16px] text-[#B88E2F]">
              Rs.
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
          </div>
          <div className="flex justify-between mb-10">
            <span className="text-gray-800 font-bold">Total</span>
            <span className="text-gray-800 font-bold">
              Rs.
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
          </div>
          <Link href="/checkout">
            <button className="w-full bg-[#FAF4F4] text-gray-800 font-medium rounded-lg py-2 hover:bg-gray-200 transition">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <Middlebar />
    </div>
  );
};

export default Cart;
