import { useState } from "react"
import Link from "next/link";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const openMenu = () => {
    setShowOptions(!showOptions);
  }
  return (
    <>
      <div className='flex items-center'>
        <span className='font-bold text-white text-lg'>Sameet</span><span className='text-red-600 text-lg'>@</span><span className='font-bold text-white text-lg'>Moosavi</span>
        <div className='ml-auto md:hidden'>
          <div className="relative inline-block text-left">
            <div>
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={openMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {showOptions && (
             <div className="origin-top-right text-center absolute right-2 mt-3 w-80 rounded-md bg-white" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <Link href='/works' target='_blank'><a className="text-gray-800 block px-4 py-2 text-md" role="menuitem" tabindex="-1" id="menu-item-1">Works</a></Link>
                  <Link href='/posts' target='_blank'><a className="text-gray-800 block px-4 py-2 text-md" role="menuitem" tabindex="-1" id="menu-item-1">Posts</a></Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='ml-9 md:flex hidden'>
          <Link href='/works' target='_blank'><a className="text-white hover:text-yellow-500 px-4 py-2 text-md" role="menuitem" tabindex="-1" id="menu-item-1">Works</a></Link>
          <Link href='/posts' target='_blank'><a className="text-white hover:text-yellow-500 px-4 py-2 text-md" role="menuitem" tabindex="-1" id="menu-item-1">Posts</a></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
