
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewArrival = () => {
  return (
    <div className='bg-[#FBEBB5] max-w-7xl mx-auto  flex flex-col-reverse lg:flex-row item-center justify-between px-6  lg:h-[639px]'>
        
    {/* right side */}
    <div className='flex justify-center lg:justify-end '>
<Image src={"/Images/mainsofa.svg"} alt='sofa' width={800} height={799} className='lg:pl-10 '/>
    </div>
        
        {/* left side */}
    
<div className='text-center   lg:mt-36 '>
    <p>New Arrival</p>
    <h1 className='font-bold text-[32px] lg:text-[40px] leading-tight mb-4'>Asgaard Sofa</h1>
    <Link href={"/singleproduct"} className='outline-black outline outline-1 p-1 mt-4 inline-block'>Order Now</Link>

</div>



    </div>

  )
}

export default NewArrival