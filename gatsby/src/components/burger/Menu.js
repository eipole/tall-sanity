import { Link } from 'gatsby';
import React,{useContext} from 'react'
import styled from 'styled-components'
import {OpenContext} from '../provider'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-light);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-20%);
  @media (min-width: 800px) {
    width: 100%;
  }

  p {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--clr-dark);
    text-decoration: none;
    transition: color 0.3s linear;
    
      @media (min-width: 800px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }  
  }
`;


const Menu = () => {
  const {open} = useContext(OpenContext)
    return (
      <StyledMenu open={open} >
<p>Jama</p>
<p>Jama</p>
<p>Jama</p>
<p>Jama</p>
       </StyledMenu>
    )
  }
  export default Menu;