import React from 'react';

const Card = () => {
    return (
        <div className='h-screen text-black flex bg-gradient-to-b from-slate-300 items-center justify-center'>
            <div className=" flex items-center gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex">
                    <div className="bg-white p-8 h-64 shadow-lg -mr-8 z-0 ">
                        <h2 className="text-2xl font-semibold">The Smart School</h2>
                        <span className="text-gray-600 font-semibold">Learn And Build Your Life</span>
                        <p className="mt-4 text-gray-700">
                            Lorem ipsum do consectetur. <br /> cum, excepturi tenetur sit!
                        </p>
                    </div>
                    <div className={`cardImg w-64 bg-cover shadow-lg -my-5 `} ></div>
                </div>
                <div className="flex">
                    <div className="bg-white p-8 h-64 shadow-lg overflow-hidden -mr-8 z-0 ">
                        <h2 className="text-2xl font-semibold">The Smart School</h2>
                        <span className="text-gray-600 font-semibold">Learn And Build Your Life</span>
                        <p className="mt-4 text-gray-700">
                            This is the...........
                        </p>
                    </div>
                    <div className={`cardImg w-64 bg-cover shadow-lg -my-5 `} ></div>
                </div>
              
              
<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

                  
            </div>
           
        </div>
    );
}

export default Card;
