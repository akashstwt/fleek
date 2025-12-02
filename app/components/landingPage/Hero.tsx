import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react';
import Image from "next/image";
import NewLogo from "@/public/w3e.png";

const Hero = () => {
  return (
    <section>
        <div className=' h-[60vh] md:h-[40%] w-full m-8 md:mt-24 md:ml-32  flex   flex-col md:flex-row  justify-start items-start'>
        <div className="relative  w-[60%] m-8 md:m-18 flex flex-col justify-start gap-6 md:gap-12 items-start">
            <h1 className='text-3xl md:text-5xl  font-bold w-64 md:w-[75%] text-gray-200' >Build and deploy autonomous apps and AI agents </h1>
            <h2 className='md:text-lg text-md md:w-[65%] w-80 font-bold opacity-60 ' >w3e makes it easy to build and deploy next-generation apps and AI agents in minutes on an open-source, verifiable, auto-scalable cloud platform. </h2>
            <div className='flex gap-4'>
                <Button variant='yellow'>
                    Deploy an agent
                </Button>
                <Button variant='link' >
                    Learn More  <ChevronRight />
                </Button>

         </div>
            </div>
        <div className=" h-full w-[80%] md:w-[40%] flex flex-col justify-start mb-56 md:mt-8 items-center md:items-start  ">
			<div className="rounded-lg" />
							<Image
								src={NewLogo}
								alt="logo"
								priority
								className=" h-[90%] md:h-[60%] w-[60%] drop-shadow-[0_0_15px_rgba(201,255,120,0.3)]"
							/>
			</div>
        
        </div>
    </section>
  )
}

export default Hero