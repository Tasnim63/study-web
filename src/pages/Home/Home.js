import React from "react";
import HomeFooter from "../../components/Footer/HomeFooter";
import CoursesAuthored from "./CoursesAuthored";
import HomeBanner from "./HomeBanner";
import HomeBox from "./HomeBox";
import HomeCollaborate from "./HomeCollaborate";
import HomeCourses from "./HomeCourses";
import HomeFetures from "./HomeFetures";
// import HomeTestimonial from "./HomeTestimonial";

import HomeTutorials from "./HomeTutorials";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeBox></HomeBox>
      <HomeFetures></HomeFetures>
      <HomeTutorials></HomeTutorials>
      <CoursesAuthored></CoursesAuthored>
      <HomeCourses></HomeCourses>
      <Testimonial></Testimonial>
      <HomeCollaborate></HomeCollaborate>

      <HomeFooter></HomeFooter>


    </>
  );
}

export default Home;
