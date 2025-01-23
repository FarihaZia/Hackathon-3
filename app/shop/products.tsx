"use client";

import { useState, useEffect } from "react";
import ProductListing from "../components/productlisting";
import Pagination from "../components/pagination";
import { client } from "@/sanity/lib/client";
import Filter from "../components/filter";


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
    "image":image.asset._ref
  }`;
  return await client.fetch(query);
};

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Editable product count per page
const [filteredProducts , setFilteredProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const handleFilter = (minPrice: number , maxPrice : number) => {
    const newFilteredProducts = products.filter(
      (product) => product.price >= minPrice && product.price<= maxPrice
    )
    setFilteredProducts(newFilteredProducts);
    setCurrentPage(1)
  };
  const handleReset = () => {
    setFilteredProducts(products); // Reset filtered products to show all
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="bg-pink-100 py-12 px-8">
      <div className="container">
        <Filter onFilter={handleFilter} onReset={handleReset}/>
        <ProductListing
          products={filteredProducts}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <Pagination
          totalItems={filteredProducts.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
