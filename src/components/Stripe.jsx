import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.6666%] h-1  px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between overflow-hidden'>
    <img className="object-cover object-top w-[60%] " src={val.url} alt="" />
    <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe