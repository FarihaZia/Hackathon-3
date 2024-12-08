import { Button } from '@/components/ui/button'
import React from 'react'

function InstaSection() {
  return (
    <section className="bg-[url('/Images/bg.png')] py-12 px-6 mx-auto max-w-7xl h-[450px]">
      <div className="container ">
   
        <div className="text-center mt-10">
          <h2 className="text-3xl lg:text-[60px] font-bold mb-6">Our Instagram</h2>
          <p className="text-[#9F9F9F] font-medium text-[20px] max-w-2xl mx-auto">
           Follow our store on instagram
          </p>
          <Button variant={"secondary"} className='rounded-full w-[255px] h-[64px] text-[20px] mt-5 bg-[#FAF4F4] shadow-lg transition duration-300 ease-in-out transform hover:bg-[#f0e8e8] hover:scale-105 hover:shadow-xl'> Follow Us</Button>
        </div>
        </div>
        </section>
        
  )
}

export default InstaSection