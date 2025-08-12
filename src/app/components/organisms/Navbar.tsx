import React from 'react'
import Logo from '../atoms/Logo'

const Navbar = () => {
  return (
    <div className='py-4 container shadow sticky top-0 z-50 bg-white/30 backdrop-blur-md'>
        <Logo />
    </div>
  )
}

export default Navbar