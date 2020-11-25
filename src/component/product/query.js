import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query products($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`
export const GET_CURRENCY = gql`
  query {
    currency
  }
`
