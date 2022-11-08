import React ,{useState}from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "../../images/school.png"
import { Link } from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'

export default function Navbar() {
   const [Active, setActive] = useState(false);

   const showMenu = ()=>{
      setActive(!Active)
   }
  return (
    <>
       <div className=' w-full text-black flex justify-between p-4 items-center'>
         <div >
            <img src={logo} alt="" className="max-w-[30%]" />
         </div>

         <nav>
         <div className="absolute right-6 md:hidden top-9  scale-150">

            <FaBars size={30} onClick={showMenu} className="cursor-pointer" />
         </div>

            <ul className= 'hidden text-lg md:flex gap-8 p-6 uppercase bg-black/10 rounded-2xl'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
         {/* <div
                onClick={() => setNav(!Nav)}
                className='cursor-pointer pr-4 z-0 text-gray-400 md:hidden'>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {Nav && (
                <ul className='flex flex-col justify-center items-center 
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
                to-gray-800 text-gray-400' >
                   
                      <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to="/">Home</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to="/">About</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to="/">Contact</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to="/">Contact</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to="/">Contact</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to="/">Contact</Link></li>
                   
                </ul>
            )} */}
            <ResponsiveNav showMenu={showMenu} active={Active} />
         </nav>
       </div>
    </>
  )
}
