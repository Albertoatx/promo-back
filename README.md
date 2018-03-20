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
- [Local MongoDB Community Database](https://www.mongodb.com/download-center#community)

I have only tested MongoDB on Windows platforms. If that is your OS then follow these steps:

1) Set up the MongoDB environment. MongoDB requires a data directory to store all data so you have to create the folder `\data\db` on the drive from which you start MongoDB.

2) Start MongoDB manually. To start the main MongoDB process run `mongod` using a terminal (`mongod` is usually located in the folder "C:\Program Files\MongoDB\Server\3.x\bin")

Note: In this link you can check the instructions to setup and run MongoDB for other OS: `https://docs.mongodb.com/manual/installation/#tutorials)`

## Installation and Running the App

Download or clone this repo.

Make sure MongoDB is running.

Make sure nodemon is installed globally:

```bash
npm install -g nodemon
```

Navigate inside the 'server' folder to install the necessary dependencies for the app to work:

```bash
npm install
```

Start the server:
```bash
nodemon appback
```

The app will be served at `localhost:3000`.


## Consume the API directly using the browser
For example, to consume the list of promotors: `http://localhost:3000/api/promotores/`

## Consume the API using a front-end JavaScript framework
You can also consume the 'promo-back' RESTful API using the next front-end apps I have developed: 
* an Angular1 application stored in the repo [`promo-front`](https://github.com/Albertoatx/promo-front)
* an Angular5 application stored in the repo [`promo-front-ang5cli`](https://github.com/Albertoatx/promo-front-ang5cli)

