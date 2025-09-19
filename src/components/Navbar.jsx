import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div className='w-[100vw] h-[8vh] flex justify-between border-2 border-black items-center bg-black text-white'>
        <div className="left flex justify-center items-center">
          <img src="logo.png" alt="logo" height={86} width={86} />
        <div><Link to="/">Hydra</Link></div>
        </div>
        <div className="right">
            <ul className='flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/KnowMore" className='mr-[25px]'>Know More</Link></li>
                {/* <li><a href="/analyse" className='mr-2'>Analyse</a></li> */}
            </ul>
        </div>
      
    </div>
  )
}

export default navbar
