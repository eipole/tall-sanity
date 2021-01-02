import React  from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Menu from './burger/Menu'
import Burger from './burger/Burger'
 
const WrapperDiv = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem;
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
            <Link to="/tuisus-taenav">Link kuhugi</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mulle-meeldib-tallinn"> eimidagi</Link>
          </li>
          <li>
            <Link to="/stockholmi-laev">Works</Link>
          </li>
        </ul>
        <div >
      <Burger />
      <Menu />
      </div>
      </nav>  
    
    </WrapperDiv>
  )
}

export default Header
