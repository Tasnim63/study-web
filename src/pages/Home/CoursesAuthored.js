import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
function CoursesAuthored() {
  return (
   <>
    <div style={{
      
        backgroundImage:`url(https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SPPU2.png)`
    }} className=" flex  bg-no-repeat justify-around items-center my-12">
        <div className=" flex lg:flex-col justify-center items-start p-30">
         
          <h1 className=" text-3xl font-serif font-bold text-secondary uppercase">
          Thousands of courses authored <br/> by industry experts
          </h1>
        <div className=' my-2'>
            <p className=' flex  my-2'> <span className=' font-extrabold  text-xl mx-1 my-1'><FcCheckmark ></FcCheckmark></span> <span className=' text-light-gray text-lg'>Get access to 4,000+ of our top courses</span> </p>
            <p className=' flex '> <span className=' font-extrabold  text-xl my-1  mx-1'><FcCheckmark ></FcCheckmark></span> <span className=' text-light-gray text-lg'>Popular topics to learn now</span> </p>
            <p className=' flex my-2 '> <span className=' font-extrabold  text-xl my-1 mx-1'><FcCheckmark ></FcCheckmark></span> <span className=' text-light-gray text-lg'>Find the right instructor for you</span> </p>
           
        </div>
          <button className=" bg-primary p-3 my-6 rounded text-white  font-medium hover:bg-secondary">
            Explore All Cources
          </button>
        </div>
        <div className=" flex  mt-28">
       
          <img
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/ISIS32.png"
            alt=""
          />
        </div>
      </div>
   </>
  )
}

export default CoursesAuthored
