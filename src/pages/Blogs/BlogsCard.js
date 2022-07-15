import React, { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";

function BlogsCard() {
  const [cards, serCards] = useState([]);
  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((data) => serCards(data));
  }, []);
  return (
    <>
      <div className=" flex justify-center items-center  my-24">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map((card) => (
            <BlogDetails card={card} key={card.id}></BlogDetails>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogsCard;
