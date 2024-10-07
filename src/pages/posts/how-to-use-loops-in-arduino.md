---
layout: "../../layouts/BlogPost.astro"
title: "How to Use Loops in Arduino"
description: "Loops let you execute a block of code multiple times until a specific condition has been met. In Arduino, you can use different types of loops like the for loop, while loop, do...while loop, and the loop function. Knowing the differences between each of them helps you write more efficient code"
pubDate: "October 7 2024"
heroImage: "/how-to-use-loops-in-arduino/loops-in-arduino.png"
author: "Ihechikara Abba"
tags:
    - Arduino
---

You can use loops in Arduino to execute a block of code multiple times until a specific condition has been met. 

In this article, you'll learn about the commonly used loops in Arduino:

- `for` loop.
- `while` loop.
- `do...while` loop.
- `loop()` function.

## Table of Contents

- [How to Use a `for` Loop in Arduino](#how-to-use-a-for-loop-in-arduino)
  - [`for` Loop Example](#for-loop-example)
- [How to Use a `while` Loop in Arduino](#how-to-use-a-while-loop-in-arduino)
  - [`while` Loop Example](#while-loop-example)
  - [`for` Loop vs `while` Loop – Which One Should You Use?](#for-loop-vs-while-loop--which-one-should-you-use)
- [How to Use a `do...while` Loop in Arduino](#how-to-use-a-do-while-loop-in-arduino)
  - [`do...while` Loop Example #1](#do-while-loop-example-1)
  - [`do...while` Loop Example #2](#do-while-loop-example-2)
- [How to Use the `loop()` Function as a Loop in Arduino](#how-to-use-the-loop-function-as-a-loop-in-arduino)
  - [`loop()` Function as a Loop Example](#loop-function-as-a-loop-example)
- [Conclusion](#conclusion)

## How to Use a `for` Loop in Arduino

Here's the syntax for a `for` loop:

```
for (initialization; condition; increment/decrement) {
   // code to be executed
}
```

In the syntax above, we have three keywords that lets a `for` loop know what is expected to happen: `initialization`, `condition`, and `increment/decrement`.

The `initialization` keyword represents the starting point of the loop. It is usually an integer variable.

The `condition` is used to determine when the loop will stop. This is usually a logical operation/condition that controls how many times the loop will run.

`increment/decrement` is used to increase or decrease the `initialization` variable after every iteration.

### `for` Loop Example

```cpp
int greenLED = 3;

void setup() {
  Serial.begin(9600);

  for (int i = 1; i < 11; i++) {
    digitalWrite(greenLED, HIGH);
    delay(500);
    digitalWrite(greenLED, LOW);
    delay(500);
    Serial.println(i);
  }

}

void loop() {

}
```

The code above uses a `for` loop to turn an LED on and off ten times. After each iteration of the loop, the `i` variable will be increased by 1. When the variable gets to 10, the loop will stop.

Let's break the code down further using the three keywords we discussed in the `for` loop syntax.

- The `initialization` variable here is `i` and it has a value of 1.
- The `condition ` is a logical operation: `i < 11`. As long as `i` (the initialization variable) is less than 11, the loop will keep running. In other words, the loop will stop once `i` is no longer less than 11.
- The `increment` logic is `i++`. This increases the value of `1` after every iteration (one iteration = LED ON and OFF).

We also have a line of code that prints the value of `i` after every iteration: `Serial.println(i);`. You should see something like this when you look at the serial monitor:

```
1
2
3
4
5
6
7
8
9
10
```

You can see that it stops printing at 10. This is because the `i < 11` condition is no longer `true` after 10, so the loop has to stop.

## How to Use a `while` Loop in Arduino

Here's the syntax for a `while` loop:

```
while (condition) {
    // Code to be executed
}
```

The `while` loop only has the `condition` keyword in the syntax above. A `while` loop will keep running until the `condition` becomes `false`. We'll discuss the differences between `for` and `while` loops in a different section. Let's look at a `while` loop example first.

### `while` Loop Example

```cpp
int greenLED = 3;
int i = 1;

void setup() {
  Serial.begin(9600);

  while (i < 11) {
    digitalWrite(greenLED, HIGH);
    delay(500);
    digitalWrite(greenLED, LOW);
    delay(500);
    Serial.println(i);
    i++;
  }
}

void loop() {

}
```

The `condition` for the `while` loop above is `i < 11`. In the body of the loop, we turned an LED on and off, and increased the value of `i` by 1.

`i` has initial value of 1, and the loop stops when `i` is no longer less than 11.

This looks similar to the example we used in the `for` loop section, but you'll see their differences and use cases in actual projects. Let's discuss some of those use cases.

### `for` Loop vs `while` Loop – Which One Should You Use?

#### When to Use a `for` Loop

You should use a `for` loop when you know how many times the loop should run. The example used in the `for` loop section is a good example—we knew that the loop will run ten times based on the variable and condition given. 

Let's assume that you were given a task to print 1 to 20 in the serial monitor. The first thing you'll do is to define your initialization variable and a condition that keeps the variable within the expected range.

If you're going to print 1 to 20 then the initialization variable should be 1 because it'll be printed first. This should be followed by a condition that terminates the loop after 20 has been printed: `i < 21`. Here's what the code will look like:

```cpp
void setup() {
  Serial.begin(9600);

  for (int i = 1; i < 21; i++) {
    Serial.println(i);
    delay(500);
      
  }
}

void loop() {

}
```

This example above depicts the use of a `for` loop:

- We know what the expected outcome should be: print 1 to 20.
- We set the conditions to match the expected outcome: `i = 1` and `i < 21`.

A `for` loop can also be used for the following:

- Iterating over an array.
- Blinking LEDs in a sequence.
- Collecting data from sensors.

#### When to Use a `while` Loop

You should use `while` loop when the number of iterations isn't predefined. That is, the termination of the loop is dependent on a condition that isn't controlled by the loop.

The example we saw in the "How to Use a `while` Loop in Arduino" section just showed how the syntax works. Here is a practical example:

```cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Please enter a character and press Enter:");
}

void loop() {
  while (Serial.available() == 0) {
    // Do nothing and keep waiting until data is available
  }

  char userInput = Serial.read();

  Serial.print("You entered: ");
  Serial.println(userInput);
  delay(1000);
}
```

The code above prints out user input. We used a `while` loop to check if there is any serial data input available.

The condition here is `Serial.available() == 0`, which implies that there is no data available. Until the condition becomes `false`/the loop terminates, the rest of the code will not be executed.

Once you type in a character, `Serial.available()` will no longer be 0, the loop will be terminated, and the rest of the code will be executed.

This shows how to use a `while` loop to control the flow of your code. Since you'll have to read data from a user using the `Serial.read()` function, you must make sure that there's actual data to be read. Hence, the use of a `while` loop to check when data is available before proceeding.

Other practical ways of using a `while` loop includes:

- Pausing a program until an event occurs.
- Waiting for a component/device to initialize. 
- Reading data from sensors continuously, and so on.

In summary, while `for`  and `while` loops can be used interchangeably, you should:

- Use a `for` loop when you know the expected number of iterations.
- Use a `while` loop when the number of iterations is not defined.

## How to Use a `do...while` Loop in Arduino

Here's the syntax for a `do...while` loop:

```cpp
do {
    // code to be executed
} while (condition);
```

The `do...while` loop works just like a `while` loop, but the code in the loop will be executed at least once even if the condition is false. This happens because of the structure of the loop: the code in the loop's body comes before the condition, so the code will be executed before the condition is checked. 

### `do...while` Loop Example #1

```cpp
int i = 0;

void setup() {
  Serial.begin(9600);

  do {
    Serial.println(i);
    i++;
  } while (i < 10);

}

void loop() {

}
```

The code above prints 1 to 9 in the serial monitor. The logic here is the same: the loop runs until the condition becomes false. This is the typical process that you've seen in other sections of this article.

But what if the condition is false from the start? Let's see how a `do...while` loop will handle that.

### `do...while` Loop Example #2

```cpp
int i = 11;

void setup() {
  Serial.begin(9600);

  do {
    Serial.println(i);
    i++;
  } while (i < 10);

}

void loop() {

}
```

In this example, `i` has a value of 11 which means that the loop's condition—`i < 10`—is already false. In this case, instead of doing nothing, the code in the `do` block will run once.

In the serial monitor, you should see 11 printed out because we have `Serial.println(i);` in the `do` block.

## How to Use the `loop()` Function as a Loop in Arduino

When you create a new Arduino sketch using the Arduino IDE, you should have something like this:

```cpp
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
```

From the comment seen in the body of the `loop()` function, the code is expected to run repeatedly. 

Note that the function doesn't fall under control structures in Arduino. It is the part of an Arduino sketch that is supposed to run your code repeatedly. 

You may have noticed that most of the examples in this article were written within the `setup()` function. I didn't want the code/loops to run endlessly so I added them to the part of the sketch that runs only once, which helped in showing exactly how the loops work.

### `loop()` Function as a Loop Example

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello, World!");
  delay(1000);
}
```

The code above prints "Hello, World!" for as long as the program runs. 

## Conclusion

In this article, you learned about the different loops in Arduino. You saw the syntax and code examples of each loop.

Check out [my blog](https://ihechikara.com/) for articles about embedded systems, IoT, and web development.

Happy coding!

