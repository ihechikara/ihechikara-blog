---
layout: "../../layouts/BlogPost.astro"
title: "How To Round Numbers in JavaScript – Explained With Code Examples"
description: "JavaScript has different methods used for rounding numbers, and they all work differently. The Math methods can be used to round numbers up, down, and to the closest integer. The toFixed() method rounds a number to a specified number of decimal places. This article show you how they work using code examples"
pubDate: "March 25 2024"
heroImage: "/how-to-round-a-number-in-js/how-to-round-a-number-in-js.png"
author: "Ihechikara Abba"
tags:
    - JavaScript
---
You can use different JavaScript methods to round numbers up, down, to the nearest integer, or specified decimal places.

In this article, you'll learn how to use different `Math` methods and the `toFixed` method to round numbers in JavaScript.

## How to Use the `Math.round()` Method in JavaScript

You can use the `Math.round()` method to round a number to the closest integer. 

Here's a code example:

```js
let num = 2.5;
let roundedNumber = Math.round(num);
console.log(roundedNumber); // Output: 3
```

In the example above, we created a variable called `num` with a value of 2.5. Using the `Math.round()` method, we rounded the number to the closest integer, which is 3.

If the digit after the decimal point is greater than or equal to 5, then the number will be rounded up to the nearest integer. 

If the digit after the decimal point is less than 5, then the number will be rounded down to the nearest integer.

## How to Use the `Math.floor()` Method in JavaScript

You can use the `Math.floor()` method to round a number down to the nearest integer. 

```js
let num = 2.5;
let roundedNumber = Math.floor(num);
console.log(roundedNumber); // Output: 2
```
The `Math.floor()` method rounds a number down irrespective of the value of the digit that comes after the decimal point. So the number will be rounded down whether the digit after the decimal point is greater than, equal to, or less than 5.

In the example above, 2.5 was rounded down to 2 using the `Math.floor()` method.

## How to Use the `Math.ceil()` Method in JavaScript

You can use the `Math.ceil()` method to round a number up to the nearest integer.

```js
let num = 2.5;
let roundedNumber = Math.ceil(num);
console.log(roundedNumber); // Output: 3
```
The code above rounds 2.5 up to 3 using the `Math.ceil()` method.

The `Math.ceil()` method rounds a number up irrespective of the value of the non-zero digit that comes after the decimal point. So the number will be rounded up as long as the digit after the decimal point is not a zero.

## How to Use the `toFixed()` Method in JavaScript

You can use the `toFixed()` method to round a number to a specified number of decimal places. The method takes the number of decimal places to be returned as a parameter.

Note that the `toFixed()` method returns a string.

Consider the example below:

```js
let num = 2.509809809;
let roundedNumber = num.toFixed(2);
console.log(roundedNumber); // Output: "2.51"
```

In the example above, we passed a parameter of 2 to the `toFixed()` method which resulted in 2.509809809 being rounded to two decimal places: 2.51.

## Summary

In this article, you learned about the different JavaScript methods that can be used for rounding numbers.

You learned how to use the `Math` methods and the `toFixed()` method to round numbers in JavaScript.

Happy coding! Check out [my YouTube channel](https://www.youtube.com/@Ihechikara) for tutorials about web development,embedded systems, and IoT.

You can find me on Twitter [@Ihechikara2](https://twitter.com/Ihechikara2)