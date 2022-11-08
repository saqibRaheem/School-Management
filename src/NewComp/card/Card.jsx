import React from 'react';

const Card = () => {
    return (
        <div className='h-screen text-black flex bg-gradient-to-b from-slate-300 items-center justify-center'>
            <div className=" inset-0 bg-gray-100 flex items-center justify-centergrid sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-0">
                <div className="flex items-stretch mr-8">
                    <div className="bg-white p-8 h-64 shadow-lg overflow-hidden -mr-8 z-0 ">
                        <h2 className="text-2xl font-semibold">The Smart School</h2>
                        <span className="text-gray-600 font-semibold">Learn And Build Your Life</span>
                        <p className="mt-4 text-gray-700">
                            This is the lora lussan
                        </p>
                    </div>
                    <div className={`cardImg w-64 bg-cover shadow-lg -my-5 `} ></div>
                </div>
                <div className="flex items-stretch">
                    <div className="bg-white p-8 h-64 shadow-lg overflow-hidden -mr-8 z-0 ">
                        <h2 className="text-2xl font-semibold">The Smart School</h2>
                        <span className="text-gray-600 font-semibold">Learn And Build Your Life</span>
                        <p className="mt-4 text-gray-700">
                            This is the lora lussan
                        </p>
                    </div>
                    <div className={`cardImg w-64 bg-cover shadow-lg -my-5 `} ></div>
                </div>
              
                
            </div>
           
        </div>
    );
}

export default Card;
