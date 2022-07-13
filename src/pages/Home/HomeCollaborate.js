import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function HomeCollaborate() {
  const [width ,setWidth]=useState(0);
  const carousel=useRef()
  useEffect(()=>{
    console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return (
    <>
      <div className=" mt-24 mx-96">
      <h1 className=" text-secondary text-2xl font-bold my-12 text-center">
          We collaborate with <span className=" text-primary">200+</span>{" "}
          Leading universities & companies
        </h1>
       <div className=" mx-64">
        <div>
       
        </div>
       <motion.div ref={carousel} className=" my-16 cursor-grab overflow-hidden"
         whileTap={{cursor:"grabbing"}}>
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className=" innter_carosel">
                  <motion.div className="item flex gap-24">
                  <img  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO02.png" />
                  <img  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/ICE32.png" />
                  <img  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/COP02.png" />
                  <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO913.png" />
                  <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO932.png" />
                  <img  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO02.png" />
                  <img  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/ICE32.png" />
                  <img  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/COP02.png" />
                  <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/CO913.png" />
                 
                  </motion.div>
          </motion.div>
        </motion.div>
       </div>
      </div>
    </>
  );
}

export default HomeCollaborate;
