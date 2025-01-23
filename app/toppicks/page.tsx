"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ProductListing from "../components/productlisting"; // Import the reusable ProductListing component

// Fetch products from Sanity
const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset._ref
  }`;
  return await client.fetch(query);
};

const TopPicks = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(4); // Default number of products to display

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleViewMore = () => {
    setProductsPerPage(8); // Show all 8 products when "View More" is clicked
  };

  const handleViewLess = () => {
    setProductsPerPage(4); // Reset to 4 products when "View Less" is clicked
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-[36px] font-bold mb-2">
            Top Picks For You
          </h2>
          <p className="text-[#9F9F9F] font-medium text-[16px] max-w-2xl mx-auto">
            Find a bright idea to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
        </div>

        {/* Product Listing */}
        <div>
          <ProductListing
            products={products.slice(0, productsPerPage)}
            productsPerPage={productsPerPage}
            currentPage={1} //
            onPageChange={() => {}}
          />
        </div>

        {/* View More / View Less Buttons */}
        <div className="mt-8 text-center flex gap-4 justify-center">
          {productsPerPage < 8 && (
            <button
              onClick={handleViewMore}
              className="font-medium text-[20px] underline px-6 py-2 rounded hover:bg-slate-200 transition-colors"
            >
              View More
            </button>
          )}
          {productsPerPage > 4 && (
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

export default TopPicks;
