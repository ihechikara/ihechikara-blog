---
layout: "../../layouts/BlogPost.astro"
title: "Python Map – How To Use Map Function in Python"
description: "The map() function in Python can be used to perform an operation on every element in a data collection."
pubDate: "April 18 2023"
heroImage: "/how-to-use-map-function-in-python/how-to-use-map-function-in-python.png"
author: "Ihechikara Abba"
tags:
    - Python
---

You can use the `map()` function in Python to execute ablock of code for each element in an iterable object. 

In this article, you'll learn the syntax, and how to use the `map()` function to write shorter and cleaner code in Python. 

## `map()` Function Syntax in Python

The map function takes in two parameters -- a function and an iterable object like a list, tuple, and so on. 

Here's what the syntax looks like: 

```
map(function, iterable(s))
```
Let's break down the syntax:

- The `function` parameter denotes the function that'll be used to execute code for each item.
- The `iterable(s)` parameter denotes the collection or iterable object. You can pass in many iterable objects at the same time.

Now that we know what the syntax looks like, let's see some practical examples. 

## How To Use Map Function in Python
In this section, you'll learn how to use the `map()` function in Python to execute code for all the elements in a list. 

Before that, let's see an example that doesn't use the `map()` function. This will help you understand it better. 

### Example #1 - How to Square Elements of a List Without `map()` Function

```python
def square(num):
	return num * num
	
numbers = [2, 4, 6, 8]

squared_list = []

for num in numbers:
    squared_list.append(square(num))
    
print(squared_list) # [4, 16, 36, 64]

```

In the example above, we created a function -- `square()` -- that returns the square of a number. 

We then created a list called `numbers`. 

In order to sqaure all the values, we created an empty list called `squared_list`, then looped through and squared the elemenrts in the first list. After that, we stored the squared values in the new list. 

Although this method works, it's not really efficient. We had to make use of two lists and a `for` loop. 

Now let's see a shorter way of doing this in the next example. 

### Example #2 - How to Square Elements of a List With `map()` Function

```python
def square(num):
	return num * num

numbers = [2, 4, 6, 8]

result = map(square, numbers)

print(list(result)) # [4, 16, 36, 64]
```

In the code above, we created a function that squares the value of its parameter. The same function we used in the last example. 

We then created the `numbers` list. 

Next, we passed the function and the list as a parameter to the `map()` function: `map(square, numbers)`. 

The result was a new list with all the numbers squared. From [2, 4, 6, 8] to [4, 16, 36, 64]. 

The `map()` function will automatically execute the function that loops through the list and squares each element. 

## Summary

In this article, we talked about the `map()` function in Python. It is used to execute code for every element in an iterable object. 

We began by explaining the parameters used for the `map()` function. 

We then saw examples that showed how to square all the elements of a list with and without the `map()` function. 

Happy coding! Check out [my YouTube channel](https://www.youtube.com/@Ihechikara) for tutorials about embedded systems, IoT, and web development.

You can find me on Twitter [@Ihechikara2](https://twitter.com/Ihechikara2)