# Pangea Coding Challenge
Recreating luminskin.com product page and cart using a GraphQL API.

## Product Page Reqiurements
- Should query endpoint, retrieve the products and display them in a grid.
- Each item should display the image, title, price and a "Add to Cart" button.
- For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.

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
- create a .env file by running `touch .env` in the project directory
- copy the details in .env.example to the .env file
- on your terminal run

```
npm install 
```
To install all packages

npm run start 
```
On your browser navigate to localhost:3000 if not already routed by the server.

```

