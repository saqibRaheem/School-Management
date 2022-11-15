import React from 'react';
import {FaArrowRight ,FaFacebookF ,FaWhatsapp ,FaInstagram , FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
        <footer>
             <div className="p-10 bg-slate-800 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="mb-5">
                            <h4 className='text-2xl pb-4'>Our School</h4>
                            <p className='text-gray-500  hover:text-white cursor-pointer'>  Gulshan-e-Bahar Orangi 
                            Town Karachi <br /><br />
                            <strong>Phone :</strong>03212345678 <br />
                            <strong>Email :</strong>School@gmail.com <br /></p>
                        </div>
                        <div className="mb-5">
                            <h4 className='text-2xl pb-4'>Usefull links</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4  hover:text-white cursor-pointer flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/>Home</li>
                                <li className='pb-4  hover:text-white cursor-pointer flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/>About</li>
                                <li className='pb-4  hover:text-white cursor-pointe flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/>Contact</li>
                            </ul>
                        </div>
                        <div className="mb-5">
                        <h4 className='text-2xl pb-4'>Classes</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4  hover:text-white cursor-pointer flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/> Play Group</li>
                                <li className='pb-4  hover:text-white cursor-pointer flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/>Primary</li>
                                <li className='pb-4  hover:text-white cursor-pointer flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/>Secoundry</li>
                            </ul>
                        </div> 
                        <div className="mb-5">
                            <h4 className='text-2xl pb-4'>Get Education</h4>
                            <p className='text-gray-500  hover:text-white cursor-pointer flex gap-1'> <FaArrowRight className='text-orange-500 flex mt-1'/>join 25,000 others and never miss out on new Education Hub</p>
                            <form className='flex flex-row flex-wrap'>
                                <input type="text" className='text-gray-500 w-2/3 p-2 focus:border-orange-500' placeholder='email@example.com' />
                                <button className='p-2 w-1/3 bg-orange-500 text-white hover:bg-orange-600'>Enroll Now</button>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
             <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                    <div className='text-center'>
                       <div>
                        CopyRight <strong><span>Our School</span></strong>.All Right Reseved
                       </div>
                       <div>
                        Dessigion by <span>@SK-Digi-Tech</span>
                       </div>
                    </div>
                    <div className='text-center text-xl text-white mb-2'>
                        <a href="#" className='w-10 h-10 rounded-full  bg-orange-500 hover:bg-orange-600 mx-1 inline-block pt-1'> <FaFacebookF className='flex ml-2 mt-1' /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 mx-1 inline-block pt-1'> <FaWhatsapp size={23} className='flex ml-2 mt-1' /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 mx-1 inline-block pt-1'> <FaInstagram size={23} className='flex ml-2 mt-1'/></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 mx-1 inline-block pt-1'> <FaTwitter size={23} className='flex ml-2 mt-1' /></a>
                    </div>
                </div>
             </div>
           </footer>  
        </div>
    );
}

export default Footer;


