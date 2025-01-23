import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface ProductListingProps {
  products: Product[];
  productsPerPage: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const ProductListing: React.FC<ProductListingProps> = ({
  products,
  productsPerPage,
  currentPage,
}) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <Link href={`Product/${product._id}`}>
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={393}
                height={393}
                className="w-full h-[287px] object-contain rounded"
              />
            </Link>
            <h3 className="mt-4 text-[16px]">{product.name}</h3>
            <p className="text-black font-medium text-[24px]">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
