 import React from 'react'
 import Img from 'gatsby-image'
 import {graphql} from 'gatsby'
import styled from 'styled-components'

 const WrapperDiv = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  height:100vh;
 `

function SinglePiltPage({data:{textpilt}}){
    return(
        <WrapperDiv>
            <h2>{textpilt.name} </h2>
            <Img fluid={textpilt.image.asset.fluid} />
            <p>{textpilt.description} </p>
        </WrapperDiv>
    )
}

export default SinglePiltPage

 export const query = graphql`
query ($slug: String!) {
textpilt: sanityPildid(slug: {current: {eq: $slug}}) {
      description
      id
      name
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }`
  