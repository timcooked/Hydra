import { useState } from 'react'
import Navbar from './components/Navbar'
import Form from "./components/Forms"
// import Facts from "./components/Facts"
const Home = () => {
  return (
      <div>

      <Navbar />
      <div className='w-[100vw] flex flex-col justify-center items-center bg-gray-300'>
        <Form />
        <h1 className='text-3xl font-bold underline'>HOW WE WORK</h1>
        <div className=' flex h-[60vh] w-[100vw] mt-32 gap-16 justify-center items-center'>
            <div className='relative border-2 border-black h-[55vh] w-[20vw] rounded-3xl'>
                <div className='bg-red-700 text-white text-8xl font-bold absolute top-[-32px] right-[-32px] rounded-[56px] w-[7vw] h-[7vw] text-center'>1</div>
                <h1 className='font-bold text-6xl absolute left-0'>Step</h1>
                <div className='mt-[100px] text-center text-lg max-w-[15vw] mx-auto'>Provide your rooftop area, family size, storage tank capacity, and roof type. This helps us understand your household’s water requirements and available collection potential. Accurate details ensure precise calculations of how much rainwater you can harvest.</div>
            </div>
            <div className='relative border-2 border-black h-[55vh] w-[20vw] rounded-3xl'>
                <div className='bg-red-700 text-white text-8xl font-bold absolute top-[-32px] right-[-32px] rounded-[56px] w-[7vw] h-[7vw] text-center'>2</div>
                <h1 className='font-bold text-6xl absolute left-0'>Step</h1>
                <div className='mt-[100px] text-center text-lg max-w-[15vw] mx-auto'>We process your inputs with daily rainfall data to show how much water you can collect each day and month. You’ll also see how much water might overflow to recharge the groundwater, giving a clear picture of both personal and environmental benefits.</div>
        </div>
            <div className='relative border-2 border-black h-[55vh] w-[20vw] rounded-3xl'>
                <div className='bg-red-700 text-white text-8xl font-bold absolute top-[-32px] right-[-32px] rounded-[56px] w-[7vw] h-[7vw] text-center'>3</div>
                <h1 className='font-bold text-6xl absolute left-0'>Step</h1>
                <div className='mt-[100px] text-center text-lg max-w-[15vw] mx-auto'>Explore your potential savings in terms of water costs and the positive impact on groundwater replenishment. This step highlights the financial and ecological value of implementing rainwater harvesting, making it easy to see the return on your efforts.</div>
        </div>
        </div>
        {/* <Facts /> */}
      </div>
    </div>
  )
}

export default Home
