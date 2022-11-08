import React from 'react'

import Common from './Common'
import Course from './Course'

export default function Home() {
  return (
    <>
        <Common />
        <div className="container flude">
         <Course/>   
        </div>
    </>
  )
}