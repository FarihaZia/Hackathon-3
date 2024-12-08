"use client"

import { useState } from "react";
import Image from "next/image";

const ProductGrid = () => {
 
  const products = [
    { id: 1, title: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/Images/product1.svg" },
    { id: 2, title: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/Images/product2.svg" },
    { id: 3, title: "Granite square side table", price: "Rs. 25,000.00", image: "/Images/product3.svg" },
    { id: 4, title: "Asgaard sofa", price: "Rs. 25,000.00", image: "/Images/product4.svg" },
    { id: 5, title: "Maya sofa three seater", price: "Rs. 25,000.00", image: "/Images/product5.svg" },
    { id: 6, title: "Outdoor sofa set", price: "Rs. 25,000.00", image: "/Images/product6.svg" },
    { id: 7, title: "Plain console_", price: "Rs. 25,000.00", image: "/Images/product7.svg" },
    { id: 8, title: "Reclaimed teak Sideboard", price: "Rs. 25,000.00", image: "/Images/product8.svg" },
    { id: 9, title: "SJP_0825 ", price: "Rs. 25,000.00", image: "/Images/product9.svg" },
    { id: 10, title: "Bella chair and table", price: "Rs. 25,000.00", image: "/Images/product10.svg" },
    { id: 11, title: "Kent coffee table", price: "Rs. 25,000.00", image: "/Images/product11.svg" },
    { id: 12, title: "Round coffee table_color 2", price: "Rs. 25,000.00", image: "/Images/product12.svg" },
    { id: 13, title: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/Images/product13.svg" },
    { id: 14, title: "Reclaimed teak Sideboard", price: "Rs. 25,000.00", image: "/Images/product14.svg" },
    { id: 15, title: "Reclaimed teak coffee table", price: "Rs. 25,000.00", image: "/Images/product15.svg" },
    { id: 16, title: "Plain console", price: "Rs. 25,000.00", image: "/Images/product16.svg" },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-white py-12 px-8">
      <div className="container ">

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 hover:shadow-xl transition-shadow">
              <Image
                src={product.image}
                alt={product.title}
                width={393}
                height={393}
                className="w-full h-[287px] object-contain rounded"
              />
              <h3 className="mt-4 text-[16px]">{product.title}</h3>
              <p className="text-black font-medium text-[24px]">{product.price}</p>
            </div>
          ))}
        </div>

 
        <div className="mt-8 flex justify-center items-center gap-4">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-white text-black"
              } rounded`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => (prev < 3 ? prev + 1 : 1))}
            className="px-4 py-2 border bg-white text-black rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;

