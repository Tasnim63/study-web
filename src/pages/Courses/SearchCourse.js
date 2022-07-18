import React from "react";

function SearchCourse() {
  return (
    <>
      <div
        className="flex justify-around items-center bg-no-repeat  bg-primary"
        style={{
          height: 250,
          backgroundImage: `url(https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/ABGT03.png)`,
        }}
      >
        <div>
          <h1 className=" text-4xl font-semibold text-white">
            Subscribe Newsletters
          </h1>
          <p
            className=" text-xl text-white mt-3 "
          >
            Enter your email address to register to our newsletter
          </p>
        </div>
       <div>
        <input className=" py-2 blur-0  pr-16 pl-2 rounded-sm" type="text" placeholder="Your Enail Address..." name="" id="" />
        <button className=" bg-secondary py-2 rounded-r-md px-3 text-white border-secondary   border">Subcribe</button>
       </div>
      </div>
    </>
  );
}

export default SearchCourse;
