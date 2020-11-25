import React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

const GET_CURRENCY = gql`
  query {
    currency
  }
`
const handleSelect = event => {
  console.log(event.target.value, '@@@@@@@@@@@@@@@@@@@@@')
}
export const CartList = () => {
  const { loading, error, data } = useQuery(GET_CURRENCY)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <Wrapper>
      <div>Your Cart</div>
      <select onChange={handleSelect} name='USD'>
        {data?.currency.map(currency => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          )
        })}
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`
