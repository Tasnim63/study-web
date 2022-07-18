function CourcesCardDetails({ card }) {
  const {
    id,
    img,
    name,
    price,
    tittle,
    userImg,
    userName,
    user,
    book,
    time,
    description,
  } = card;
  return (
    <>
      <div>
        <div className=" bg-white shadow-xl w-96   rounded-md ">
          <img
            className=" h-48 w-full object-cover rounded-t-md"
            src={img}
            alt=""
          />

          <div className=" mx-6 mt-6">
            <div className=" flex  items-center justify-around">
              <p className=" text-primary font-medium text-lg">{name}</p>
              <p className=" ml-44 float-right  text-light-gray font-semibold">
                {price}
              </p>
            </div>
            <div className=" flex ml-3">
              <p className=" text-secondary my-3 font-medium text-xl">
                {tittle}
              </p>
            </div>
            <div className=" flex ">
              <img
                className=" object-cover h-16 rounded-full"
                src={userImg}
                alt=""
              />
              <p className=" mt-4 ml-3 text-light-gray text-lg my-2">
                {userName}
              </p>
            </div>
          </div>
          <div className="my-4">
            <span className=" text-light-gray  ">
              {" "}
              <hr />
            </span>
          </div>
          <div className=" flex justify-around items-center">
          <div className=" flex my-4">
          <div className=" flex">
              <p className=" text-primary mx-1 mt-1 ">
                <ion-icon name="person-outline"></ion-icon>
              </p>{" "}
              <p className=" text-light-gray m-1">{user}</p>
            </div>
            <div className=" flex mt-1 ml-5">
              <p className=" text-primary"><ion-icon name="book-outline"></ion-icon></p>
              <p className=" mx-1 ml-2 ">{book}</p>
            </div>
          </div>
            <div>
              <p className="text-yellow-400 ">
                <span>
                  <ion-icon name="star"></ion-icon>
                </span>
                <span>
                  <ion-icon name="star"></ion-icon>
                </span>
                <span>
                  <ion-icon name="star"></ion-icon>
                </span>
                <span>
                  <ion-icon name="star"></ion-icon>
                </span>
                <span>
                  <ion-icon name="star"></ion-icon>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourcesCardDetails;
