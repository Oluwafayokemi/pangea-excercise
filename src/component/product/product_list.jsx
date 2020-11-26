import React from 'react'
import styled from 'styled-components'
import { currencyFormatter } from '../../utils/currencyHelper'

export const ProductList = ({ products, handleClick, selectedCurrency }) => {
 
  return (
    <Wrapper>
      {products?.map(product => {
        return (
          <div className='product' key={product?.id}>
            <div className='row'>
              <img className='img' src={product?.image_url} alt='product' />
              <div className='title'>{product?.title}</div>
            </div>
            <div className='price'>From: {`${currencyFormatter(product?.price, selectedCurrency)}`}</div>
            <button onClick={() => handleClick(product)}>Add to Cart</button>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(227, 230, 227);
  min-height: calc(100vh - 11rem);
  padding: 3rem;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;

  @media (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .row {
    flex: 1 1 0%;
    position: relative;
  }

  .product {
    margin: 0.3rem;
    margin-bottom: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 2;
  }
  .img {
    object-fit: contain;
    max-width: 100%;
    max-height: 170px;
    flex: 1 1 0%;
  }
  button {
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 250ms ease 0s;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    border: 0px;
    line-height: 1.2;
    padding-top: 2px;
    font-weight: 600;
    font-family: 'FF Bau Regular', sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 52px;
    background: rgb(75, 85, 72);
    color: rgb(252, 252, 249);
    width: 100%;
    cursor: pointer;

    @media screen and (min-width: 992px) {
      max-width: 157px;
      min-width: 190px;
    }
  }
`
