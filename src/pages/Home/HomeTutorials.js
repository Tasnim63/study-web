import React, { useEffect, useState } from 'react';
import tutorial from '../../assets/top-tutorial.png';
import TutorialDetails from './TutorialDetails';
function HomeTutorials() {
    const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("carddata.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
 <div className= ' flex items-center justify-center mt-16'>

  <img src={tutorial} alt="" />
 </div>
    <div className=" flex justify-center items-center my-10">
     <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
     {cards.map(card =>
        <TutorialDetails
        key={card}
        card={card} 
        ></TutorialDetails>
        )}
     </div>
     </div>
     <div className=' text-center'>
        <button className=' my-20 px-6 py-3 rounded-md font-xl font-semibold hover:bg-secondary  bg-primary text-white'> Explore All Courses</button>
     </div>
    </>
  )
}

export default HomeTutorials
