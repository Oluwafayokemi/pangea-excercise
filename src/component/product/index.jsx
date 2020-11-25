import React, { useEffect, useState } from 'react'
import { ProductHeader } from './product_header'
import { ProductList } from './product_list'
import { CartList } from './cart_list'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS, GET_CURRENCY } from './query'

export const Product = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [openCart, setCartOpen] = useState(false)
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { currency: selectedCurrency }
  })
  const handleClick = newProduct => {
    setSelectedProduct([...selectedProduct, newProduct])
    setCartOpen(!openCart)
  }
  useEffect(() => {
    if (data) {
      setProducts(data?.products)
    }
  }, [data])

  return (
    <Wrapper>
      <ProductHeader />
      <Container>
        <div>
          <ProductList products={products} handleClick={handleClick} />
        </div>
        <div className={`cart ${openCart ? 'active' : 'none'}`}>
          <CartList
            products={selectedProduct}
            setSelectedCurrency={setSelectedCurrency}
            setCartOpen={setCartOpen}
          />
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Container = styled.div`
  padding: 2rem;
  background-color: rgb(242, 243, 240);
  position: relative;
  min-height: 100%;
  padding-bottom: 1rem;
  min-width: 30rem;
  transform: scaleX(1);
  transform-origin: right;
  transition: 0.3s ease;

  .cart {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:none;
    z-index: -999999;
    transition: 0.5s;
    justify-content: flex-end;

    &.active {
      z-index: 999999;
      display:flex;
    }
  }
  
`
