import React from 'react'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import MainFeaturedPost from "../components/backgroundImg"
import BI from "../images/backgroundImg.jpg"
import ImgMediaCard from '../components/categoryCard'




const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: BI,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const Home = () => {
  return (
    <><MainFeaturedPost post={mainFeaturedPost} />
    <ImgMediaCard />
    </>
  )
}

/* const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
} */

export default Home