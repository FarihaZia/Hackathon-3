import React from "react";

const Middlebar = () => {
  return (
    <div>
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
  );
};
export default Middlebar;
