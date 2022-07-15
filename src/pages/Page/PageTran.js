import React, { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

Modal.setAppElement("#root")
function PageTran() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className=" flex  mx-44 mb-24">
        <div className=" flex mt-28">
          <div>
            <img
              className=" mr-12 mt-16"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className=""
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg"
              alt=""
            />
            <img
              className=" mt-8 rounded-lg"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/TIN0846F.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className=" mt-28 ml-24 w-6/12 ">
          <h1 className=" text-secondary text-3xl font-semibold ">
            Whether you want to learn or to share what you know you’ve come to
            the right place
          </h1>
          <p className="text-light-gray mt-12 text-lg ">
            World-class training and development programs developed by top
            teachers. Build skills with courses, certificates, and degrees
            online from world-class universities and companies.
          </p>
          <div>
            <li className=" mt-16 list-none">
              {" "}
              <span className=" text-primary text-xl font-semibold mt-6 mr-2 mb-6">
                <ion-icon name="checkmark-outline"></ion-icon>{" "}
              </span>
              <span className=" text-light-gray text-xl font-semibold">
                Get access to 4,000+ of our top courses
              </span>
            </li>
            <li className=" mt-3 list-none">
              {" "}
              <span className=" text-primary text-xl font-semibold  mr-2 mb-6">
                <ion-icon name="checkmark-outline"></ion-icon>{" "}
              </span>
              <span className=" text-light-gray text-xl font-semibold">
                Popular topics to learn now
              </span>
            </li>
            <li className="mt-3 list-none">
              {" "}
              <span className=" text-primary text-xl font-semibold mt-6 mr-2 mb-6">
                <ion-icon name="checkmark-outline"></ion-icon>{" "}
              </span>
              <span className=" text-light-gray text-xl font-semibold">
                Find the right instructor for you
              </span>
            </li>
          </div>
          <div className=" mt-32 flex">
            <button
              onClick={() => setModalIsOpen(true)}
              className=" border hover:bg-secondary  border-primary bg-primary pt-1 rounded-full"
            >
              <span className=" text-3xl mr-2 hover:text-white mx-1 text-secondary ">
                <ion-icon name="caret-back-outline"></ion-icon>
              </span>
            </button>
            <p className=" ml-6 mt-2 text-secondary text-xl font-bold">
              PLAY NOW
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen}>
      <div className="float-right">
          <button
            onClick={() => setModalIsOpen(false)}
            className=" text-secondary text-3xl font-bold ml-80 font-extrabold items-end"
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className=" flex justify-center items-center mt-12 ml-40">
          <ReactPlayer  url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=127s">
            {" "}
          </ReactPlayer>
        </div>
      </Modal>
    </>
  );
}

export default PageTran;
