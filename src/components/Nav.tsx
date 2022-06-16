import React from 'react'
import { CSSProperties } from '@mui/styled-engine';
import MainFeaturedPost from "../backgroundImg"
import BI from "../images/backgroundImg.jpg"





const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: BI,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const Nav = () => {
  return (
    <><MainFeaturedPost post={mainFeaturedPost} />
 
    </>
  )
}

/* const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
} */

export default Nav