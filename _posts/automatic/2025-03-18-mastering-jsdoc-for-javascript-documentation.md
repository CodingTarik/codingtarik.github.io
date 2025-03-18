---
title: Mastering JSDoc for JavaScript Documentation
date: 2025-03-18T11:37:55.000Z
categories:
  - Development
  - JavaScript
  - Documentation
tags:
  - JSDoc
  - JavaScript
  - TypeScript
  - Coding Standards
---

# Introduction to JSDoc

When working with JavaScript and TypeScript, maintaining clear and effective documentation is essential for enhancing code readability and collaboration. One of the most commonly used standards for documentation is **JSDoc**. This set of conventions allows developers to annotate their JavaScript code in a way that makes it easily understandable by other developers, as well as tools like VS Code, TypeScript, ESLint, and various documentation generators.

## What is JSDoc?

JSDoc is a standardized way to create documentation for JavaScript code through specially formatted comments. By utilizing JSDoc, you can provide detailed descriptions of functions, classes, and variables, including their parameters, return types, and potential exceptions they may throw.

## Syntax for JSDoc Comments

To create JSDoc comments in your JavaScript or TypeScript code, use the following syntax:

```javascript
/**
 * Describes what the function does.
 * @param {string} name - The name of the person.
 * @param {number} age - The age.
 * @returns {string} Greeting text.
 */
function greet(name, age) {
  return `Hi ${name}, you are ${age} years old.`;
}
```

With this clear structure, anyone reading your code can quickly understand the purpose of the function and how to use it.

## Common JSDoc Tags

JSDoc supports several tags that serve different purposes. Here’s a quick overview of some of the most commonly used tags:

| Tag         | Meaning                           |
|-------------|-----------------------------------|
| `@param`    | Describes a parameter of the function |
| `@returns`  | Describes the return value of the function |
| `@typedef`  | Defines a custom type            |
| `@type`     | Specifies the type of a variable  |
| `@deprecated` | Marks an item as outdated      |
| `@example`  | Provides an example usage        |
| `@throws`   | Indicates which errors may be thrown |
| `@see`      | References additional documentation |

## Examples

### Documenting a Function

Here is an example of how to document a simple addition function:

```javascript
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum.
 */
function add(a, b) {
  return a + b;
}
```

### Documenting an Object or Variable

You can also document objects or variables with JSDoc annotations:

```javascript
/** @type {{name: string, active: boolean}} */
const user = {
  name: "Alice",
  active: true
};
```

### Custom Types with @typedef

For more complex data structures, you can define your own types using `@typedef`:

```javascript
/**
 * @typedef {Object} Product
 * @property {string} name
 * @property {number} price
 */

/** @type {Product} */
const p = {
  name: "Coffee",
  price: 3.99
};
```

## Bonus: Autocompletion in VS Code

Using JSDoc not only improves code documentation but also enhances the development experience in VS Code. Here are some of the benefits you can expect:

- **Tooltips**: Get immediate descriptions of functions and types.
- **Type Completion**: VS Code can suggest types as you write your code.
- **Type Warnings**: The editor will flag any mismatched types when parameters are passed incorrectly.

## Conclusion

JSDoc is an invaluable tool for anyone working with JavaScript or TypeScript. By incorporating clear documentation into your code, you enhance its maintainability and usability. If you are interested in exploring how to use JSDoc with classes, modules, or how to generate documentation in different formats such as HTML, feel free to delve deeper into this powerful documentation standard!