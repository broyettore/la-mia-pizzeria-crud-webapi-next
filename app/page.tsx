import Link from 'next/link'
import React from 'react'

const MainPage = () => {

  return (
    <>
    <div className="container ms-ctn mx-auto flex flex-col justify-center items-center">
        <h2 className='text-center text-3xl mb-10 lg:w-3/5'>Welcome to Heaven's Slice and as you can see we have some of the most amazing pizza you will ever taste !</h2>
        <div className="button-ctn">
        <Link href="/Pizzas" className="btn btn-primary mr-2">See Our Products</Link>
        <Link href="/Pizzas/create" className="btn btn-outline btn-accent ms-2">Create A Product</Link>
        </div>
    </div>
    </>
  )
}

export default MainPage