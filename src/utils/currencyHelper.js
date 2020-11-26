export const currencyFormatter = (price, currency) => {
  return price.toLocaleString('en', { style: 'currency', currency: currency })
}
