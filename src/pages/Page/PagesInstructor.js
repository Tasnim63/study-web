import React from "react";
import instructor from "../../assets/learner.png";
function PagesInstructor() {
  return (
    <>
      <div className="flex justify-center items-center  mt-24">
        <img className="   " src={instructor} alt="" />
      </div>
      <div className=" flex   gap-8 justify-center items-center my-12">
        <div className=" relative">
         <div>
         <img 
            className="  rounded-xl"
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/MAT653.jpeg"
            alt=""
          />
         </div>
          <div className=" absolute z-50  bottom-10 ml-24">
            <h1 className=" text-white text-2xl font-bold"> Jesse Hickson</h1>
            <p className=" text-white font-medium ml-3">Teacher English</p>
          </div>
        </div>
        <div className=" relative">
         <div>
         <img
            className="  rounded-xl"
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/MAJ8642.jpeg"
            alt=""
          />
         </div>
          <div className=" absolute z-50  bottom-10 ml-24">
            <h1 className=" text-white text-2xl font-bold"> Jesse Hickson</h1>
            <p className=" text-white font-medium ml-3">Teacher English</p>
          </div>
        </div>
        <div className=" relative">
         <div>
         <img
            className="  rounded-xl"
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/TRW7342.jpg"
            alt=""
          />
         </div>
          <div className=" absolute z-50  bottom-10 ml-24">
            <h1 className=" text-white text-2xl font-bold"> Jesse Hickson</h1>
            <p className=" text-white font-medium ml-3">Teacher English</p>
          </div>
        </div>
        <div className=" relative">
         <div>
         <img
            className="  rounded-xl"
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/TER5335.jpeg"
            alt=""
          />
         </div>
          <div className=" absolute z-50  bottom-10 ml-24">
            <h1 className=" text-white text-2xl font-bold"> Jesse Hickson</h1>
            <p className=" text-white font-medium ml-3">Teacher English</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PagesInstructor;
