import React from 'react'
import cources from '../../assets/courses.png'
function HomeCourses() {
  return (
    <>
    <div className=' flex justify-center items-center  my-11'>
   
    <img src={cources}  alt="" />
    </div>
    <div className=' flex justify-center items-center gap-5 my-5'>
        <img className=' w-64 h-80' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/MKH283.jpg" alt="" />
        <img className=' w-64 h-80 rounded-md' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/GER467.jpg" alt="" />
        <img className=' w-64 h-80 rounded-md' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/MJKS424.jpg" alt="" />
        <img className=' w-64 h-80 rounded-md' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/MJKS490.jpg" alt="" />
    </div>
    </>
  )
}

export default HomeCourses
