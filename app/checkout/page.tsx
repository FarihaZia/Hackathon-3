import Image from "next/image";
import Link from "next/link";

import Details from "./detail.";


const Checkout =()=>{
  return(
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
    <h1 className="font-medium text-[48px] -mt-5">CheckOut</h1>

   
    <nav className="text-black text-sm  mt-3">
      <Link href="/" className="font-bold">
        Home
      </Link>
      <span className="mx-2 font-bold">{">"}</span>
  <Link href={"/checkout"}   > <span className="hover:underline ">Checkout</span></Link>
    </nav>
  </div>



</div>


<div className="">

<Details/>
<div className="flex bg-[#FAF4F4] items-center  justify-between gap-6  h-[300px]">
          <div>
            <h1 className="font-medium lg:text-[32px] text-[25px]">
              Free Delivery
            </h1>
            <p className="lg:text-[20px] text-[15px]">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          <div className="">
            <h1 className="font-medium lg:text-[32px] text-[25px] ">
              90 Days Return
            </h1>
            <p className="lg:text-[20px] text-[15px]">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          <div>
            <h1 className="font-medium lg:text-[32px] text-[25px]">
              Secure Payment
            </h1>
            <p className="lg:text-[20px] text-[15px]">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>




</div>

</div>








)}

export default Checkout