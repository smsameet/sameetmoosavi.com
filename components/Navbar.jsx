import Link from 'next/link'

const Navbar = () => {
  return (
    <nav class='flex text-xl'>
      <span className='font-medium text-blue-600 px-1 py-2'>[</span>
      <span className='font-medium text-white py-2'>Sameet</span>
      <span className='font-medium text-red-600 py-2'>@</span>
      <span className='font-medium text-white py-2'>Moosavi</span>
      <span className='font-medium text-blue-600 px-1 py-2'>]</span>
      <Link href='/'><a className='font-medium px-3 py-2 text-yellow-500 hover:text-white'>Home</a></Link>
      <Link href='/projects'><a className='font-medium px-3 py-2 text-white hover:text-yellow-500'>Projects</a></Link>
    </nav>
  )
}

export default Navbar
