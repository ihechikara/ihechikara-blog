---
layout: "../../layouts/BlogPost.astro"
title: "JavaScript Sort – How To Use Sort Method in JavaScript"
description: "The sort method in JavaScript sorts an array in ascending order. The sort method works differently with strings and numbers. It evaluates the value of elements in a collection and arranges them based on their Unicode value. Using a compare function, you can sort numbers in either ascending or descending order"
pubDate: "August 20 2023"
heroImage: "/how-to-use-sort-method-in-javascript/how-to-use-sort-method-in-javascript.png"
author: "Ihechikara Abba"
tags:
    - JavaScript
---
You can use the `sort()` method in JavaScript to sort the elements of an array in ascending order. 

In this article, you'll learn how to sort strings and numbers in JavaScript using the `sort()` method. 

## `sort()` Method Syntax in JavaScript

You can simply use dot notation to attach the `sort()` method to a collection in order to sort it. Here's what the syntax looks like:

```
array.sort(compareFunction)
```

In the syntax above, `array` denotes the array to be sorted which is followed by the `sort` method with a `compareFunction` parameter. The `compareFunction` is an optional parameter that is mostly used when sorting numbers.

Let's take a look at some examples to help you understand the syntax. 

### Example #1 - How to Sort an Array of Strings in JavaScript

You can sort an array of strings in JavaScript using the `sort()` method. Here's how:

```js
const users = ["John", "Doe", "Ihechikara", "Peter"]

users.sort()

console.log(users)
// [ "Doe", "Ihechikara", "John", "Peter" ]
```

In the code above, we created an array of strings called `users` with four elements: "John", "Doe", "Ihechikara", "Peter". We then sorted the array using the `sort()` method: `users.sort()`.

The result was an array with its elements sorted in alphabetical and ascending order: "Doe", "Ihechikara", "John", "Peter". 

Sorting strings is pretty straightforward. All you have to do is attach the `sort()` method to the array name. As you'll see in the next example, thing are a bit different with numbers. 

### Example #2 - How to Sort an Array of Numbers in JavaScript

In general, the `sort()` method compares each value based on their Unicode value, and this applies to number too. 

Consider the example below:

```js
const numArr = [40, 6]

numArr.sort()

console.log(numArr)
// [ 40, 6 ]
```

In the code above, we have an array with three numbers -- 2, 40, and 6. After sorting the array, the numbers remain the same and unsorted. Based on how the `sort()` method works, the array has been sorted. 

40 is placed before 6 in the sorted array because when their Unicode values are compared, the 4 in 40 comes before 6. 

We can fix this using a compare function which evaluates the values of elements before placing them in specific positions.

### How to Use the Compare Function to Sort an Array in JavaScript

Here's what a compare function looks like:

```js
function (a, b) {
    return a - b
}
```

The two parameters in the function above -- `a` and `b` -- represents two elements being compared in the array. 

- If `a - b` returns a value less than 0, then `a` comes before `b`. 
- If `a - b` returns a value greater than 0, then `b` comes before `a`.
- If `a - b` returns a value 0, then the order of `a` and `b` remains the same.

Now let's use the compare function with an array of numbers: 

```js
const numArr = [40, 6, 2]

numArr.sort(function(a, b){ return a - b })

console.log(numArr)
// [ 2, 6, 40 ]
```

Passing the compare function as a parameter to the `sort()`, we got a sorted array of numbers in ascending order. If you change the return statement of the compare function to `b - a` then the sorted array will be in descending order.

## Summary

In this article, we talked about the `sort()` method in JavaScript. You can use it to sort an array in asceneding order.

The first example showed how to sort an array of strings in ascending order using the `sort()` method.

We then saw another example that uses a compare function to sort an array of numbers in either ascending or descending order.

Happy coding! You can find me on Twitter [@Ihechikara2](https://twitter.com/Ihechikara2)