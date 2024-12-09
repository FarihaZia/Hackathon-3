"use client"
import Image from "next/image";
import React, { useState } from "react";

const RelatedProducts = () => {
  const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/Images/sofa2.svg" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/Images/diningtable.svg" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/Images/console.svg" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/Images/mirror.svg" },
    { id: 5, name: "Plain console_", price: "Rs. 25,000.00", image: "/Images/console2.svg" },
    { id: 6, name: "Side Table", price: "Rs. 258,800.00", image: "/Images/table.svg" },
    { id: 7, name: "Sofa", price: "Rs. 250,000.00", image: "/Images/sofa.svg" },
    { id: 8, name: "Reclaimed teak Sideboard", price: "Rs.20,000.00", image: "/Images/cupboard.svg" },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleViewMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  const handleViewLess = () => {
    setVisibleProducts((prev) => Math.max(prev - 4, 4));
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-[36px] font-bold mb-2">Related Products</h2>
          
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className=" p-4 flex flex-col  bg-white hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={287}
                height={287}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text[16px]  mb-2">{product.name}</h3>
              <p className=" font-medium text-[24px]">{product.price}</p>
            </div>
          ))}
        </div>

         {/* View More / View Less Buttons */}
         <div className="mt-8 text-center flex gap-4 justify-center">
          {visibleProducts < products.length && (
            <button
              onClick={handleViewMore}
              className="font-medium text-[20px] underline px-6 py-2 rounded hover:bg-slate-200 transition-colors"
            >
              View More
            </button>
          )}
          {visibleProducts > 4 && (
            <button
              onClick={handleViewLess}
              className="font-medium text-[20px] underline px-6 py-2 rounded hover:bg-slate-200 transition-colors"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </section>

  );
};

export default RelatedProducts;
