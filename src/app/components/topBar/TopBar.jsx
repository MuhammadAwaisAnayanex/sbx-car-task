import React from 'react'

export const TopBar = () => {
  return (
    <>
    <div className="top-bar">
        <div className="container mx-auto px-3 ">
            <ul className='flex items-center'>
                <li className='basis-1/3 md:basis-auto text-center md:text-start'><a href="#"><span className=' hidden md:inline'>US</span> +1 323-407-8523</a></li>
                <div className="divider"></div>
                <li className='basis-1/3 md:basis-auto text-center md:text-start'><a href="#"><span className=' hidden md:inline'>UAE</span> +971 4 876 1764</a></li>
                <div className="divider"></div> 
                <li className='basis-1/3 md:basis-auto text-center md:text-start hidden md:block'><a href="#"><span className=' hidden md:inline'>UK</span> +44 20 4525 8014</a></li>
                <div className="divider hidden md:block"></div>
                <li className='basis-1/3 md:basis-auto text-center md:text-start '><a href="#">sales@sbxcars.com</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}
