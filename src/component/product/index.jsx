import React, { useEffect, useState } from 'react'
import { ProductHeader } from './product_header'
import { ProductList } from './product_list'
import { CartList } from './cart_list'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from './query'

export const Product = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [openCart, setCartOpen] = useState(false)
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { currency: selectedCurrency }
  })

  const handleClick = previousProduct => {
    if (selectedProduct.some(product => product?.id === previousProduct?.id)) {
      const product = selectedProduct.map(uniqueProduct => {
        if (uniqueProduct?.id === previousProduct?.id) {
          return {
            ...uniqueProduct,
            quantity: uniqueProduct?.quantity + 1,
            price: previousProduct?.price * (uniqueProduct?.quantity + 1)
          }
        }
        return uniqueProduct
      })
      setSelectedProduct(product)
    } else {
      setSelectedProduct([...selectedProduct, previousProduct])
    }

    setCartOpen(!openCart)
  }

  useEffect(() => {
    if (data) {
      const newProduct = data?.products.map(product => {
        return { ...product, quantity: 1 }
      })
      setProducts(newProduct)
    }
  }, [data])

  const selectedCalculator = (type, id) => {
    const getpreviousProduct = products.filter(
      previousProduct => previousProduct?.id === id
    )
    const product = selectedProduct.map(uniqueProduct => {
      if (uniqueProduct?.id === id) {
        const qty =
          type === 'add'
            ? uniqueProduct?.quantity + 1
            : uniqueProduct?.quantity - 1
        const qtyCount = qty > 1 ? qty : 1
        return {
          ...uniqueProduct,
          price: getpreviousProduct[0]?.price * qtyCount,
          quantity: qtyCount
        }
      }
      return uniqueProduct
    })
    setSelectedProduct(product)
  }

  return (
    <Wrapper>
      <ProductHeader />
      <div className='container'>
        <div className={openCart ? 'not-active' : ''}>
          <ProductList products={products} handleClick={handleClick} />
        </div>
        <div className={`cart ${openCart ? 'active' : 'none'}`}>
          <CartList
            products={selectedProduct}
            setSelectedCurrency={setSelectedCurrency}
            setCartOpen={setCartOpen}
            selectedCalculator={selectedCalculator}
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    padding: 2rem;
    background-color: rgb(242, 243, 240);
    position: relative;
    min-height: 100%;
    padding-bottom: 1rem;
    min-width: 30rem;
    transform: scaleX(1);
    transform-origin: right;
    transition: 0.3s ease;

    .not-active {
      opacity: 0.5;
    }

    .cart {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      z-index: -999999;
      transition: 0.5s;
      justify-content: flex-end;

      &.active {
        z-index: 999999;
        display: flex;
      }
    }
  }
`
