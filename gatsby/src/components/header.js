import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const WrapperDiv = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`
const LogoDiv = styled.div`
  display: grid;
  place-items: center;
`

function Header() {
  return (
    <WrapperDiv>
      <LogoDiv>MP</LogoDiv>
      <nav>
        <ul>
          <li>
            <Link to="#">Link kuhugi</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/eimidagi/"> eimidagi</Link>
          </li>
          <li>
            <Link to="/works/">Works</Link>
          </li>
        </ul>
      </nav>
    </WrapperDiv>
  )
}

export default Header
