import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
   width: 100%;
   
   height: 600px;
`

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 5px solid yellow;
  h1 {
    width: 30%;
    border: 1px solid blue;
    height: 200px;
    z-index: 4;
    background: blue;
    margin-bottom: -6em;
    padding: 1em;
  }
  h4{
    text-align: right;
  }
  .first-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    border: 1px solid red;
  }
`

export default function Home({ data }) {
  const contentArr = data.osad.nodes
  return (
    <WrapperDiv>
      <section className="first-section">
        <h1>
          Hi and welcome
          <br /> <span>to gatsby testpage</span>
        </h1>
        {contentArr.map(elem=>(
          <div key={elem.id} >
          <h4>{elem.name}</h4>
          <StyledImg fluid={elem.image.asset.fluid} alt="" />
        <p>{elem.description}</p>
          </div>
        ))}
        <h3>Siin on tallinna pilt</h3>
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

export const query = graphql`
query MyQuery {
  osad: allSanityPildid {
    totalCount
    nodes {
      id
      description
      name
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}`


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
