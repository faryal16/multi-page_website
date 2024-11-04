
import Link from 'next/link'
import { FaLeaf } from "react-icons/fa";


function Header() {
  return (
    <div>
      <header className='flex justify-center sm:justify-between bg-orange-300  text-orange-900 font-bold text-xl lg:text-2xl px-14'>
      <a className='flex justify-center items-center lg:ml-16 ml-4 cursor-pointer'>CodeWithFairy<FaLeaf /></a>
        <ul className='flex justify-center gap-2 md:gap-5 p-2   '>
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
        </ul>
        </header>
    </div>
  )
}

export default Header