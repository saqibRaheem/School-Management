import React from 'react'
import Card from './Card'
import Data from './Data'
export default function Course() {
  return (
    <>

         <div className="my-5">
        <h1 className="text-center"> Our Services </h1>

      </div>
      <div className="container-flude">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 sm:px-0">
             {
               Data.map((val,ind)=>{
                 return <Card
                   heading={val.heading}
                  title1={val.title1}
                  title2={val.title2}
                  title3={val.title3}
                 />
               })
             }
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}
