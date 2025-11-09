export default {
  id: 'cpp-enum-vs-enum-class',
  title: 'Difference Between enum and enum class in C++',
  description: 'Learn the differences between traditional enums and enum classes (scoped enums) in C++, their advantages, and when to use each.',
  date: '2024-09-17',
  author: 'Tarik',
  categories: ['Computer Science', 'C++', 'Programming'],
  thumbnail: null,
  featured: false,
  keywords: ['c++', 'enum', 'enum class', 'scoped enum', 'strongly typed enum', 'c++11'],
  
  content: `
# Difference Between enum and enum class in C++

C++11 introduced \`enum class\` (also called "scoped enums" or "strongly-typed enums") as an improvement over traditional \`enum\`. Understanding the differences is crucial for writing modern, type-safe C++ code.

## Traditional enum (C-style)

Traditional enums in C++ are inherited from C and have several limitations:

\`\`\`cpp
enum Color {
    RED,
    GREEN,
    BLUE
};

enum Size {
    SMALL,
    MEDIUM,
    LARGE
};

Color c = RED;
Size s = SMALL;
\`\`\`

### Problems with Traditional enum

#### 1. Unscoped Names

Enum values are in the same scope as the enum itself, leading to name collisions:

\`\`\`cpp
enum Color { RED, GREEN, BLUE };
enum TrafficLight { RED, YELLOW, GREEN };  // ERROR: RED and GREEN already defined!

// Must use workarounds:
enum Color { COLOR_RED, COLOR_GREEN, COLOR_BLUE };
enum TrafficLight { LIGHT_RED, LIGHT_YELLOW, LIGHT_GREEN };
\`\`\`

#### 2. Implicit Conversion to int

Traditional enums can be implicitly converted to integers, which can lead to bugs:

\`\`\`cpp
Color c = RED;
int value = c;  // OK: Implicit conversion
if (c == 0) {   // OK: Compares with integer
    // This works, but is it what we want?
}

// Dangerous: Can compare different enum types
Color color = RED;
Size size = SMALL;
if (color == size) {  // Compiles! But semantically wrong
    // This shouldn't compile, but it does
}
\`\`\`

#### 3. No Type Safety

Different enum types can be compared and assigned:

\`\`\`cpp
Color c = RED;
Size s = SMALL;
c = static_cast<Color>(s);  // Dangerous: No type safety
\`\`\`

#### 4. Underlying Type Not Specified

The underlying type is implementation-defined, which can cause portability issues:

\`\`\`cpp
enum SmallEnum { A, B, C };  // Could be char, int, or something else
\`\`\`

## enum class (C++11 Scoped Enums)

\`enum class\` addresses all the problems of traditional enums:

\`\`\`cpp
enum class Color {
    RED,
    GREEN,
    BLUE
};

enum class Size {
    SMALL,
    MEDIUM,
    LARGE
};
\`\`\`

### Advantages of enum class

#### 1. Scoped Names

Enum values are scoped to the enum name, preventing name collisions:

\`\`\`cpp
enum class Color { RED, GREEN, BLUE };
enum class TrafficLight { RED, YELLOW, GREEN };  // OK: No collision!

Color c = Color::RED;  // Must use scope operator
TrafficLight light = TrafficLight::RED;  // Different RED
\`\`\`

#### 2. No Implicit Conversion

\`enum class\` values cannot be implicitly converted to integers:

\`\`\`cpp
enum class Color { RED, GREEN, BLUE };

Color c = Color::RED;
// int value = c;  // ERROR: No implicit conversion
int value = static_cast<int>(c);  // OK: Explicit conversion

// if (c == 0) { }  // ERROR: Cannot compare with int
if (c == Color::RED) { }  // OK: Compare with same type
\`\`\`

#### 3. Strong Type Safety

Different enum classes cannot be compared or assigned:

\`\`\`cpp
enum class Color { RED, GREEN, BLUE };
enum class Size { SMALL, MEDIUM, LARGE };

Color c = Color::RED;
Size s = Size::SMALL;

// if (c == s) { }  // ERROR: Cannot compare different enum classes
// c = s;  // ERROR: Cannot assign different enum classes
\`\`\`

#### 4. Specifiable Underlying Type

You can explicitly specify the underlying type:

\`\`\`cpp
enum class SmallEnum : char { A, B, C };  // Underlying type is char
enum class IntEnum : int { X, Y, Z };     // Underlying type is int
enum class LongEnum : long long { P, Q };  // Underlying type is long long
\`\`\`

## Side-by-Side Comparison

### Example: Traditional enum

\`\`\`cpp
enum Color { RED, GREEN, BLUE };
enum Size { SMALL, MEDIUM, LARGE };

void example() {
    Color c = RED;  // No scope needed
    Size s = SMALL;
    
    int value = c;  // Implicit conversion to int
    if (c == 0) { } // Can compare with int
    
    // Dangerous: Can compare different enums
    if (c == s) { } // Compiles, but wrong!
}
\`\`\`

### Example: enum class

\`\`\`cpp
enum class Color { RED, GREEN, BLUE };
enum class Size { SMALL, MEDIUM, LARGE };

void example() {
    Color c = Color::RED;  // Scope required
    Size s = Size::SMALL;
    
    // int value = c;  // ERROR: No implicit conversion
    int value = static_cast<int>(c);  // Explicit conversion needed
    
    // if (c == 0) { }  // ERROR: Cannot compare with int
    if (c == Color::RED) { }  // OK: Type-safe comparison
    
    // if (c == s) { }  // ERROR: Cannot compare different enum classes
}
\`\`\`

## When to Use Each

### Use enum class (Recommended)

- **New code**: Always prefer \`enum class\` in new C++ code
- **Type safety required**: When you need strong type checking
- **Large codebases**: Prevents name collisions
- **Performance-critical**: Can specify underlying type for memory optimization

\`\`\`cpp
// Good: Type-safe, scoped
enum class Status {
    PENDING,
    PROCESSING,
    COMPLETED,
    FAILED
};

void processRequest(Status status) {
    switch (status) {
        case Status::PENDING:
            // Handle pending
            break;
        case Status::COMPLETED:
            // Handle completed
            break;
        // Compiler warns if you miss a case
    }
}
\`\`\`

### Use Traditional enum (Legacy/Compatibility)

- **Legacy code**: When maintaining old C++ code
- **C compatibility**: When interfacing with C code
- **Bit flags**: Sometimes used for bit manipulation (though \`enum class\` with explicit underlying type is better)

\`\`\`cpp
// Legacy: Traditional enum for C compatibility
enum Flags {
    FLAG_NONE = 0,
    FLAG_READ = 1,
    FLAG_WRITE = 2,
    FLAG_EXECUTE = 4
};

// Better: enum class with explicit type
enum class Flags : unsigned int {
    NONE = 0,
    READ = 1,
    WRITE = 2,
    EXECUTE = 4
};

// Use with bitwise operators
Flags f = Flags::READ | Flags::WRITE;  // Need to overload operators
\`\`\`

## Advanced Features

### Forward Declaration

\`enum class\` can be forward-declared if you specify the underlying type:

\`\`\`cpp
// Forward declaration
enum class Color : int;  // OK: Can forward declare with underlying type

// enum Color;  // ERROR: Cannot forward declare traditional enum without underlying type

// Later definition
enum class Color : int {
    RED,
    GREEN,
    BLUE
};
\`\`\`

### Custom Underlying Type

Specify the underlying type for memory optimization:

\`\`\`cpp
// Optimize memory usage
enum class SmallEnum : char {
    VALUE1,
    VALUE2,
    VALUE3
};  // Only 1 byte instead of 4

enum class LargeEnum : long long {
    BIG_VALUE1,
    BIG_VALUE2
};  // 8 bytes for large values
\`\`\`

### Bit Flags with enum class

\`\`\`cpp
enum class Permissions : unsigned int {
    NONE = 0,
    READ = 1 << 0,   // 1
    WRITE = 1 << 1,  // 2
    EXECUTE = 1 << 2  // 4
};

// Overload operators for bitwise operations
constexpr Permissions operator|(Permissions a, Permissions b) {
    return static_cast<Permissions>(
        static_cast<unsigned int>(a) | static_cast<unsigned int>(b)
    );
}

constexpr Permissions operator&(Permissions a, Permissions b) {
    return static_cast<Permissions>(
        static_cast<unsigned int>(a) & static_cast<unsigned int>(b)
    );
}

void example() {
    Permissions p = Permissions::READ | Permissions::WRITE;
    if ((p & Permissions::READ) != Permissions::NONE) {
        // Has read permission
    }
}
\`\`\`

## Migration Guide

### Migrating from enum to enum class

1. **Add scope operator**: \`RED\` → \`Color::RED\`
2. **Fix implicit conversions**: Add explicit \`static_cast\` where needed
3. **Fix comparisons**: Ensure comparing same enum types
4. **Update switch statements**: Use scoped names

\`\`\`cpp
// Before: Traditional enum
enum Status { PENDING, COMPLETED };
void process(Status s) {
    if (s == 0) { }  // Implicit conversion
}

// After: enum class
enum class Status { PENDING, COMPLETED };
void process(Status s) {
    if (s == Status::PENDING) { }  // Type-safe
    // Or: if (static_cast<int>(s) == 0) { }  // Explicit if needed
}
\`\`\`

## Summary

| Feature | enum | enum class |
|---------|------|------------|
| **Scope** | Unscoped | Scoped |
| **Name Collisions** | Possible | Prevented |
| **Implicit Conversion** | Yes (to int) | No |
| **Type Safety** | Weak | Strong |
| **Underlying Type** | Implementation-defined | Specifiable |
| **Forward Declaration** | Limited | Yes (with type) |
| **C Compatibility** | Yes | No |

> [!TIP]
> **Best Practice**: Always use \`enum class\` in new C++ code. It provides better type safety, prevents name collisions, and makes code more maintainable. Only use traditional \`enum\` when interfacing with C code or maintaining legacy systems.

**Key Takeaway**: \`enum class\` is the modern, type-safe way to define enumerations in C++. It solves all the problems of traditional enums while maintaining performance and adding flexibility.
`
};

