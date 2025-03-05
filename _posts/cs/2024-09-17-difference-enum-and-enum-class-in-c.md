---
Title: "Difference: enum and enum class in C++"
layout: post
title: "Difference: enum and enum class in C++"
---
### Explanation of `enum` and `enum class` in C++ with Examples

#### 1. **`enum` (Traditional Enumeration)**

`enum` is a user-defined type that allows assigning names to integral constants, making the code more readable. Traditional `enum` types are implicitly converted to integers, which can sometimes lead to unexpected behavior.

#### **Example of `enum`**
```cpp
#include <iostream>

enum Color {
    RED,    // Implicitly assigned 0
    GREEN,  // Implicitly assigned 1
    BLUE    // Implicitly assigned 2
};

int main() {
    Color myColor = GREEN;  // Assigning the enum value

    if (myColor == 1) { // This works because `GREEN` is implicitly 1
        std::cout << "Color is GREEN." << std::endl;
    }

    return 0;
}
```

**Explanation**:
- The `enum Color` defines three named constants: `RED`, `GREEN`, and `BLUE`.
- These constants are automatically assigned integer values starting from 0.
- The implicit conversion allows you to compare `myColor` with an integer, which can be a downside as it may lead to bugs when used incorrectly.

#### **Issues with `enum`**:
- It allows implicit conversion to integers, which can lead to type safety issues.
- Different enums can have overlapping values, leading to potential conflicts.

#### 2. **`enum class` (Scoped Enumeration)**

`enum class` (also called "strongly typed enumerations") was introduced in C++11 to address some of the issues with traditional enums. It provides better type safety and scope management.

#### **Example of `enum class`**
```cpp
#include <iostream>

enum class Color {
    RED,    // Implicitly assigned 0
    GREEN,  // Implicitly assigned 1
    BLUE    // Implicitly assigned 2
};

int main() {
    Color myColor = Color::GREEN;  // Using scoped enumeration

    // if (myColor == 1) { } // This will cause a compilation error

    if (myColor == Color::GREEN) {
        std::cout << "Color is GREEN." << std::endl;
    }

    return 0;
}
```

**Explanation**:
- `enum class` defines a scoped enumeration where the enumerators (`RED`, `GREEN`, `BLUE`) are scoped under the enumeration name (`Color`).
- This means you need to use `Color::GREEN` to access the value.
- Implicit conversion to integers is not allowed, so comparisons like `myColor == 1` will cause a compilation error, enhancing type safety.

#### **Benefits of `enum class`**:
- **Strong typing**: `enum class` values do not implicitly convert to integers.
- **Scoped**: The names of the enumeration values are scoped within the enumeration, reducing the chance of naming conflicts.

### Summary

| Feature          | `enum`              | `enum class`        |
|------------------|---------------------|---------------------|
| Implicit Conversion | Yes               | No                  |
| Scoped Names     | No                  | Yes                 |
| Type Safety      | Low                | High                |
| Usage Syntax     | `RED`              | `Color::RED`        |

Using `enum class` is generally preferred in modern C++ as it offers better type safety and avoids the pitfalls of traditional enumerations.
