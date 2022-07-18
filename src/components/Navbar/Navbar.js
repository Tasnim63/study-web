import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
function Navbar() {
  const [user, loading, error] = useAuthState(auth);
    const [open ,setOpen]=useState(false)
    const logout =()=>{
      signOut(auth)
    }
  return (
    <>
      <nav className=" bg-white ">
        <div className=" flex items-center font-medium justify-around md:p-0 p-6">
          <div className=" z-50 md:w-auto w-full  flex justify-between">
            <img
              className=" md:cursor-pointer h-9"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png"
              alt=""
            />
            <div onClick={() => setOpen(!open)} className=" text-3xl md:hidden">
              <ion-icon name={`${open ?"close-outline" : "menu-outline"}`}></ion-icon>
            </div>
          </div>
          <ul className=" md:flex hidden uppercase items-center gap-8">
          <li className=" p-4 hover:text-primary">
            <a href="/">Home</a>
          </li>
          <li className=" p-4 hover:text-primary">
            <a href="/courses">Courses</a>
          </li>
          <li className=" p-4 hover:text-primary">
            <a href="/blogs">Blogs</a>
          </li>
          <li className=" p-4 hover:text-primary">
            <a href="/pages">Pages</a>
          </li>
          <li className=" flex p-4"> { user ?   <div className=" flex">
            <p className="mr-3 text-lg "><span ><ion-icon name="person-outline"></ion-icon></span></p>
            <p onClick={logout} className=" cursor-pointer  hover:text-primary" >  SignOut</p>
         
          
            </div> : <div>
            <a className="  hover:text-primary" href="/login">  login</a>
            <span className="ml-3 ">/</span>
            <a className=" hover:text-primary ml-3" href="/login">signup</a>
            </div>}
            
          </li>
          </ul>

          {/* moblie devices  */}
          {/* <ul
            className={`
          md:hidden bg-white  py-12  absolute w-full h-full bottom-0 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
          >
            <NavLinks></NavLinks>
          </ul> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
