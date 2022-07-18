import React, { useState } from "react";

function Pagination() {
  let [num, setNum] = useState();
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];
  function Next(){
    setNum(++num)
  }
  return (
    <>
      <div className=" flex bg-white rounded-lg">
        <button className=" h-12 border-2 border-r-0 border-primary w-12 hover:bg-primary px-4 rounded-l-lg">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        {pages.map((p) => (
          <button className=" h-12 border-2 border-r-0">{p.page}</button>
        ))}
        <button onClick={Next}  className=" h-12 border-2 border-r-0 border-primary w-12 hover:bg-primary px-4 rounded-r-lg">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
      </div>
    </>
  );
}

export default Pagination;
