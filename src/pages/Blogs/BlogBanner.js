import React from "react";

function BlogBanner() {
  return (
    <>
      <div className=" flex justify-center items-center "
        style={{
          height: 400,
          backgroundImage: `url(https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/REJ93.jpeg)`,
        }}
      >
        <div >
            <h1 className=" text-4xl text-secondary font-semibold">Blog</h1>
            <div className=" flex mt-4">
                <p>Home</p>
                <p className=" ml-2 mr-2">/</p>
                <p className=" text-primary">Blog</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default BlogBanner;
