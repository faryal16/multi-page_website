import React from 'react'
import Link from 'next/link'
import { FaLeaf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div> 
         <footer className='flex items-center flex-col-reverse bg-orange-300  text-orange-900 text-xl ' >
         <a className='flex'>Copyright &copy; 2024 by CodeWithFairy<FaLeaf /></a>
           <ul className='flex justify-center gap-2 m-2' >
                <li ><Link href='https://www.linkedin.com/in/faryal-junaid-06780b2b4/'><FaLinkedin /></Link></li>
                <li><Link href="https://github.com/faryal16"><FaGithub /></Link></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer