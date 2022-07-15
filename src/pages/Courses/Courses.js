import React from 'react'
import HomeTutorials from '../Home/HomeTutorials'
import CourceFooter from './CourceFooter'
import CourcesBanner from './CourcesBanner'

function Courses() {
  return (
    <>
      <CourcesBanner></CourcesBanner>
      <HomeTutorials></HomeTutorials>
      {/* <CourcesCardDetails></CourcesCardDetails> */}
      <CourceFooter></CourceFooter>
    </>
  )
}

export default Courses
