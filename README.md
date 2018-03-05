# promo-back
This repo contains the code for a RESTful Node API to manage Property developers (promotores) and their properties (obras) using a MongoDB database.

## Important Note
Take into account that this application has been developed ONLY for my own personal training purposes so it is NOT fit for use in a production environment.

## About the app
This app shows how to use Node with Express to persist and manage data into a MongoDB database.

The application handles creating, reading, updating, and deleting Property developers and their properties.
Some API resources can only be consumed if a user session has been previously created (authoritation)

Edition, deletion of a User can only be done by an 'admin' account. 

## Requirements
- [Node and npm](https://nodejs.org)
- [MongoDB Database](https://www.mongodb.com)

## Installation and Running the App
Make sure nodemon is installed globally:

```bash
npm install -g nodemon
```

Clone the repo:

```bash
git clone https://github.com/Albertoatx/promo-back.git
```


Navigate inside the 'server' folder to install the necessary dependencies for the app to work:

```bash
npm install
```


Start the server:
```bash
nodemon appback
```

The app will be served at localhost:3000.


## Consume the API directly using the browser
For example, to consume the list of promotors: `http://localhost:3000/api/promotores/`

## Consume the API using a front-end JavaScript framework
You can also consume the 'promo-back' RESTful API using the next front-end apps I have developed: 
* an Angular.js application stored in the repo `promo-front` 
* an Angular5 application stored in the repo `xxxxxxx`