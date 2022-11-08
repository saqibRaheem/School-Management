import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ResponsiveNav({showMenu , active}) {
  return (
  
        <ul className= {active ? 'flex-col flex items-center fixed inset-0 justify-center left-1/4 uppercase bg-gray-300 gap-8 p-8 md:hidden' : 'hidden'}>
        <FaTimes size={30} onClick={showMenu} className="cursor-pointer slate-150" />
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
 
  )
}
