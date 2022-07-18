import React from 'react'
// import HomeTutorials from '../Home/HomeTutorials'
import CourceFooter from './CourceFooter'
import CourcesBanner from './CourcesBanner'
import CourcesCard from './CourcesCard'
// import Pagination from './Pagination'
import SearchCourse from './SearchCourse'

function Courses() {
  return (
    <>
      <CourcesBanner></CourcesBanner>
    
      <CourcesCard></CourcesCard>
   
      {/* <Pagination></Pagination> */}
      <SearchCourse></SearchCourse>
     
      <CourceFooter></CourceFooter>
    </>
  )
}

export default Courses
