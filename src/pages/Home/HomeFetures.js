import React from "react";

function HomeFetures() {
  return (
    <>
      <div className=" my-24">
        <div className=" flex justify-around items-center my-12 " >
          <h1 className="   text-secondary  font-bold text-3xl mr-20">
            Featured topics by category
          </h1>
          <button className=" border border-primary rounded-sm text-primary hover:bg-primary hover:text-white font-bold py-3 px-7">Explore More</button>
        </div>
        <div className=" flex flex-col">
          <div className=" flex justify-center items-center gap-12 ">
            <div className=" flex w-72 bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/pencil.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6  font-bold   text-2xl">
                Design
              </h1>
            </div>
            <div className=" flex w-72 bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/science.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6  font-bold   text-2xl">
                Chemistry
              </h1>
            </div>
            <div className=" flex w-72 bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/tech.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6  font-bold   text-2xl">
                Technology
              </h1>
            </div>
            <div className=" flex w-72 bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/med.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6  font-bold   text-2xl">
                Medical
              </h1>
            </div>
         
          </div>
          <div className=" mt-10 flex justify-center items-center gap-12">
          <div className=" flex w-72  bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/math.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6  font-bold   text-2xl">
              Mathematics
              </h1>
            </div>
            <div className="  flex w-72  bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/food-delivery.png"
                alt=""
              />
              <h1 className="  mt-1 ml-6   font-bold   text-2xl">
               Food&Recipe
              </h1>
            </div>
            <div className="  flex w-72  bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/graduating-student.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6  font-bold   text-2xl">
               Language
              </h1>
            </div>
            <div className=" flex w-72  bg-backgroud  rounded-lg hover:text-white p-6 hover:bg-secondary  pr-28">
              <img
                className=" h-12"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/art-book.png"
                alt=""
              />
              <h1 className=" mt-1 ml-6 font-bold text-2xl">
                Medical
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFetures;
