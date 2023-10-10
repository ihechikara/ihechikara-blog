---
layout: "../../layouts/BlogPost.astro"
title: "How to use Props in Astro"
description: "You can use props to make the flow of data in your project dynamic by sharing a piece of data across multiple components. It also prevents you from rewriting code logic every time you want to create certain functionalities. Props are useful when working with components that should have dynamic (not-static) values"
pubDate: "October 10 2023"
heroImage: "/how-to-use-props-in-astro/astro-props-cover.png"
author: "Ihechikara Abba"
tags:
    - Astro
---

You can use props to keep the flow of data dynamic by sharing a piece of code logic and data across components.

In this article, you'll learn how to use props in Astro with examples. 

## How to use Props in Astro

Without props, you'll have to rewrite code logic every time you want to create certain functionalities. For example, let's create a component that shows the username and favorite language of a developer. We'll call this component `About.astro`:

```js
// ./src/components/About.astro
<div>
    <h1>My name is Ihechikara</h1>
    <h1>I code using JavScript</h1>
</div>
```

Next, we'll import it in the `index.astro` file:

```js
// ./src/pages/iindex.astro
---
import About from "../components/About.astro";
---

<div>
	<About/>
</div>

```

This is what you should see in the browser:

![browser output for imported component](/how-to-use-props-in-astro/browser-output.png)

While this functionality works, it isn't dynamic. What if we have more developers? The name and language of the developer is static so we'd have to create a new component for each developer.

With props, you can create the component once, and specify the username and language for each developer when you import and use the component. Let me show you how.

### How to use Props in Astro Example

Here's the code we'll use for creating props:
```js
// ./src/components/About.astro
---
const { username, language } = Astro.props
---

<div>
    <h1>My name is {username}</h1>
    <h1>I code using {language}</h1>
</div>
```
I'll break down the code into steps to help you understand what happens at each stage

#### Step #1 - Create `props` variable(s)

```js
// ./src/components/About.astro
---
const { username, language } = Astro.props
---
```

In the code above, we defined the variables to be used as props and assigned them to the `Astro.props` object. The object contains values created as props and let's you access and modify them in other components.

We used destructuring in the code to assign values to the `Astro.props`. If you find that confusing, then this is what it looks like without destructuring:

```js
// ./src/components/About.astro
---
const username = Astro.props.username
const language = Astro.props.language
---
```

#### Step #2 - Use `props` variables in your HTML Code
Now that we've defined the variable, we can use them directly in the HTML code:

```js
// ./src/components/About.astro

<div>
    <h1>My name is {username}</h1>
    <h1>I code using {language}</h1>
</div>
```

Next, we'll use the `About.astro` component in other components to create and modify the values of `username` and `language` for each developer.

#### Step #3 - Import and use `About.astro` Component in another Component
In the `index.astro` component, we'll import the `About.astro` component and use its attributes to dynamically render different values:

```js
// ./src/pages/iindex.astro
---
import About from "../components/About.astro";
---

<div>
	<About username="Ihechikara" language="JavaScript"/>
	<About username="Abba" language="Python"/>
</div>
```
First, we imported the component within the component's code fence:

```js
import About from "../components/About.astro";
```

We then assigned `username` and `language` attributes to the `<About/>` tag which denotes the `About.astro` component:
```js
<About username="Ihechikara" language="JavaScript"/>
<About username="Abba" language="Python"/>
```
This is what you should see in the browser:
![browser output for imported component](/how-to-use-props-in-astro/about-astro-component.png)

All you have to do now is use the `<About/>` tag and assign new values to its attributes (`username` and `language`), and you'll have the template for a new developer created

## Summary
You can use props to make the flow of data in your projects dynamic by sharing code and data across multiple components. It also prevents you from rewriting code logic every time you want to create a specific functionality. 

Props are useful when working with components that should have dynamic (not-static) values. 

This article showed you how to use props in Astro with code examples. 

Happy coding! You can find me on X (formerly Twitter) [@Ihechikara2](https://twitter.com/Ihechikara2)