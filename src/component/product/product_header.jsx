import React from 'react'
import styled from 'styled-components'

export const ProductHeader = () => {
  return (
    <Wrapper>
      <span className='left-note'>
        <div className='title'>All Products</div>
        <div>A 360° look at Lumin</div>
      </span>
      <span className='filter'>Filter By</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (min-width: 992px) {
    padding-top: 5rem;
    padding-bottom: 4rem;
  }
  .title {
    font-size: 1.5em;
  }
  .left-note {
    line-height: 2;
  }
  display: flex;
  justify-content: space-between;
  padding: 4em 8em;
  .filter {
    border: 1px solid #000;
    padding: 1em;
    height: 10px;
    width: 200px;
  }
`
