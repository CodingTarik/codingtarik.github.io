---
Title: "C++: static_cast, dynamic_cast, reinterpret_cast, and const_cast"
layout: post
title: "C++: static_cast, dynamic_cast, reinterpret_cast, and const_cast"
---
In C++, the four cast operators (`static_cast`, `dynamic_cast`, `reinterpret_cast`, and `const_cast`) are used for different types of type conversions. Here’s an explanation of each, along with examples.

### 1. `static_cast`
`static_cast` is used for most type conversions that are known to be valid at compile time. For example, it can be used to convert a pointer from a base class to a derived class or convert primitive data types.

**Example:**
```cpp
#include <iostream>

class Base {
public:
    virtual void print() {
        std::cout << "Base class" << std::endl;
    }
};

class Derived : public Base {
public:
    void print() override {
        std::cout << "Derived class" << std::endl;
    }
};

int main() {
    Base* basePtr = new Derived();
    
    // Use static_cast to convert base class pointer to derived class pointer
    Derived* derivedPtr = static_cast<Derived*>(basePtr);
    derivedPtr->print(); // Outputs "Derived class"
    
    // Conversion between primitive data types
    int a = 10;
    double b = static_cast<double>(a);
    std::cout << "b = " << b << std::endl; // Outputs "b = 10.0"

    delete basePtr;
    return 0;
}
```

### 2. `dynamic_cast`
`dynamic_cast` is used for type conversions that are checked at runtime. It is primarily used with polymorphic classes (i.e., classes that have at least one virtual function). If the conversion is not valid, `dynamic_cast` returns `nullptr` for pointer conversions.

**Example:**
```cpp
#include <iostream>

class Base {
public:
    virtual void print() {
        std::cout << "Base class" << std::endl;
    }
};

class Derived : public Base {
public:
    void print() override {
        std::cout << "Derived class" << std::endl;
    }
};

int main() {
    Base* basePtr = new Derived();
    
    // Use dynamic_cast to convert base class pointer to derived class pointer
    Derived* derivedPtr = dynamic_cast<Derived*>(basePtr);
    
    if (derivedPtr) {
        derivedPtr->print(); // Outputs "Derived class"
    } else {
        std::cout << "Conversion failed!" << std::endl;
    }
    
    Base* baseOnly = new Base();
    Derived* invalidPtr = dynamic_cast<Derived*>(baseOnly);
    
    if (invalidPtr) {
        invalidPtr->print();
    } else {
        std::cout << "Conversion failed!" << std::endl; // Outputs this
    }

    delete basePtr;
    delete baseOnly;
    return 0;
}
```

### 3. `reinterpret_cast`
`reinterpret_cast` performs a low-level, bitwise conversion. It can be used to convert pointers to integers and vice versa. This cast should be used cautiously, as incorrect use can lead to undefined behavior.

**Example:**
```cpp
#include <iostream>

int main() {
    int num = 42;
    
    // Convert a pointer to an integer and back
    int* ptr = &num;
    uintptr_t intPtr = reinterpret_cast<uintptr_t>(ptr);
    std::cout << "Integer pointer: " << intPtr << std::endl;
    
    int* newPtr = reinterpret_cast<int*>(intPtr);
    std::cout << "Value at pointer: " << *newPtr << std::endl; // Outputs "42"
    
    return 0;
}
```

### 4. `const_cast`
`const_cast` is used to remove the `const` or `volatile` qualifier from a variable. This is useful if you need to modify a variable that was originally declared as `const`. However, changing a value that was originally declared as `const` can lead to undefined behavior.

**Example:**
```cpp
#include <iostream>

void printValue(const int* value) {
    // Remove the const qualifier
    int* modifiableValue = const_cast<int*>(value);
    *modifiableValue = 100;
}

int main() {
    int num = 42;
    printValue(&num);
    std::cout << "New value: " << num << std::endl; // Outputs "New value: 100"
    
    return 0;
}
```

### Summary
- **`static_cast`:** Compile-time conversion, e.g., base class to derived class, primitive data types.
- **`dynamic_cast`:** Runtime-checked conversion, used with polymorphic classes, safely converts base class to derived class.
- **`reinterpret_cast`:** Unsafe bit-level conversion, e.g., between pointers and integers.
- **`const_cast`:** Removes `const` or `volatile` qualifiers, allows modification of `const` declared variables.
