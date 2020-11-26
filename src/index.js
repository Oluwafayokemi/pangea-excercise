import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronCircleRight, faShoppingCart)
// const client = ...
const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
