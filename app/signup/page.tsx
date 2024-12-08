import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SignUp =()=>{
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
            <h1 className="font-medium text-[48px] -mt-5">My Account</h1>
  
           
            <nav className="text-black text-sm  mt-3">
              <a href="/" className="font-bold">
                Home
              </a>
              <span className="mx-2 font-bold">{">"}</span>
          <Link href={"/checkout"}   > <span className="hover:underline ">My Account</span></Link>
            </nav>
          </div>
        </div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
  
    <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-black  text-[36px] font-semibold mb-5">Log In</h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Username or email address</label>
        <Input type="text" id="full-name" name="full-name" className=" bg-white rounded border border-gray-400 w-[423px] h-[75px] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
        <Input type="email" id="password" name="password" className=" bg-white rounded border border-gray-400 w-[423px] h-[75px] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className='flex justify-center gap-4'>
      <button className=' rounded-lg w-6 h-6 outline outline-gray-200 outline-1 mb-4'></button>
      <p className=" text-[16px] text-black">Remember Me</p>
      </div>
      <button className="text-black  border-0 outline outline-1 py-2 px-8 w-[215px] h-[64px] hover:bg-indigo-600 rounded-xl ">Log In</button>
      
    </div>

    <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 lg:mr-14">
      <h2 className="text-black text-[36px] font-semibold  mb-5">Register</h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Email address</label>
        <Input type="text" id="full-name" name="full-name" className="w-[423px] h-[75px] bg-white rounded border border-gray-400   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    <p className='mb-3'>
    A link to set a new password will be sent to your email address.
    </p>

    <p className='mb-6'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
      <button className="text-black border-0 py-2 px-8 outline outline-1  hover:bg-indigo-600 rounded-xl text-lg w-[215px] h-[64px]">Button</button>

    </div>
  
  </div>
</section>
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


        </div>)}
        export default SignUp
  