import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <ul className='flex items-center'>
        <li className='mx-3'>
          <Link href="/" className='hover:text-amber-800 hover:text-lg transition-all'>
            Home
          </Link>
        </li>
        <li className='mx-3'>
          <Link href="https://localhost:7008/Identity/Account/Login" className='hover:text-amber-800 hover:text-lg transition-all'>
            Login
          </Link>
        </li>
        <li className='mx-3'>
          <Link href="https://localhost:7008/Identity/Account/Register" className='hover:text-amber-800 hover:text-lg transition-all'>
            Register
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar