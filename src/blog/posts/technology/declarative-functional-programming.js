export default {
  id: 'declarative-functional-programming',
  title: 'Declarative and Functional Programming: Concepts and a Functional Example',
  description: 'Learn about declarative and functional programming paradigms, their concepts, differences from imperative programming, and practical examples.',
  date: '2024-09-24',
  author: 'Tarik',
  categories: ['Computer Science', 'Programming', 'Functional Programming', 'Software Engineering'],
  thumbnail: null,
  featured: false,
  keywords: ['functional programming', 'declarative programming', 'programming paradigms', 'immutability', 'higher-order functions', 'pure functions'],
  
  content: `
# Declarative and Functional Programming: Concepts and a Functional Example

Understanding different programming paradigms is crucial for writing effective code. This article explores declarative and functional programming, their key concepts, and how they differ from imperative programming.

## Programming Paradigms Overview

### Imperative Programming

**What**: Describes **how** to achieve a result through step-by-step instructions.

\`\`\`python
# Imperative: Step-by-step instructions
def sum_squares_imperative(numbers):
    result = 0
    for num in numbers:
        squared = num * num
        result = result + squared
    return result
\`\`\`

### Declarative Programming

**What**: Describes **what** you want, not how to achieve it.

\`\`\`python
# Declarative: What we want (sum of squares)
def sum_squares_declarative(numbers):
    return sum(num * num for num in numbers)
\`\`\`

### Functional Programming

**What**: A subset of declarative programming that emphasizes:
- Pure functions
- Immutability
- Higher-order functions
- Function composition

## Key Concepts of Functional Programming

### 1. Pure Functions

A pure function always returns the same output for the same input and has no side effects.

\`\`\`python
# Pure function
def add(a, b):
    return a + b  # No side effects, deterministic

# Impure function
total = 0
def add_to_total(x):
    global total
    total += x  # Side effect: modifies global state
    return total
\`\`\`

**Benefits:**
- Easier to test
- Easier to reason about
- Can be memoized/cached
- Thread-safe

### 2. Immutability

Data structures don't change after creation. Instead, new structures are created.

\`\`\`python
# Mutable (imperative)
def add_item_mutable(items, item):
    items.append(item)  # Modifies original list
    return items

# Immutable (functional)
def add_item_immutable(items, item):
    return items + [item]  # Returns new list
    # Or: return [*items, item]
\`\`\`

### 3. Higher-Order Functions

Functions that take other functions as arguments or return functions.

\`\`\`python
# Higher-order function: takes function as argument
def apply_twice(func, value):
    return func(func(value))

# Usage
result = apply_twice(lambda x: x * 2, 5)  # 20

# Higher-order function: returns function
def make_multiplier(n):
    return lambda x: x * n

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))  # 10
print(triple(5))  # 15
\`\`\`

### 4. Function Composition

Combining simple functions to build complex ones.

\`\`\`python
def compose(f, g):
    """Compose two functions: f(g(x))"""
    return lambda x: f(g(x))

# Example
add_one = lambda x: x + 1
multiply_two = lambda x: x * 2

add_then_multiply = compose(multiply_two, add_one)
result = add_then_multiply(5)  # (5 + 1) * 2 = 12
\`\`\`

## Common Functional Patterns

### Map, Filter, Reduce

\`\`\`python
# Map: Transform each element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
# [1, 4, 9, 16, 25]

# Filter: Keep elements matching condition
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4]

# Reduce: Combine elements into single value
from functools import reduce
sum_all = reduce(lambda a, b: a + b, numbers)
# 15
\`\`\`

### List Comprehensions (Python)

\`\`\`python
# Functional style with list comprehensions
numbers = [1, 2, 3, 4, 5]

# Map equivalent
squared = [x ** 2 for x in numbers]

# Filter equivalent
evens = [x for x in numbers if x % 2 == 0]

# Map + Filter
squared_evens = [x ** 2 for x in numbers if x % 2 == 0]
\`\`\`

## Complete Functional Example

### Problem: Process User Data

Process a list of users, filter active users, calculate their average age, and format the result.

### Imperative Solution

\`\`\`python
class User:
    def __init__(self, name, age, active):
        self.name = name
        self.age = age
        self.active = active

def process_users_imperative(users):
    # Step 1: Filter active users
    active_users = []
    for user in users:
        if user.active:
            active_users.append(user)
    
    # Step 2: Calculate average age
    total_age = 0
    count = 0
    for user in active_users:
        total_age += user.age
        count += 1
    
    average_age = total_age / count if count > 0 else 0
    
    # Step 3: Format result
    result = f"Average age of {count} active users: {average_age:.2f}"
    return result
\`\`\`

### Functional Solution

\`\`\`python
from functools import reduce
from operator import add

def process_users_functional(users):
    # Step 1: Filter active users (immutable)
    active_users = [user for user in users if user.active]
    
    # Step 2: Extract ages and calculate average
    ages = [user.age for user in active_users]
    average_age = sum(ages) / len(ages) if ages else 0
    
    # Step 3: Format result
    return f"Average age of {len(active_users)} active users: {average_age:.2f}"

# Or more functional with reduce
def process_users_pure_functional(users):
    # Pure functions
    is_active = lambda user: user.active
    get_age = lambda user: user.age
    
    # Compose operations
    active_users = list(filter(is_active, users))
    ages = list(map(get_age, active_users))
    total_age = reduce(add, ages, 0)
    average_age = total_age / len(ages) if ages else 0
    
    return f"Average age of {len(active_users)} active users: {average_age:.2f}"
\`\`\`

### Even More Functional (Point-Free Style)

\`\`\`python
from functools import reduce, partial
from operator import add

def process_users_point_free(users):
    # Compose pure functions
    pipe = lambda *funcs: lambda val: reduce(lambda acc, f: f(acc), funcs, val)
    
    get_active = partial(filter, lambda u: u.active)
    get_ages = partial(map, lambda u: u.age)
    calculate_avg = lambda ages: sum(ages) / len(ages) if ages else 0
    format_result = lambda data: f"Average age of {data['count']} active users: {data['avg']:.2f}"
    
    # Pipeline
    active = list(get_active(users))
    ages = list(get_ages(active))
    avg = calculate_avg(ages)
    
    return format_result({'count': len(active), 'avg': avg})
\`\`\`

## Functional Programming in Different Languages

### JavaScript

\`\`\`javascript
// Functional style
const numbers = [1, 2, 3, 4, 5];

// Map, filter, reduce
const squared = numbers.map(x => x ** 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);

// Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
\`\`\`

### Haskell (Pure Functional)

\`\`\`haskell
-- Pure functional
sumSquares :: [Int] -> Int
sumSquares = sum . map (^2)

-- Function composition
addOne = (+1)
multiplyTwo = (*2)
addThenMultiply = multiplyTwo . addOne
\`\`\`

### Java (Functional Features)

\`\`\`java
import java.util.List;
import java.util.stream.Collectors;

// Functional style with streams
List<Integer> numbers = List.of(1, 2, 3, 4, 5);

List<Integer> squared = numbers.stream()
    .map(x -> x * x)
    .collect(Collectors.toList());

List<Integer> evens = numbers.stream()
    .filter(x -> x % 2 == 0)
    .collect(Collectors.toList());

int sum = numbers.stream()
    .reduce(0, Integer::sum);
\`\`\`

## Benefits of Functional Programming

### 1. Predictability

Pure functions are easier to reason about:

\`\`\`python
# Predictable: Same input = same output
def square(x):
    return x * x

assert square(5) == 25  # Always true
\`\`\`

### 2. Testability

Pure functions are easy to test:

\`\`\`python
def test_square():
    assert square(0) == 0
    assert square(5) == 25
    assert square(-3) == 9
    # No need to set up state or mocks
\`\`\`

### 3. Parallelization

Immutable data structures are thread-safe:

\`\`\`python
# Safe to process in parallel
def process_in_parallel(data):
    # Each operation on immutable data is safe
    results = [transform(item) for item in data]
    return results
\`\`\`

### 4. Composability

Small functions can be combined:

\`\`\`python
# Small, reusable functions
def double(x): return x * 2
def add_one(x): return x + 1
def square(x): return x * x

# Compose them
pipeline = compose(square, add_one, double)
result = pipeline(5)  # ((5 * 2) + 1) ** 2 = 121
\`\`\`

## When to Use Functional Programming

### Good For

- **Data transformations**: Map, filter, reduce operations
- **Mathematical computations**: Pure functions
- **Concurrent programming**: Immutability helps
- **Testing**: Pure functions are easier to test
- **Code reuse**: Function composition

### Consider Alternatives For

- **Performance-critical code**: Sometimes imperative is faster
- **Complex state management**: May need mutable state
- **I/O operations**: Inherently have side effects
- **Legacy codebases**: Gradual adoption may be better

## Best Practices

### 1. Prefer Pure Functions

\`\`\`python
# Good: Pure function
def calculate_total(prices):
    return sum(prices)

# Avoid: Impure function
total = 0
def add_price(price):
    global total
    total += price
\`\`\`

### 2. Use Immutable Data Structures

\`\`\`python
# Good: Create new list
def add_item(items, item):
    return items + [item]

# Avoid: Modify existing list
def add_item_mutable(items, item):
    items.append(item)  # Side effect
\`\`\`

### 3. Compose Small Functions

\`\`\`python
# Good: Small, composable functions
def process_data(data):
    return format_result(
        calculate_average(
            filter_valid(
                transform(data)
            )
        )
    )
\`\`\`

## Summary

**Functional Programming:**
- Emphasizes pure functions and immutability
- Uses higher-order functions and composition
- Declarative: describes what, not how
- Benefits: Predictability, testability, composability

**Key Concepts:**
- Pure functions: No side effects
- Immutability: Don't modify data
- Higher-order functions: Functions as values
- Function composition: Build complex from simple

> [!TIP]
> Start by writing pure functions for data transformations. Gradually adopt functional patterns like map/filter/reduce. Don't force functional programming everywhere - use it where it makes code clearer and more maintainable.

**Key Takeaway**: Functional programming is a powerful paradigm that emphasizes immutability, pure functions, and composition. While not always the best choice, it can make code more predictable, testable, and maintainable when applied appropriately.
`
};

