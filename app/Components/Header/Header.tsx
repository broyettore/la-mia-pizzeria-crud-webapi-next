import React from 'react'
import Navbar from './HeaderCompnents/Navbar'

const Header = () => {
  return (
    <>
    <header>
        <div className="container mx-auto flex justify-between items-center py-5">
            <h1 className='font-bold text-xl'>Heaven's Slice</h1>
            <Navbar />
        </div>
    </header>
    </>
  )
}

export default Header