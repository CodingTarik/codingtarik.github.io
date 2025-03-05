---
Title: Functional Interfaces in Java
layout: post
title: Functional Interfaces in Java
---
In Java, interfaces that contain only a single method are called **"Functional Interfaces."** These are designed to serve as the **target for lambda expressions** or method references.

A **Functional Interface** has exactly one abstract method, although it may include default or static methods. One of the most well-known examples is the `java.lang.Runnable` interface, which defines only the `run()` method.

Since Java 8, the `@FunctionalInterface` annotation can be used to explicitly mark an interface as functional. While this annotation is optional, it helps the compiler ensure that the interface contains only one abstract method.

### Example:
```java
@FunctionalInterface
public interface MyFunctionalInterface {
    void doSomething();
}
```

### Common Functional Interfaces in Java:
- `java.util.function.Consumer<T>` (takes one argument and returns nothing)
- `java.util.function.Function<T, R>` (takes one argument and returns a result)
- `java.util.function.Predicate<T>` (takes one argument and returns a boolean)

With the introduction of Functional Interfaces in Java 8, lambda expressions and method references became possible, allowing for more concise and readable code.

Here’s an example of how you can use a **Functional Interface** with a **lambda expression** in Java. This example demonstrates a simple use case where we define and use a functional interface.

### Example of a Functional Interface with Lambda Expression

```java
@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

public class Main {
    public static void main(String[] args) {
        // Using a lambda expression to implement the Functional Interface
        Greeting greeting = (name) -> System.out.println("Hello, " + name + "!");
        
        // Invoking the method defined in the functional interface
        greeting.sayHello("Alice");
        greeting.sayHello("Bob");
    }
}
```

### Explanation:

1. **Functional Interface**: The `Greeting` interface is a functional interface because it contains only one abstract method, `sayHello(String name)`. The `@FunctionalInterface` annotation ensures that the interface conforms to the definition of a functional interface.

2. **Lambda Expression**: In the `main` method, a lambda expression `(name) -> System.out.println("Hello, " + name + "!")` is used to provide an implementation of the `sayHello` method.

3. **Calling the Lambda**: Once we assign the lambda to a variable of type `Greeting`, we can use it like any other method. Here, `greeting.sayHello("Alice")` calls the lambda expression and prints "Hello, Alice!".

### Output:
```
Hello, Alice!
Hello, Bob!
```

This example shows how functional interfaces in Java, combined with lambda expressions, can simplify code and make it more readable and expressive.
