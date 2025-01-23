import Middlebar from "@/app/components/middlebar";
import ProductDetail from "@/app/components/ProductDetail";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  console.log("ID Passed:", id);
  const query = `*[_type == "product" && _id == $id]{
 "id":_id,  
 name,
    description,
    price,
    category,
    "image":image.asset._ref,
    
  }[0]`;

  const product: Product | null = await client.fetch(query, { id });
  if (!product) {
    return (
      <div>
        <h1>Products not found</h1>
      </div>
    );
  }
  return (
    <div>
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
          <h1 className="font-medium text-[48px] -mt-5">Product Details</h1>

          <nav className="text-black text-sm  mt-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <Link href={"/productdetail"}>
              {" "}
              <span className="hover:underline ">product detail</span>
            </Link>
          </nav>
        </div>
      </div>

      <ProductDetail product={product} />
      <Middlebar />
    </div>
  );
};

export default page;
