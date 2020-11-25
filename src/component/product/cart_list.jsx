import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GET_CURRENCY } from './query'

export const CartList = ({ products, setCartOpen }) => {
  console.log(products, '$$$$$$$$$$$$$$$$$')
  const { loading, error, data } = useQuery(GET_CURRENCY)

  const [count, setCount] = useState(1)
  const handleSelect = event => {
    console.log(event.target.value, '@@@@@@@@@@@@@@@@@@@@@')
  }

  const selectedCalculator = type => {
    if (type === 'add') {
      return setCount(count + 1)
    }
    return setCount(count > 1 ? count - 1 : 1)
  }

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Wrapper>
      <Header>
        <FontAwesomeIcon
          className='icon'
          icon='chevron-circle-right'
          onClick={() => setCartOpen(false)}
        />
        <span>Your Cart</span>
        <div />
      </Header>
      <select className='currency-select' onChange={handleSelect} name='USD'>
        {data?.currency?.map(currency => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          )
        })}
      </select>
      {products.map(product => {
        return (
          <Detail key={product?.id}>
            <div className='header'>
              <h6 className='title'>{product?.title}</h6>
              <span class='close'>&times;</span>
            </div>
            <div>
              <img src={product?.image_url} alt='productImg' />
            </div>
            <div className='base'>
              <div className='qty-selector'>
                <span
                  onClick={event => selectedCalculator('remove')}
                  className='remove-item'
                >
                  -
                </span>
                <span>{count}</span>
                <span
                  onClick={event => selectedCalculator('add')}
                  className='add-item'
                >
                  +
                </span>
              </div>
              <span className='price'>${product?.price.toFixed(2)}</span>
              <div />
            </div>
          </Detail>
        )
      })}
    </Wrapper>
  )
}
const Header = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  .icon {
    cursor: pointer;
  }
  color: grey;
  padding-bottom: 1em;
`
const Wrapper = styled.div`
  height: 100%;
  width: 30%;
  padding: 1em;
  background: #f2f2ef;

  .currency-select {
    padding: 8px 13px 5px 10px;
    background-position: 100% 60%;
    border: none;
    margin-bottom: 1em;
  }
`
const Detail = styled.div`
  padding: 1em;
  margin: 0;
  margin-bottom: 1em;
  background: #fff;
  height: auto;
  max-height: 100%;
  img {
    overflow: hidden;
    height: 80px;
    width: auto;
    object-fit: contain;
    margin-right: 0;
    margin-left: auto;
    display: block;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    .title {
      color: #1e2d2b;
      font-size: 13px;
      letter-spacing: 0.03px;
      padding: 0;
      margin: 0;
      text-rendering: optimizeLegibility;
      line-height: 1.5;
    }
    .close {
      cursor: pointer;
      font-size: 1.2em;
    }
  }
  .base {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      width: inherit;
      font-size: 13px;
      letter-spacing: 0.03px;
    }

    .qty-selector {
      border: 1px solid gray;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      span {
        padding: 8px;
      }

      .remove-item,
      .add-item {
        cursor: pointer;
      }
    }
  }
`
