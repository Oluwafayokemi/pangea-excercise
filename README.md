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


### Set up Guide
- cd into the newly cloned folder
- Go into the project directory:
- create a .env file by running `touch .env` in the project directory
- copy the details in .env.example to the .env file
- paste the database url to the .env file and replace with the username and password you added as user
- Do the same for the test db - create another database and paste the url in the DB_TEST_URL

- on your terminal run

```
npm install 
```
To install all packages

```
npm test
```
To run test
```
npm run dev 
```
On your browser navigate to localhost:4000
* You should see this *
`🚀 Server ready at http://localhost:4000/`

- Open postman and test out the endpoints;

### For Api Documentation
API Endpoints
To create a location:
- on the graphql play ground running on http://localhost:4000/
- create location
```
mutation {
  createLocation(location: String, male_population: Integer, female_population: Integer){
      id
      location
      male_population
      female_population
      total_population
      parent_location
    }
  
```
- get list of locations :
```
query {
  getAllLocations{
  id
  female_population
  male_population
  total_population
  parent_location
}
```
- get one location:
```
query {
  getOneLocation(id: ID!){
  id
  male_population
  female_population
  total_population
  parent_location
}
```
- update location:
```
mutation {
  updateLocation(id: ID!, location: String!){
  id
  location
  male_population
  female_population
  total_population
  parent_location
}
```
- Delete location:
```
mutation {
  deleteLocation(id: ID!){
  id
  location
  male_population
  female_population
  total_population
  parent_location
  }
}
```
