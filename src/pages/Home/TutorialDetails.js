import React from 'react';
import { AiFillStar, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
function TutorialDetails({card}) {
    const {id,img,name,price,tittle,userImg,userName,user,book,time,description}=card;
  return (
    <>
     <div class="card w-80   rounded-xl bg-base-100 shadow-xl">
        <figure>
          <img src={img}   className=" h-48 w-full rounded-b-none rounded-md" alt="Shoes" />
        </figure>
        <div class="card-body p-4 my-6 ">
          <div className=" flex ">
          <p class="font-bold  text-teal-400 p-1 bg-backgroud px-2 rounded-sm text-lg">
           {name}
           
          </p >
              <p className="p-1 font-bold ml-36 text-lg"> {price}</p>
          </div>

          <p className=" card-title mt-6 mb-3 text-xl text-text-color font-semibold ">{tittle}</p>
          <div class=" flex mb-3">
            <img className=" w-14 rounded-full " src={userImg} alt="user imgaes" />
           <p className=" mt-3  ml-2 text-lg  font-semibold text-light-gray ">{userName}</p>
          </div>
         <span className=' w-full  text-light-gray'> <hr/></span>
          <div className=' flex  mt-6'>
           <div className=' flex'>
           <p className=' flex'>  <span className='text-teal-400    p-1 mx-1'><AiOutlineUser ></AiOutlineUser></span> <span className=' text-light-gray'>{user}</span></p>
        
        <p className=' flex'>  <span className='text-teal-400    p-1 mx-1'><BiBook></BiBook></span> <span className=' text-light-gray'>{book}</span></p>
           </div>
           <p className='ml-16 mt-1 text-lg text-yellow-300 flex'><AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialDetails
