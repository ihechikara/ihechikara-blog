---
layout: "../../layouts/BlogPost.astro"
title: "How to Use Enums in TypeScript"
description: ""
pubDate: "August 24 2023"
heroImage: "/how-to-use-enums-in-ts/typescript-enums-cover.png"
author: "Ihechikara Abba"
tags:
    - TypeScript
---

You can use enums in TypeScript to create a set of named constants with numeric or string values attached to them. The values of enum variables can't be modified or reassigned after they've been created. 

In this article, you'll learn how to create and interact with enums in TypeScript with code examples. 

## How to Create an Enum in TypeScript

You can create an enum in TS using the `enum` keyword. By default, the variables created in a enum have numeric values. The first variable will have a value of 0. The numeric value increases by 1 for every new variable created in the enum. That is: first variable will have a value of 0, the second will have a value of 1, and so on.

Here's how to create an enum:

```ts
enum Grades {
    F,
    E,
    D,
    C,
    B,
    A
}
```

In the code above, we created an enum called `Grades` with six constants: F, E, D, C, B, A. These constants have numeric values attached to them staring from 0. That is:

F = 0

E = 1

D = 2

C = 3

B = 4

A = 5

You can also use dot notation to access the value of an enum constant: 

```ts
console.log(Grades.F)
// 0
```

## How to Initialize an Enum with Values in TypeScript

In the last section, we saw how to create enums, and how the constant variables all have default values. In some cases, you'd prefer to have your own constant values instead. You can do this by assigning value(s) to the constant(s) when creating the enum. 

Here's an example:

```ts
enum Grades {
    F = 10,
    E,
    D,
    C,
    B,
    A
}

console.log(Grades.A)
// 15
```

In this example, we initialize the first variable with a value of 10. TypeScript will automatically increase (by 1) and assign values to the other variables. So they'll have values like this:

F = 10

E = 11

D = 12

C = 13

B = 14

A = 15

You can also initialize all the constant variables when creating the enum:

```ts
enum Grades {
    F = 10,
    E = 20,
    D = 30,
    C = 40,
    B = 50,
    A = 60
}
```

## How to Initialize an Enum with String Values in TypeScript

In the last two sections, we saw examples that used numeric values for enum variables. Here, you'll learn how to create and initialize an enum with string values. 

The process is the same as initializing an enum with numeric values. The difference here is that you assign strings while creating the enum. 

Here's an example:

```ts
enum Status {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed",
}
```

In the code above, we created an enum called `Status` with different variables that represent the state or status of a resource (like API data). 

You can also access the values using dot notation:

```ts
console.log(Status.InProgress)
// In Progress
```

## Summary

In this article, we talked about enums in TypeScript. They're a special type introduced in TypeScript that you can use to create a set of named constants. 

These constant variables have numeric values by default, but can also have string values. The value of enum constants are "constant" so they can't be changed after the enum has been created. 

We saw examples that showed how to create enums using default values. We also saw how to create and initialize enums using both numeric and string values. 

Happy coding! Check out [my YouTube channel](https://www.youtube.com/@Ihechikara) for tutorials about embedded systems, IoT, and web development.

You can find me on Twitter [@Ihechikara2](https://twitter.com/Ihechikara2)