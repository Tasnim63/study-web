import React from "react";
import CountUp from "react-countup";
function PageCouter() {
  return (
    <>
      <div className="bg-no-repeat"
        style={{
          height: 600,
         
          backgroundImage: `url(https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SPPU2.png)`,
        }}
      >
        <div className=" flex  mx-64  my-28">
          <div className=" ">
            <h2 className=" mt-16 mb-12 mr-8 text-secondary text-3xl font-semibold">
              We envision a world where anyone, anywhere has the power to
              transform through learning
            </h2>
            <img className=" mb-8"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/SIGN932.png"
              alt=""
            />
            <div className="flex">
              <img
                className=" w-28 h-28 rounded-full"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/HIDA4.jpg"
                alt=""
              />
              <div className="ml-3 mt-4">
                <h3 className=" text-secondary text-2xl font-bold">
                  Alfred Helmerich
                </h3>
                <p className=" text-light-gray text-lg">Executive</p>
              </div>
            </div>
          </div>
          <div className=" flex gap-12">
            <div className=" gap-12">
              <div className="flex justify-center items-center mt-28  h-44 w-96 bg-white shadow-md rounded-lg ">
                <div>
                  <h1 className=" text-primary text-3xl font-bold">
                    <CountUp
                      className=" text-5xl ml-2"
                      end={360}
                      duration={3}
                      suffix="+"
                    />
                  </h1>
                  <p className=" text-secondary font-medium mt-2">
                    Hours of Learning
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center  h-44 w-96 bg-white shadow-md rounded-lg mt-6 ">
                  <div>
                    <h1 className=" text-primary text-3xl  font-bold">
                      <CountUp
                        className=" text-5xl ml-2"
                        end={650}
                        duration={5}
                        suffix="+"
                      />
                    </h1>
                    <p className=" text-secondary font-medium mt-2">
                      Online Instructor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-16">
              <div className="flex justify-center items-center  h-44 w-96 bg-white shadow-md rounded-lg mt-6 ">
                <div>
                  <h1 className=" text-primary text-3xl font-bold">
                    <CountUp
                      className=" text-5xl ml-2"
                      end={1200}
                      duration={5}
                      suffix="+"
                    />
                  </h1>
                  <p className=" text-secondary font-medium mt-2">
                    Enrolled Learning
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center  h-44 w-96 bg-white shadow-md rounded-lg mt-6 ">
                <div>
                  <h1 className=" text-primary text-3xl font-bold">
                    {" "}
                    <CountUp
                      className=" text-5xl ml-2"
                      end={100}
                      duration={2}
                      suffix="%"
                    />
                  </h1>
                  <p className=" text-secondary font-medium mt-2">
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageCouter;
