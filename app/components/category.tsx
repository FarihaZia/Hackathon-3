"use client"
import React from "react";
import { useState } from "react";

const ProductList = () => {
  const Products = [
    {
      id: 1,
      name: "Side Table",
      image: "/Images/table.svg",
      price: "Rs.258,800.00",
      color: "Brown",
      description: "Granite square side table."
    },
    {
      id: 2,
      name: "Side Table",
      image: "/Images/sofa.svg",
      price: "Rs.250,000",
      color: "White",
      description: "Cloud Sofa three seater."
    },
  
  
  ];
  const [expanded, setExpanded] = useState([false, false]);

  const toggleDetails = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index]; 
    setExpanded(newExpanded);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#FAF4F4]">
      
      <div className="flex flex-wrap justify-center gap-8">
        {Products.map((product, index) => (
          <div
            key={product.id}
            className=" rounded-lg  overflow-hidden bg-[#FAF4F4] p-4 sm:w-64 md:w-80 lg:w-96 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[605px] object-contain mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-center mb-4">{product.name}</h3>

    
            {expanded[index] && (
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Color:</strong> {product.color}</p>
                <p><strong>Description:</strong> {product.description}</p>
              </div>
            )}

          
            <button
              onClick={() => toggleDetails(index)}
              className="mt-4 text-blue-500 hover:text-blue-700 transition-colors"
            >
              {expanded[index] ? "View Less" : "View More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

 
export default ProductList;
