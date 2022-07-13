import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import studentSays from '../../assets/storyStudent.png';
import "./Testimonial.css";
function Testimonial() {
  return (
    <>
    <div className=" mx-96 mt-40 flex justify-center items-center mb-12">
        <img src={studentSays} alt="" />
    </div>
      <div >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-backgroud  h-96 relative rounded-md  ">
              <div className=" mb-40  absolute z-20 bottom-40 left-10 ">
                <img
                  className="   w-36 rounded-full "
                  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MU120.jpg"
                  alt=""
                />
              </div>
              <p className=" pt-24 px-10 text-2xl  text-secondary">
                I believe in lifelong learning and they are a great place to
                learn from experts. I have learned a lot and recommend it
              </p>
              <div className=" flex">
                <p className="ml-8 mt-10 bg-primary w-16 py-3 rounded-full">
                  <svg
                    className="ml-3 text-3xl"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42px"
                    height="37px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M42.000,26.804 C42.000,32.435 37.524,36.999 32.002,36.999 C26.480,36.999 22.004,32.435 22.004,26.804 C22.004,26.799 22.005,26.796 22.005,26.791 C21.993,26.493 21.405,10.252 31.749,2.508 C41.077,-4.476 31.014,4.009 28.764,17.167 C29.781,16.811 30.867,16.610 32.002,16.610 C37.524,16.610 42.000,21.174 42.000,26.804 ZM10.007,36.999 C4.485,36.999 0.009,32.435 0.009,26.804 C0.009,26.799 0.010,26.796 0.010,26.791 C-0.002,26.493 -0.590,10.252 9.753,2.508 C19.081,-4.476 9.019,4.009 6.769,17.167 C7.786,16.811 8.872,16.610 10.007,16.610 C15.529,16.610 20.005,21.174 20.005,26.804 C20.005,32.435 15.529,36.999 10.007,36.999 Z"
                    ></path>
                  </svg>
                </p>
                <div className=" mt-10 ml-4">
                  <p className=" text-secondary text-2xl font-semibold">
                    Mark Donald
                  </p>
                  <p className=" text-gray">Manager</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-backgroud  h-96 relative rounded-md  ">
              <div className=" mb-40  absolute z-20 bottom-40 left-10 ">
                <img
                  className="   w-36 rounded-full "
                  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MU120.jpg"
                  alt=""
                />
              </div>
              <p className=" pt-24 px-10 text-2xl  text-secondary">
                I believe in lifelong learning and they are a great place to
                learn from experts. I have learned a lot and recommend it
              </p>
              <div className=" flex">
                <p className="ml-8 mt-10 bg-primary w-16 py-3 rounded-full">
                  <svg
                    className="ml-3 text-3xl"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42px"
                    height="37px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M42.000,26.804 C42.000,32.435 37.524,36.999 32.002,36.999 C26.480,36.999 22.004,32.435 22.004,26.804 C22.004,26.799 22.005,26.796 22.005,26.791 C21.993,26.493 21.405,10.252 31.749,2.508 C41.077,-4.476 31.014,4.009 28.764,17.167 C29.781,16.811 30.867,16.610 32.002,16.610 C37.524,16.610 42.000,21.174 42.000,26.804 ZM10.007,36.999 C4.485,36.999 0.009,32.435 0.009,26.804 C0.009,26.799 0.010,26.796 0.010,26.791 C-0.002,26.493 -0.590,10.252 9.753,2.508 C19.081,-4.476 9.019,4.009 6.769,17.167 C7.786,16.811 8.872,16.610 10.007,16.610 C15.529,16.610 20.005,21.174 20.005,26.804 C20.005,32.435 15.529,36.999 10.007,36.999 Z"
                    ></path>
                  </svg>
                </p>
                <div className=" mt-10 ml-4">
                  <p className=" text-secondary text-2xl font-semibold">
                    Mark Donald
                  </p>
                  <p className=" text-gray">Manager</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-backgroud  h-96 relative rounded-md  ">
              <div className=" mb-40  absolute z-20 bottom-40 left-10 ">
                <img
                  className="   w-36 rounded-full "
                  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MU120.jpg"
                  alt=""
                />
              </div>
              <p className=" pt-24 px-10 text-2xl  text-secondary">
                I believe in lifelong learning and they are a great place to
                learn from experts. I have learned a lot and recommend it
              </p>
              <div className=" flex">
                <p className="ml-8 mt-10 bg-primary w-16 py-3 rounded-full">
                  <svg
                    className="ml-3 text-3xl"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42px"
                    height="37px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M42.000,26.804 C42.000,32.435 37.524,36.999 32.002,36.999 C26.480,36.999 22.004,32.435 22.004,26.804 C22.004,26.799 22.005,26.796 22.005,26.791 C21.993,26.493 21.405,10.252 31.749,2.508 C41.077,-4.476 31.014,4.009 28.764,17.167 C29.781,16.811 30.867,16.610 32.002,16.610 C37.524,16.610 42.000,21.174 42.000,26.804 ZM10.007,36.999 C4.485,36.999 0.009,32.435 0.009,26.804 C0.009,26.799 0.010,26.796 0.010,26.791 C-0.002,26.493 -0.590,10.252 9.753,2.508 C19.081,-4.476 9.019,4.009 6.769,17.167 C7.786,16.811 8.872,16.610 10.007,16.610 C15.529,16.610 20.005,21.174 20.005,26.804 C20.005,32.435 15.529,36.999 10.007,36.999 Z"
                    ></path>
                  </svg>
                </p>
                <div className=" mt-10 ml-4">
                  <p className=" text-secondary text-2xl font-semibold">
                    Mark Donald
                  </p>
                  <p className=" text-gray">Manager</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonial;

// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// // Import Swiper styles
// import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
// import "swiper/modules/pagination/pagination.min.css";
// import "swiper/swiper.min.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";
// function Testimonial() {
//   return (
//    <>
//      <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//    </>
//   )
// }

// export default Testimonial

// // import React from 'react'
// // // import student from "../../assets/storyStudent.png";
// // import {Swiper ,SwiperSlide} from 'swiper/react';
// // import  'swiper/swiper.min.css';
// // import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
// // import 'swiper/components/pagination/pagination.min.css'

// // import {testimonialdata} from './testimonialdata'
// // import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// // SwiperCore.use([EffectCoverflow, Pagination ])
// // const Testimonial =()=>{
// //     return(

// //     )
// // }

// // function Testimonial() {
// //   return (
// //     <div>
// //        <div className=" flex justify-center items-center  my-24 ">
// //         <img  src={student} alt="" />
// //       </div>
// //     </div>
// //   )
// // }

// // export default Testimonial
