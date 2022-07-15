import React from 'react'
import AuthenticationFooter from '../Authentication/AuthenticationFooter'
import BlogBanner from './BlogBanner'
import BlogsCard from './BlogsCard'

function Blogs() {
  return (
   <>
   <BlogBanner></BlogBanner>
   <BlogsCard></BlogsCard>
   <AuthenticationFooter></AuthenticationFooter>
   </>
  )
}

export default Blogs
