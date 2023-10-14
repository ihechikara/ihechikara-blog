---
layout: "../../layouts/BlogPost.astro"
title: "Express Route Parameters - How To Use Route Parameters in Express.js"
description: "You can use parameters in Express.js to create dynamic routes based on user input/request. Users can add a specific parameter(s) to the request URL which Express.js will extract and return data based on the value of the parameter"
pubDate: "April 7 2023"
heroImage: "/express-route-parameters/express-route-parameters.png"
author: "Ihechikara Abba"
tags:
    - Express.js
    - Node.js
---
You can use route parameters in Express.js to create dynamic routes based on user input. Users can add a specific variable(s) to the request URL which Express.js will extract and return data based on the value of the varaiable/parameter.

In this article, you'll learn how to create dynamic routes based on user input using Express.js. 

We'll be fetching data from a JSON object with a collection of users. Using route parameters, we'll get users based on their ID.

This is a beginner friendly tutorial, so some concepts and steps will be explained in-depth.

## Table of Contents
- [Prerequisites](#prerequisites)
- [How To Set Up Express](#how-to-set-up-express)
- [How To Create Route Parameters](#how-to-create-route-parameters)
  - [Example 1 - How To Create Routes Without Parameters](#example-1---how-to-create-routes-without-parameters)
  - [Example 2 - How To Create Routes With Parameters](#example-2---how-to-create-routes-with-parameters)

## Prerequisites
To follow along with this tutorial, you should have the following: 
- Knowledge of JavaScript, Node.js and Express.js.
- [Node.js](https://nodejs.org/en) installed.

Before we dive into creating route parameters, let's set up the Express app/server.

## How To Set Up Express

To install Express, run the `npm init`command to create a `package.json` file (you can skip this command if you already have the file). Then run the command below to install Express:

```bash
npm install express
```
After the installation is complete, you can then set up an Express server.
Here's a basic setup:

```js
// app.js

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
```

Now that you have the setup done, you can start the server. The server should be running on localhost:5000 (http://localhost:5000/)

You can start the server manually by running the `node app.js` command in the terminal. Note that `app.js` is the name of my file - make sure you replace it with yours if your file has a different name. 

Alternatively, you can use [nodemon](https://www.npmjs.com/package/nodemon) to automate the process of restarting your server whenever you make a change. 

## How To Create Route Parameters
The JSON data we'll be working with will be stored in a file called `users.json`. Here's what the data looks like:

```json
// users.json

{
  "users": [
    { "name": "John", "id": 1 },
    { "name": "Jane", "id": 2 },
    { "name": "Doe", "id": 3 },
    { "name": "Ihechikara", "id": 4 }
  ]
}

```
Without dynamic route parameters, we'd have to create individual routes for each user in the `users` object.

### Example 1 - How To Create Routes Without Parameters

Here's an example for creating a specific route for the user with an ID of 1:

```js
const express = require('express')
const app = express()
const port = 5000

const {users} = require('./users.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users/1', (req, res) =>{
    const user1 = users.find((user) => user.id === 1)
    res.json(user1)
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
```
Let's breakdown the code above. 

We first imported the JSON file using the `require()` function: 
```js
const {users} = require('./users.json')
```
We then created a GET route for the user with an ID of 1: `/api/users/1`. In the route, we extracted the user with an ID of 1 from the JSON object using the `find()` method. 

The user is stored in a varaible called `user1`. After that, we return a JSON object with that user's information as a response:

```js
app.get('/api/users/1', (req, res) =>{
    const user1 = users.find((user) => user.id === 1)
    res.json(user1)
})
```
When you visit http://localhost:5000/api/users/1, you'll see a JSON object with data for the user with an ID of 1. 

The problem with this approach is that you'd have to manually create routes for each user. That becomes unreasonable when you have many users. 

In the next example, you'll see how to make the requests dynamic based of user request/input instead of creating them manually.

### Example 2 - How To Create Routes With Parameters
To use route parameters, you have to add a parameter name/variable to the URL/route. You can call this variable whatever you want. Since we're look for a user ID, we'll use an `id` varaible. 

We'll have something like this: `/api/users/:id`

Note that the `id` parameter comes after a colon (`:id`) in the route. That's the syntax for defining a route parameter.

Now let's setup our route parameter. Here's the code:
```js
const express = require('express')
const app = express()
const port = 5000

const {users} = require('./users.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users/:id', (req, res) => {
  const userID = parseInt(req.params.id)

  const user = users.find((user) => user.id === userID)

  res.json(user)
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
```

You can access route parameter names from the `req.params` object. In our case, it is `req.params.id`. 

Since the parameter comes from the user request as a string, we have to convert it to an integer. To do that, we used the `parseInt()` function and stored the value in a variable called `userID`:

```js
const userID = parseInt(req.params.id)
```

Next, we extract users based on their ID using the `find()` method and return that user in a JSON object:
```js
const user = users.find((user) => user.id === userID)
res.json(user)
```
So any user whose ID matches the `userID` parameter will be returned in the response object. 

The http://localhost:5000/api/users/1 route will return the user with an ID of 1: 
```json
{
"name": "John",
"id": 1
}
```
http://localhost:5000/api/users/4 returns the user with an ID of 4:
```json
{
"name": "Ihechikara",
"id": 4
}
```

Now you can access different users using their ID dynamically. We've eliminated the process of creating a new route for each user in the code. 

Note that when the user requests for an ID that doesn't exist in the JSON object, an empty page would be served. In this case, you can send a custom response to notify them that the user doesn't exist. 

You can do that using an `if` statement. That is: 

```js
const express = require('express')
const app = express()
const port = 5000

const {users} = require('./users.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users/:id', (req, res) => {
  const userID = parseInt(req.params.id)

  const user = users.find((user) => user.id === userID)

  if(!user){
    return res.status(404).send(`No user with the ID of ${userID}`)
  }

  res.json(user)
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
```

## Summary
Route parameters are a fun way to make user's interaction with your data more dynamic. 

This article focused on the basics of creating route parameters using Express.js. 

We saw some code examples on how to install and set up an Express server. We then saw how to create routes with and without route parameters. 

Happy coding! You can find me on Twitter [@Ihechikara2](https://twitter.com/Ihechikara2)