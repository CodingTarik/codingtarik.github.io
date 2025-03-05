---
Title: Pure Functions vs High-order Functions vs First-Class Functions
layout: post
title: Pure Functions vs High-order Functions vs First-Class Functions
---


### 1. Pure Functions

A **pure function** is a function that satisfies two key properties:

- **Deterministic**: Given the same input, a pure function will always produce the same output. This means that its behavior is predictable.
  
- **No Side Effects**: A pure function does not cause any observable side effects. It does not modify any external state or variables, nor does it perform any actions that affect the outside world, such as writing to files, updating a database, or changing global variables.

#### Example of a Pure Function
```haskell
add :: Int -> Int -> Int
add x y = x + y
```
In this example, the `add` function takes two integers and returns their sum. It always produces the same output for the same inputs and does not modify any external state.

### 2. Higher-Order Functions

A **higher-order function** is a function that can take other functions as arguments or return a function as a result. This is a powerful concept in functional programming that allows for greater abstraction and modularity.

There are two common types of higher-order functions:
- **Functions that take other functions as arguments**: These functions can apply the passed-in functions to their own inputs.
- **Functions that return other functions**: These can create new functions with specific behaviors.

#### Example of a Higher-Order Function
```haskell
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)
```
In this example, `applyTwice` is a higher-order function that takes a function `f` and an argument `x`. It applies `f` to `x` twice. If you use it with a function like `addOne`:

```haskell
addOne :: Int -> Int
addOne x = x + 1

result = applyTwice addOne 3 -- This will result in 5 (3 + 1 + 1)
```

### 3. First-Class Functions

**First-class functions** are functions that are treated as first-class citizens in a programming language. This means that functions can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned as values from other functions

This flexibility allows for powerful programming techniques, such as function composition, callbacks, and higher-order functions.

#### Example of First-Class Functions
```haskell
-- A function that returns another function
makeMultiplier :: Int -> (Int -> Int)
makeMultiplier factor = (\x -> x * factor)

double = makeMultiplier 2
result = double 5 -- This will result in 10 (5 * 2)
```
In this example, `makeMultiplier` is a function that takes an integer `factor` and returns a new function that multiplies its input by that factor. The `double` variable now holds a function that doubles its input.

### Summary

- **Pure Functions**: Always produce the same output for the same input and have no side effects.
- **Higher-Order Functions**: Functions that take other functions as arguments or return functions.
- **First-Class Functions**: Functions that can be assigned to variables, passed as arguments, and returned from other functions.

These concepts are fundamental to functional programming and enable developers to write clear, modular, and maintainable code.
