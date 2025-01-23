"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import RelatedProducts from "../singleproduct/relatedprod";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity };
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, cartItem];
    });
    setIsCartOpen(true);
  };

  const handleAddToWishlist = () => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prevQuantity) =>
      type === "increase" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  const handleCartUpdate = (id: string, type: "increase" | "decrease") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-5 w-full h-[100px] py-5 px-4">
        <Link href={"/shop"}>
          <span className="text-[#9F9F9F] text-[16px]">Home</span>
        </Link>
        <span className="text-black font-medium">{">"}</span>
        <span className="text-[#9F9F9F] text-[16px]">{product.category}</span>
        <span className="text-black font-medium">{">"}</span>
        <span className="text-black font-medium flex">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-16">
        <div>
          <Image
            src={
              product.image ? urlFor(product.image).url() : "/placeholder.jpg"
            }
            alt={product.name}
            width={553}
            height={500}
            className="rounded"
          />
        </div>

        <div className="lg:mr-48">
          <h1 className="font-medium text-[30px] lg:text-[42px] leading-tight mb-4">
            {product.name}
          </h1>
          <h1 className="font-medium text-[24px] text-[#9F9F9F]">
            Rs. {product.price}
          </h1>
          <p className="text-[#9F9F9F]">⭐⭐⭐⭐ | 5 Customer Reviews</p>
          <p className="font-[13px] w-56">{product.description}</p>

          {/* Quantity */}
          <p className="text-[14px] text-[#9F9F9F] mt-2">Quantity</p>
          <div className="flex items-center gap-2 mt-2">
            <Button
              variant="ghost"
              onClick={() => handleQuantityChange("decrease")}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              variant="ghost"
              onClick={() => handleQuantityChange("increase")}
            >
              +
            </Button>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-5 mt-4">
            <Button variant="ghost" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="ghost" onClick={handleAddToWishlist}>
              <FaHeart />
            </Button>
          </div>
        </div>
      </div>
      <RelatedProducts />
      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-xl z-50">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-bold">Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
          <div className="p-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <Image
                  src={
                    item.image ? urlFor(item.image).url() : "/placeholder.jpg"
                  }
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <div className="ml-4">
                  <p>{item.name}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => handleCartUpdate(item.id, "decrease")}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="ghost"
                      onClick={() => handleCartUpdate(item.id, "increase")}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <Link href="/cart">
            <Button className="w-full">Go to Cart</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
