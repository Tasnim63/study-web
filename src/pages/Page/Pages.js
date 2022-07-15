import React from "react";
import HomeFooter from "../../components/Footer/HomeFooter";
import Testimonial from "../Home/Testimonial";
import PageCouter from "./PageCouter";
import PagesBanner from "./PagesBanner";
import PagesInstructor from "./PagesInstructor";
import PageTran from "./PageTran";

function Pages() {
  return (
    <>
      <PagesBanner></PagesBanner>
      <PageTran></PageTran>
      <PageCouter></PageCouter>
      <PagesInstructor></PagesInstructor>
      <Testimonial></Testimonial>
      <HomeFooter></HomeFooter>
    </>
  );
}

export default Pages;
