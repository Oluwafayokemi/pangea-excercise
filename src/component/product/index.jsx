import React from 'react'
import { ProductHeader } from './product_header'
import { ProductList } from './product_list'
import { CartList } from './cart_list'
import styled from 'styled-components'

export const Product = () => {
  return (
    <Wrapper>
      <ProductHeader />
      <ProductList />
      <CartList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`
