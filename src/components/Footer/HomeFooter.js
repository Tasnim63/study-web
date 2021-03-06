import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { TbMailOpened } from "react-icons/tb";

function HomeFooter() {
  return (
    <>
      <div className=" bg-secondary  text-white">
        <footer class="footer  flex mx-11 px-20 justify-center items-center  sm:flex-ro  text-base-content">
          <div className="">
            <img
              className=" w-36 my-6"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png"
              alt=""
            />
            <p className="font-semibold text-lg text-white my-2 text-gray-500">
              We support programs that create <br /> advancement for people
            </p>
            <div  className=" flex flex-row gap-3">
              <p className="text-teal-400 text-3xl p-3 border-teal-400 border rounded-full hover:bg-teal-400 hover:text-white ">
                <BsFacebook></BsFacebook>
              </p>
              <p className="text-teal-400 text-3xl p-3 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </p>
              <p className="text-teal-400 text-3xl p-3 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                <GrInstagram></GrInstagram>
              </p>
            </div>
          </div>
          <div className="flex flex-col   ml-20 mt-4">
            <span class="text-2xl my-4 font-semibold text-white">
              Useful links
            </span>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-white ">
              About Us
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Privacy Policy
            </a>
            <a class=" cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Terms & condition
            </a>
            <a class=" cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Student spotlight
            </a>
          </div>
          <div className="flex flex-col  ml-20 mt-4">
            <span class="text-2xl my-4 font-semibold text-white">Learning</span>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Business Strategy
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Become A Teacher
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Project Management
            </a>
            <a class="cursor-pointer hover:text-teal-400 link link-hover text-lg text-white">
              Membership
            </a>
          </div>
          <div className="ml-20 mt-8">
            <span class="text-2xl my-4 font-semibold text-white">
              Contact Us
            </span>
            <p class=" flex text-lg text-white"><span className="text-teal-400 p-1"><FaPhoneVolume></FaPhoneVolume></span> +91 458 654 528</p>
            <p class=" flex text-lg text-white"><span className="text-teal-400 p-1"><TbMailOpened></TbMailOpened></span>info@example.com</p>
            <p class=" flex text-lg text-white"><span className="text-teal-400 p-1"><GoLocation></GoLocation></span>
              PO Box 16122 Collins Street West <br /> Victoria 8007 Australia
            </p>
          </div>
        </footer>
        <div className=" px-28 mt-12 text-center">
          <hr />
          <p className=" mt-8">
            ?? Copyright 2022 Pixelcurve All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeFooter;
