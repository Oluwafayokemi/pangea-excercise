import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  return (
    <Wrapper>
      <span className='left'>
        <span className='logo'>LUMIN</span>
        <span>Shop</span>
        <span>Help</span>
        <span>Blog</span>
      </span>
      <span className='right'>
        <span>Account</span>
        <FontAwesomeIcon icon='shopping-cart'/>
      </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0rem;
  background-color: rgb(252, 252, 249);
  z-index: 1100;
  box-shadow: grey 0px 2px 3px -3px;
  .logo {
    font-size: 1.5em;
  }
  span {
    padding: 1em;
    cursor: pointer;
  }
`
