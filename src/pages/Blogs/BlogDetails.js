import React, { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
Modal.setAppElement("#root");
function BlogDetails({ card }) {
  const { img, buttonTittle, userTittle, comments, Tittle } = card;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="relative bg-white shadow-xl w-96   rounded-md ">
          <img className=" rounded-t-md" src={img} alt="" />
          <p className=" absolute  top-10 z-20 ml-4 bg-primary text-white rounded-3xl px-3 py-1 font-semibold">
            {buttonTittle}
          </p>

          <div className=" flex relative   mx-6 mt-6">
            <div className=" flex">
              <p className=" text-primary font-medium text-lg">
                <ion-icon name="person-outline"></ion-icon>
              </p>
              <p className=" ml-2 text-light-gray font-semibold">
                {userTittle}
              </p>
            </div>
            <div className=" flex ml-3">
              <p className=" text-primary font-medium text-lg">
                <ion-icon name="mail-outline"></ion-icon>
              </p>
              <p className=" ml-2 text-light-gray font-semibold">{comments} </p>
            </div>
          </div>
          <div className=" mx-6 mt-6 mb-5">
            <h1 className=" text-xl text-secondary font-bold">{Tittle}</h1>
          </div>
          <button className=" mx-6 mb-12 text-primary font-semibold uppercase">
            Read More
          </button>
          <div className=" absolute ml-44 z-10 top-24">
            <button
              onClick={() => setModalIsOpen(true)}
              className=" mt-1 text-white  text-5xl "
            >
              {" "}
              <ion-icon name="play-circle-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <Modal className="    text-white " isOpen={modalIsOpen}>
        <div className="float-right">
          <button
            onClick={() => setModalIsOpen(false)}
            className=" text-secondary text-3xl font-bold ml-80 font-extrabold items-end"
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className=" flex justify-center items-center mt-12 ml-40">
          <ReactPlayer url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=127s">
            {" "}
          </ReactPlayer>
        </div>
      </Modal>
    </>
  );
}

// <div className="  absolute   p-2  top-28 ml-40 z-50  ">
// <button
//   onClick={() => setModalIsOpen(true)}
//   className="text-white mt-1  text-5xl "
// >
//   <ion-icon name="play-circle-outline"></ion-icon>
// </button>

{
  /* <div className="">
<div >
  <Modal className="bg-black h-96 w-96 text-white ml-96 mt-96 px-96" isOpen={modalIsOpen}>
    <button onClick={() =>setModalIsOpen(false) } className=" text-white text-3xl font-bold ml-80 font-extrabold items-end">
      <ion-icon name="close-outline"></ion-icon>
    </button>
    <ReactPlayer url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=127s"> </ReactPlayer>
    <h1>hello world</h1>
    <h1>hello world</h1>
    <h1>hello world</h1>
    <h1>hello world</h1>
  </Modal>
</div>
</div> */
}
{
  /* </div> */
}
export default BlogDetails;
