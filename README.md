# Pangea Coding Challenge
For this challenge we'll be recreating the luminskin.com product page and cart using a GraphQL API. You can use any framework you feel comfortable with, we recommend ReactJS or Vue.js. You dont need to worry about a pixel-perfect recreation, the main thing we care about is functionality (but if it looks nice we won't hold that against your).

## Product Page Reqiurements
- Should query from https://pangaea-interviews.now.sh/api/graphql, retrieve the products and display them in a grid. Feel free to use graphql client libraries such as Apollo Client
- Each item should display the image, title, price and a "Add to Cart" button.
- For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.
- There is no need to implement the page navbar, or filter dropdown as shown in the screenshot .

## Cart Reqiurements
- When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.
- If the item already exists it should increment the quantity.
- Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.
- In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.
- It should sum the items in the cart and display them in the correct selected currency.
- Ignore anything related to subscriptions

### Why this App is useful?
Enables customers to see list of items to purchase, add items to cart and see different prices in different currencies

### Tools and Technologies used
- graphql
- Apollo Client
- React.js
- styled-component

### Get Started
- $ git clone https://github.com/Oluwafayokemi/pangea-excercise.git

### Set up Guide
- cd into the newly cloned folder
- Go into the project directory:
- on your terminal run

```
npm install 
```
To install all packages

npm run start 
```
On your browser navigate to localhost:3000 if not already routed by the server.

```
