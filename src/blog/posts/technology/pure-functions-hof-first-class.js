export default {
  id: 'pure-functions-hof-first-class',
  title: 'Pure Functions vs Higher-Order Functions vs First-Class Functions',
  description: 'Learn the differences between pure functions, higher-order functions, and first-class functions in programming, with examples and use cases.',
  date: '2024-09-24',
  author: 'Tarik',
  categories: ['Computer Science', 'Programming', 'Functional Programming'],
  thumbnail: null,
  featured: false,
  keywords: ['pure functions', 'higher-order functions', 'first-class functions', 'functional programming', 'programming concepts'],
  
  content: `
# Pure Functions vs Higher-Order Functions vs First-Class Functions

These three concepts are fundamental to functional programming but are often confused. Understanding their differences is crucial for writing effective functional code.

## First-Class Functions

**Definition**: Functions that can be treated like any other value - assigned to variables, passed as arguments, returned from functions, and stored in data structures.

### Characteristics

- Can be assigned to variables
- Can be passed as arguments
- Can be returned from functions
- Can be stored in data structures

### Examples

\`\`\`python
# Python: Functions are first-class
def greet(name):
    return f"Hello, {name}!"

# Assign to variable
my_function = greet
print(my_function("Alice"))  # "Hello, Alice!"

# Pass as argument
def apply_function(func, value):
    return func(value)

result = apply_function(greet, "Bob")  # "Hello, Bob!"

# Return from function
def get_greeter():
    return greet

greeter = get_greeter()
print(greeter("Charlie"))  # "Hello, Charlie!"

# Store in data structure
functions = [greet, len, str.upper]
\`\`\`

\`\`\`javascript
// JavaScript: Functions are first-class
const greet = (name) => \`Hello, \${name}!\`;

// Assign to variable
const myFunction = greet;
console.log(myFunction("Alice"));  // "Hello, Alice!"

// Pass as argument
const applyFunction = (func, value) => func(value);
const result = applyFunction(greet, "Bob");  // "Hello, Bob!"

// Return from function
const getGreeter = () => greet;
const greeter = getGreeter();
console.log(greeter("Charlie"));  // "Hello, Charlie!"

// Store in data structure
const functions = [greet, console.log, Math.max];
\`\`\`

\`\`\`java
// Java: Functions are first-class (since Java 8)
import java.util.function.Function;

Function<String, String> greet = name -> "Hello, " + name + "!";

// Assign to variable
Function<String, String> myFunction = greet;

// Pass as argument
Function<Function<String, String>, String> applyFunction = 
    func -> func.apply("Bob");
String result = applyFunction.apply(greet);  // "Hello, Bob!"

// Return from function
Function<Void, Function<String, String>> getGreeter = 
    v -> greet;
Function<String, String> greeter = getGreeter.apply(null);
\`\`\`

## Higher-Order Functions (HOF)

**Definition**: Functions that take other functions as arguments or return functions as results.

### Characteristics

- Takes function(s) as argument(s), OR
- Returns a function, OR
- Both

### Examples

\`\`\`python
# HOF: Takes function as argument
def apply_twice(func, value):
    return func(func(value))

result = apply_twice(lambda x: x * 2, 5)  # 20

# HOF: Returns function
def make_multiplier(n):
    return lambda x: x * n

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))  # 10
print(triple(5))  # 15

# HOF: Both (takes and returns function)
def compose(f, g):
    return lambda x: f(g(x))

add_one = lambda x: x + 1
multiply_two = lambda x: x * 2
pipeline = compose(multiply_two, add_one)
result = pipeline(5)  # (5 + 1) * 2 = 12
\`\`\`

### Common Higher-Order Functions

\`\`\`python
# Map: Transform each element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))  # [1, 4, 9, 16, 25]

# Filter: Keep elements matching condition
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# Reduce: Combine elements
from functools import reduce
sum_all = reduce(lambda a, b: a + b, numbers)  # 15

# Sort: Custom comparison
words = ["apple", "banana", "cherry"]
sorted_by_length = sorted(words, key=len)  # ["apple", "cherry", "banana"]
\`\`\`

## Pure Functions

**Definition**: Functions that always return the same output for the same input and have no side effects.

### Characteristics

1. **Deterministic**: Same input → same output
2. **No side effects**: Doesn't modify external state
3. **Referentially transparent**: Can be replaced with its result

### Examples

\`\`\`python
# Pure function
def add(a, b):
    return a + b  # No side effects, deterministic

# Impure function: Has side effect
total = 0
def add_to_total(x):
    global total
    total += x  # Modifies global state
    return total

# Impure function: Non-deterministic
import random
def get_random():
    return random.randint(1, 10)  # Different output each time

# Impure function: Depends on external state
def get_current_time():
    import datetime
    return datetime.datetime.now()  # Different each call
\`\`\`

### Benefits of Pure Functions

\`\`\`python
# 1. Easier to test
def test_add():
    assert add(2, 3) == 5
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
    # No setup needed, no cleanup needed

# 2. Can be memoized/cached
from functools import lru_cache

@lru_cache(maxsize=None)
def expensive_pure_function(x):
    # Expensive computation
    return x ** 2 + x + 1

# 3. Thread-safe
# Pure functions can be called from multiple threads safely

# 4. Easier to reason about
# No hidden dependencies or side effects
\`\`\`

## Relationships and Differences

### Venn Diagram Concept

- **All pure functions are functions** (but not all functions are pure)
- **Higher-order functions can be pure or impure**
- **First-class is a language feature**, not a function property
- **A function can be all three**: first-class, higher-order, and pure

### Examples Showing Relationships

\`\`\`python
# Pure, Higher-Order, First-Class Function
def compose(f, g):
    """Pure: No side effects, deterministic
       Higher-Order: Takes functions as arguments, returns function
       First-Class: Can be assigned, passed, returned"""
    return lambda x: f(g(x))

# Pure, First-Class (but not Higher-Order)
def square(x):
    """Pure: No side effects, deterministic
       First-Class: Can be assigned, passed, returned
       Not Higher-Order: Doesn't take/return functions"""
    return x * x

# Higher-Order, First-Class (but not Pure)
counter = 0
def count_calls(func):
    """Higher-Order: Takes function, returns function
       First-Class: Can be assigned, passed, returned
       Not Pure: Has side effect (modifies counter)"""
    global counter
    def wrapper(*args, **kwargs):
        global counter
        counter += 1
        return func(*args, **kwargs)
    return wrapper

# First-Class only (not Pure, not Higher-Order)
def greet(name):
    """First-Class: Can be assigned, passed, returned
       Not Pure: Prints (side effect)
       Not Higher-Order: Doesn't take/return functions"""
    print(f"Hello, {name}!")
\`\`\`

## Comparison Table

| Feature | First-Class | Higher-Order | Pure |
|---------|-------------|--------------|------|
| **Definition** | Can be treated as value | Takes/returns functions | No side effects, deterministic |
| **Language Feature** | Yes | No (function property) | No (function property) |
| **Requires** | Language support | First-class functions | Function design |
| **Examples** | Assign, pass, return | map, filter, compose | add, multiply, square |
| **Benefits** | Flexibility | Abstraction, reusability | Testability, caching, safety |

## Practical Examples

### Example 1: All Three Combined

\`\`\`python
# Pure, Higher-Order, First-Class Function
def create_adder(n):
    """Pure: Deterministic, no side effects
       Higher-Order: Returns a function
       First-Class: Can be assigned, passed, returned"""
    return lambda x: x + n

# Usage
add_five = create_adder(5)  # First-class: assigned to variable
result = add_five(10)  # 15

# Pass as argument (first-class)
def apply_operation(func, value):
    return func(value)

result2 = apply_operation(add_five, 20)  # 25

# Store in data structure (first-class)
adders = [create_adder(i) for i in range(5)]
\`\`\`

### Example 2: Functional Pipeline

\`\`\`python
# Pure functions
def add_one(x): return x + 1
def multiply_two(x): return x * 2
def square(x): return x ** 2

# Higher-order function (pure, first-class)
def compose(*functions):
    def composed(x):
        result = x
        for func in functions:
            result = func(result)
        return result
    return composed

# Create pipeline (all three concepts)
pipeline = compose(add_one, multiply_two, square)  # First-class, higher-order
result = pipeline(5)  # ((5 + 1) * 2) ** 2 = 144

# Pure: Same input always gives same output
assert pipeline(5) == 144
assert pipeline(5) == 144  # Always the same
\`\`\`

## When to Use Each

### Use First-Class Functions When:

- You need flexibility in function usage
- Building abstractions
- Creating function libraries
- Implementing callbacks

### Use Higher-Order Functions When:

- You need to abstract over operations
- Building reusable utilities (map, filter, reduce)
- Creating function composition
- Implementing decorators/patterns

### Use Pure Functions When:

- You need testability
- Building cacheable operations
- Thread-safe code
- Mathematical computations
- Predictable behavior

## Summary

**First-Class Functions:**
- Language feature: Functions as values
- Can assign, pass, return functions
- Foundation for functional programming

**Higher-Order Functions:**
- Function property: Takes/returns functions
- Enables abstraction and composition
- Examples: map, filter, reduce, compose

**Pure Functions:**
- Function property: No side effects, deterministic
- Benefits: Testability, caching, safety
- Examples: Mathematical functions, transformations

> [!TIP]
> In functional programming, you typically want functions that are **all three**: first-class (language support), higher-order (for composition), and pure (for safety and testability). Start with pure functions, use higher-order functions for abstraction, and leverage first-class function support in your language.

**Key Takeaway**: These concepts are complementary, not competing. First-class is about language capabilities, higher-order is about function design patterns, and pure is about function behavior. Understanding all three helps you write better functional code.
`
};

