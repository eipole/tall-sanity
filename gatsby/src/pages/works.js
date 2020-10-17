// import { graphql } from "gatsby"
import React from "react"
// import Img from "gatsby-image"
import styled from "styled-components"

/* const StyledImage = styled(Img)`
  width: 400px;
` */
const ImageDiv = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
`

function Works() {
  return (
    <>
      <h1>Works page</h1>
      <ImageDiv>
        <h1>Siin on pildid</h1>
        {/* <StyledImage fluid={data.tallinn.childImageSharp.fluid} /> */}
        {/* <StyledImage fluid={data.lilled.childImageSharp.fluid} /> */}
      </ImageDiv>
    </>
  )
}
export default Works
/* export const query = graphql`
  query {
    tallinn: file(relativePath: { eq: "tallinn.jpg" }) {
      ...fluidImage
    }

    lilled: file(relativePath: { eq: "lilled.jpg" }) {
      ...fluidImage
    }
  }
` */
