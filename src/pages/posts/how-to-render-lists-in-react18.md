---
layout: "../../layouts/BlogPost.astro"
title: "How To Render Lists in React 18 Using the map() Method"
description: "The map() method can be used to perform an operation on every element in a data collection."
pubDate: "April 3 2023"
heroImage: "/how-to-render-lists-in-react18/how-to-render-lists-in-react18.png"
author: "Ihechikara Abba"
tags:
    - React
---

When working with data collections in React, you'd often have to display them in your UI for users to see. The data could be coming from an API, a database, or even a JSON object. 

In this article, you'll learn how the `map()` method works in JavaScript, and how you can use it to render lists in React.

The data that we'll be mapping through will be stored in a JSON object. 

## Prerequisites
To follow along with this tutorial, you should have basic knowledge of the following: 
- React. 
- JavaScript (including ES6).

## How Does the map() Method Work in JavaScript?

The JavaScript `map()` method can be used to perform an operation on every element in a data collection. 

Here's an example that shows how the `map()` method works in JavaScript: 

```js
const array_of_nums = [1, 3, 5, 7];

const num_map = array_of_nums.map(num => num + 2);

console.log(num_map);
```

In the code above, we created an array called `array_of_nums` with these values: 1, 3, 5, 7.

Using the `map()` method, we looped through and added 2 to each number in the array: 
```js
array_of_nums.map(num => num + 2);
```

The method used the callback function -- `num` -- to iterate through the index of the every element in the array. For every index, it executes the block of code in the function (`num + 2`). 

## How To Render Lists in React Using the map() Method
In this section, you'll see how to map through a JSON object and render it's values in React. 

Here's the JSON object we'll be working with:

```js
const people = [
    { name: "John", age: 2 },
    { name: "Jane", age: 12 },
    { name: "Doe", age: 90 },
];
```
The goal is to render the person's name and age. Without mapping/looping, you'd have something like this: 

```js
function App() {
  const people = [
    { name: "John", age: 2 },
    { name: "Jane", age: 12 },
    { name: "Doe", age: 90 },
  ];

  return (
    <div className="App">
      <ul>
        <li>{`${people[0].name} is ${people[0].age} years old`}</li>
        <li>{`${people[1].name} is ${people[1].age} years old`}</li>
        <li>{`${people[2].name} is ${people[2].age} years old`}</li>
      </ul>
    </div>
  )
}

export default App
```
As can be seen above, we had write a line of code for each `name` in the JSON object: 
```js
<ul>
  <li>{`${people[0].name} is ${people[0].age} years old`}</li>
  <li>{`${people[1].name} is ${people[1].age} years old`}</li>
  <li>{`${people[2].name} is ${people[2].age} years old`}</li>
</ul>
```

Imagine having hundred names in the object. That would require at least a hundred lines of code to display each element. 

Here's a workaround using the `map()` method: 

```js
function App() {
  const people = [
    { name: "John", age: 2 },
    { name: "Jane", age: 12 },
    { name: "Doe", age: 90 },
  ];

  const peopleList = people.map((person)=><li>{person.name} is {person.age} years old</li>)

  return (
    <div className="App">
        <ul> { peopleList } </ul>
    </div>
  )
}

export default App
```

The first thing we did in the code above was to map through the `people` object and create a HTML list to for each person along with their age. We stored this in a variable called `peopleList`: 

```js
const peopleList = people.map((person)=><li>{person.name} is {person.age} years old</li>)
```

We then used `peopleList` in markup using JSX syntax:
```js
<ul> { peopleList } </ul>
```
With that single line of code, we're able to display all the values of the `people` object in the browser. 

Here's what the output would look like in the browser:

![Code output in browser](/how-to-render-lists-in-react18/code-output-in-browser.PNG)

## Summary

In this article, we talked about rendering lists in React. 

The JavaScript `map()` method can be used to execute a block of code on every element in a data collection.

Using the method's functionality, we're able to iterate through a data structure like an array and perform the same operation on each element in the array.

The code examples in this article also showed how you can iterate through the values of a JSON object and display them in the browser.

The same functionality applies to data coming from API calls or data from a database. 

Happy coding! You can find me on Twitter [@Ihechikara2](https://twitter.com/Ihechikara2)