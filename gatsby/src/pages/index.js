import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from "styled-components"

// const StyledImg = styled(Img)`
//   width: 100%;
//   height: auto;
// `

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 5px solid yellow;
  width: 80%;
  h1 {
    width: 30%;
    border: 1px solid blue;
  }
  /*  .gatsby-image-wrapper {
    width: 40rem;
    height: 50rem;
  } */
  /*   picture {
    width: 50%;
  } */
  .first-section {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
  }
`

export default function Home({ data }) {
  console.log(data)
  return (
    <WrapperDiv>
      <section className="first-section">
        <h1>
          Hi and welcome
          <br /> <span>to gatsby testpage</span>
        </h1>
        <h3>Siin on tallinna pilt</h3>
        {/* <StyledImg fluid={data.file.childImageSharp.fluid} alt="" /> */}
      </section>
      <section>
        <h2>About</h2>
        <p>
          This page is for trying out stuff in gatsby, and showing pictures of
          Tallinn and great amount lorem ipsum.
        </p>
        <h2>Content</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </section>
    </WrapperDiv>
  )
}

/* export const query = graphql`
  query {
    file(relativePath: { eq: "tallinn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
` */
