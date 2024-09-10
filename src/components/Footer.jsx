import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
    <div className='max-w-screen-lg mx-auto py-10 flex gap-32 '>
    <div className='basis-1/2 '>
    <h1 className='text-[11rem] font-semibold leading-none tracking-tight '>refokus.</h1>
    </div>
    <div className='basis-1/2 flex gap-6'>
    <div className='basis-1/3 '>
    <h4 className='mb-7 text-zinc-500 capitalize'>socials</h4>
    {["instagram","twitter (x?)","LinkedIn",].map((item,index)=>(
        <a key={index} className='block mt-2 text-zinc-600 capitalize'>{item}</a>
    ))}
    </div>
    <div className='basis-1/3 '>
    <h4 className='mb-7 text-zinc-500 capitalize'>sitemap</h4>
    {["home","work","careers","contact"].map((item,index)=>(
        <a key={index} className='block mt-2 text-zinc-400 capitalize'>{item}</a>
    ))}
    </div>
    <div className='basis-1/2 flex flex-col items-end'>
    <p className='text-right '>Refokus is a pioneering digital agency driven by design.</p>
    <img  className="w-28 mt-7" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer