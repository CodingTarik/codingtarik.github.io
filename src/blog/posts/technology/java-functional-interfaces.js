export default {
  id: 'java-functional-interfaces',
  title: 'Functional Interfaces in Java',
  description: 'Learn about functional interfaces in Java, including built-in interfaces like Function, Predicate, Consumer, and Supplier, with examples and best practices.',
  date: '2024-09-24',
  author: 'Tarik',
  categories: ['Computer Science', 'Java', 'Programming', 'Functional Programming'],
  thumbnail: null,
  featured: false,
  keywords: ['java', 'functional interfaces', 'lambda expressions', 'function', 'predicate', 'consumer', 'supplier', 'java 8'],
  
  content: `
# Functional Interfaces in Java

Functional interfaces are a cornerstone of Java's functional programming features introduced in Java 8. They enable lambda expressions and method references, making Java code more concise and expressive.

## What is a Functional Interface?

A functional interface is an interface with **exactly one abstract method**. It can have multiple default or static methods, but only one abstract method.

\`\`\`java
// Functional interface
@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);  // Single abstract method
    
    // Can have default methods
    default void printResult(int result) {
        System.out.println("Result: " + result);
    }
    
    // Can have static methods
    static Calculator create() {
        return (a, b) -> a + b;
    }
}
\`\`\`

### @FunctionalInterface Annotation

The \`@FunctionalInterface\` annotation is optional but recommended:
- Documents intent
- Compiler enforces single abstract method
- Prevents accidental addition of more abstract methods

\`\`\`java
@FunctionalInterface
public interface MyFunction {
    void apply();
    // Compiler error if you add another abstract method
}
\`\`\`

## Built-in Functional Interfaces

Java provides several functional interfaces in \`java.util.function\` package.

### 1. Function<T, R>

Represents a function that takes one argument and produces a result.

\`\`\`java
import java.util.function.Function;

// Function that converts String to Integer
Function<String, Integer> stringToInt = Integer::parseInt;
Integer result = stringToInt.apply("123");  // 123

// Function that doubles a number
Function<Integer, Integer> doubleValue = x -> x * 2;
Integer doubled = doubleValue.apply(5);  // 10

// Function composition
Function<Integer, Integer> addOne = x -> x + 1;
Function<Integer, Integer> multiplyTwo = x -> x * 2;
Function<Integer, Integer> addThenMultiply = multiplyTwo.compose(addOne);
Integer result = addThenMultiply.apply(5);  // (5 + 1) * 2 = 12
\`\`\`

### 2. Predicate<T>

Represents a boolean-valued function (test/condition).

\`\`\`java
import java.util.function.Predicate;

// Predicate to check if number is even
Predicate<Integer> isEven = x -> x % 2 == 0;
boolean result = isEven.test(4);  // true

// Predicate to check if string is not empty
Predicate<String> isNotEmpty = s -> !s.isEmpty();
boolean result2 = isNotEmpty.test("hello");  // true

// Combining predicates
Predicate<Integer> isPositive = x -> x > 0;
Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);
boolean result3 = isEvenAndPositive.test(4);  // true
boolean result4 = isEvenAndPositive.test(-2);  // false
\`\`\`

### 3. Consumer<T>

Represents an operation that takes one argument and returns no result (side effect).

\`\`\`java
import java.util.function.Consumer;

// Consumer that prints a value
Consumer<String> printer = System.out::println;
printer.accept("Hello, World!");  // Prints: Hello, World!

// Consumer that adds to a list
List<String> names = new ArrayList<>();
Consumer<String> addToList = names::add;
addToList.accept("Alice");
addToList.accept("Bob");
// names now contains ["Alice", "Bob"]

// Chaining consumers
Consumer<String> print = System.out::println;
Consumer<String> uppercase = s -> System.out.println(s.toUpperCase());
Consumer<String> printAndUppercase = print.andThen(uppercase);
printAndUppercase.accept("hello");
// Prints: hello
// Prints: HELLO
\`\`\`

### 4. Supplier<T>

Represents a supplier of results (no arguments, returns a value).

\`\`\`java
import java.util.function.Supplier;

// Supplier that generates random numbers
Supplier<Double> randomSupplier = Math::random;
Double random = randomSupplier.get();  // Random number

// Supplier that creates new objects
Supplier<List<String>> listSupplier = ArrayList::new;
List<String> newList = listSupplier.get();  // New ArrayList

// Supplier with lazy evaluation
Supplier<String> expensiveOperation = () -> {
    // This is only executed when get() is called
    return performExpensiveComputation();
};
// Computation not done yet
String result = expensiveOperation.get();  // Now executed
\`\`\`

### 5. BiFunction<T, U, R>

Takes two arguments and produces a result.

\`\`\`java
import java.util.function.BiFunction;

// BiFunction that adds two numbers
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
Integer sum = add.apply(5, 3);  // 8

// BiFunction that concatenates strings
BiFunction<String, String, String> concat = (a, b) -> a + b;
String combined = concat.apply("Hello", " World");  // "Hello World"
\`\`\`

### 6. UnaryOperator<T>

Special case of Function where input and output types are the same.

\`\`\`java
import java.util.function.UnaryOperator;

// UnaryOperator that squares a number
UnaryOperator<Integer> square = x -> x * x;
Integer result = square.apply(5);  // 25

// UnaryOperator that converts to uppercase
UnaryOperator<String> toUpper = String::toUpperCase;
String result2 = toUpper.apply("hello");  // "HELLO"
\`\`\`

### 7. BinaryOperator<T>

Special case of BiFunction where all types are the same.

\`\`\`java
import java.util.function.BinaryOperator;

// BinaryOperator for finding maximum
BinaryOperator<Integer> max = Integer::max;
Integer maximum = max.apply(5, 10);  // 10

// BinaryOperator for addition
BinaryOperator<Integer> add = Integer::sum;
Integer sum = add.apply(5, 3);  // 8
\`\`\`

## Using Functional Interfaces with Streams

Functional interfaces are commonly used with Java Streams:

\`\`\`java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Using Predicate for filtering
List<Integer> evens = numbers.stream()
    .filter(x -> x % 2 == 0)  // Predicate
    .collect(Collectors.toList());

// Using Function for mapping
List<Integer> squared = numbers.stream()
    .map(x -> x * x)  // Function
    .collect(Collectors.toList());

// Using Consumer for side effects
numbers.stream()
    .forEach(System.out::println);  // Consumer

// Using Supplier for generating
Supplier<Integer> randomSupplier = () -> (int)(Math.random() * 100);
List<Integer> randomNumbers = Stream.generate(randomSupplier)
    .limit(10)
    .collect(Collectors.toList());
\`\`\`

## Creating Custom Functional Interfaces

You can create your own functional interfaces:

\`\`\`java
@FunctionalInterface
public interface TriFunction<T, U, V, R> {
    R apply(T t, U u, V v);
}

// Usage
TriFunction<Integer, Integer, Integer, Integer> addThree = (a, b, c) -> a + b + c;
Integer result = addThree.apply(1, 2, 3);  // 6
\`\`\`

## Method References

Method references provide a shorthand for lambda expressions:

\`\`\`java
// Lambda expression
Function<String, Integer> lambda = s -> Integer.parseInt(s);

// Method reference (equivalent)
Function<String, Integer> methodRef = Integer::parseInt;

// Types of method references:
// 1. Static method reference: Class::staticMethod
Function<String, Integer> parseInt = Integer::parseInt;

// 2. Instance method reference: instance::method
String str = "hello";
Function<Integer, Character> charAt = str::charAt;

// 3. Instance method of arbitrary object: Class::instanceMethod
Function<String, Integer> length = String::length;

// 4. Constructor reference: Class::new
Supplier<List<String>> listSupplier = ArrayList::new;
\`\`\`

## Practical Examples

### Example 1: Data Processing Pipeline

\`\`\`java
import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;

public class DataProcessor {
    public static void processData(List<String> data) {
        // Predicate: Filter valid data
        Predicate<String> isValid = s -> s != null && !s.isEmpty();
        
        // Function: Transform data
        Function<String, String> toUpperCase = String::toUpperCase;
        
        // Consumer: Process each item
        Consumer<String> printer = System.out::println;
        
        // Pipeline
        data.stream()
            .filter(isValid)
            .map(toUpperCase)
            .forEach(printer);
    }
}
\`\`\`

### Example 2: Conditional Operations

\`\`\`java
import java.util.function.*;

public class ConditionalProcessor {
    public static <T> void processIf(
            T value,
            Predicate<T> condition,
            Consumer<T> action) {
        if (condition.test(value)) {
            action.accept(value);
        }
    }
    
    // Usage
    public static void main(String[] args) {
        processIf(
            10,
            x -> x > 5,  // Predicate
            System.out::println  // Consumer
        );
    }
}
\`\`\`

### Example 3: Lazy Evaluation with Supplier

\`\`\`java
import java.util.function.Supplier;

public class LazyEvaluation {
    public static void expensiveOperation(Supplier<String> supplier) {
        // Operation only executed if needed
        if (someCondition()) {
            String result = supplier.get();  // Executed here
            process(result);
        }
        // If condition is false, supplier never called
    }
    
    private static boolean someCondition() {
        return true;  // Example
    }
    
    private static void process(String s) {
        // Process the string
    }
}
\`\`\`

## Best Practices

### 1. Use Built-in Interfaces When Possible

\`\`\`java
// Good: Use built-in Function
Function<String, Integer> parser = Integer::parseInt;

// Avoid: Creating custom interface for common operations
@FunctionalInterface
interface StringToInt {
    int convert(String s);
}
\`\`\`

### 2. Compose Functions

\`\`\`java
// Good: Compose functions
Function<Integer, Integer> addOne = x -> x + 1;
Function<Integer, Integer> multiplyTwo = x -> x * 2;
Function<Integer, Integer> pipeline = addOne.andThen(multiplyTwo);
\`\`\`

### 3. Use Method References When Appropriate

\`\`\`java
// Good: Method reference
Function<String, Integer> length = String::length;

// Also good: Lambda (when method reference not applicable)
Function<String, Integer> customLength = s -> s.length() * 2;
\`\`\`

### 4. Document Complex Functional Interfaces

\`\`\`java
/**
 * Processes a value and returns a transformed result.
 * 
 * @param <T> Input type
 * @param <R> Output type
 */
@FunctionalInterface
public interface Processor<T, R> {
    R process(T input);
}
\`\`\`

## Summary

**Functional Interfaces in Java:**
- Single abstract method interfaces
- Enable lambda expressions and method references
- Built-in interfaces: Function, Predicate, Consumer, Supplier, etc.
- Used extensively with Streams API
- Make code more concise and expressive

**Key Interfaces:**
- **Function<T, R>**: Transform input to output
- **Predicate<T>**: Test condition
- **Consumer<T>**: Perform side effect
- **Supplier<T>**: Provide value
- **BiFunction<T, U, R>**: Two-argument function
- **UnaryOperator<T>**: Single-argument, same type
- **BinaryOperator<T>**: Two-argument, same type

> [!TIP]
> Start with built-in functional interfaces from \`java.util.function\`. Use method references when they make code clearer. Compose functions to build complex operations from simple ones. Only create custom functional interfaces when built-in ones don't fit your needs.

**Key Takeaway**: Functional interfaces are the foundation of Java's functional programming features. They enable writing more concise, expressive code using lambda expressions and method references, especially when working with the Streams API.
`
};

