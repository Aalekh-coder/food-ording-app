import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 flex px-5 items-center justify-between md:px-14 md:mt-5'>
        <div style={{ fontFamily: "'Caveat', cursive" }} className='text-3xl'>
            Masala Story
        </div>
        <div className='px-3 rounded-full py-3 bg-rose-500 relative'>
            <span className='h-5 w-5 bg-rose-300 absolute top-0 -left-1 flex items-center justify-center rounded-full'>5</span>
            <ShoppingCart />
        </div>
    </div>
  )
}

export default Navbar