import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#FBEBB5] max-w-7xl mx-auto -mt-20 flex flex-col-reverse lg:flex-row item-center justify-between px-6 lg:px-16 py-16 lg:h-[900px]'>
        
    
<div className='text-center lg:text-left lg:pl-9 lg:mt-36 '>
    <h1 className='font-medium text-[32px] lg:text-[64px] leading-tight mb-4'>Rocket Single <br/> seater</h1>

<Link href={"/shop"} className='underline text-blue-500 text-lg lg:text-xl mt-4 inline-block'>Shop Now</Link>
</div>


    {/* right side */}
    <div className='flex justify-center lg:justify-end'>
<Image src={"/Images/hero.svg"} alt='sofa' width={853} height={1000} className='lg:pl-10 '/>
    </div>

    </div>

  )
}

export default Hero