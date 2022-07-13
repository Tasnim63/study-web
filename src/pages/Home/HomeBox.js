import React from 'react'

function HomeBox() {
  return (
    <>
    <div className=' text-white bg-secondary  p-10 flex flex-row   justify-center items-center gap-28'>
        <div className=' flex '>
            <img className=' h-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/III98456.png" alt="" />
            <div  className=' mt-5 ml-3'>
                <h1 className=' text-xl font-semibold'>Over 155,000</h1>
                <p>Video courses on career skills</p>
            </div>
        </div>
        <div className=' flex'>
            <img className=' h-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/icon-2.png" alt="" />
            <div  className=' mt-5 ml-3'>
                <h1 className=' text-xl font-semibold'>Choose from</h1>
                <p>Top industry instructors</p>
            </div>
        </div>
        <div className=' flex'>
            <img className=' h-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/icon-3.png" alt="" />
            <div  className=' mt-5 ml-3'>
                <h1 className=' text-xl font-semibold'>Lifetime access</h1>
                <p>On mobile and desktop</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeBox
