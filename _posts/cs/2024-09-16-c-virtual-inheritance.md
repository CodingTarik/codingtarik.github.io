---
Title: "C++: Virtual Inheritance"
layout: post
title: "C++: Virtual Inheritance"
---
In C++, when using multiple inheritance with virtual inheritance, a shared base class is created only once, even if multiple derived classes inherit from it. The base class constructor is called just once, and you need to pass parameters to this constructor properly.

Let's break this down using an example:

### Example Class Structure

```cpp
#include <iostream>

class Base {
public:
    Base(int x) {
        std::cout << "Base constructor: " << x << std::endl;
    }
};

class Derived1 : virtual public Base {
public:
    Derived1(int x) : Base(x) {
        std::cout << "Derived1 constructor" << std::endl;
    }
};

class Derived2 : virtual public Base {
public:
    Derived2(int x) : Base(x) {
        std::cout << "Derived2 constructor" << std::endl;
    }
};

class Final : public Derived1, public Derived2 {
public:
    Final(int x) : Base(x), Derived1(x), Derived2(x) {
        std::cout << "Final constructor" << std::endl;
    }
};
```

Here, `Derived1` and `Derived2` both virtually inherit from `Base`. When you instantiate `Final`, the `Base` constructor is called only once. To pass parameters to the constructor of the common base class (`Base`), you need to use the initialization list of the **most derived class**, which is `Final` in this case.

### Important Points:
- In the most derived class (`Final` here), you must explicitly call the constructor of the base class (`Base`) in the initialization list.
- The calls to `Base` in `Derived1` and `Derived2` will be ignored in terms of construction, as `Base` will only be constructed by the class that lies at the "bottom" of the inheritance hierarchy.

### Usage Example

Here is how you instantiate `Final` and pass a parameter to the `Base` constructor:

```cpp
int main() {
    Final obj(42);
    return 0;
}
```

### What Happens:
- `Final(int x) : Base(x), Derived1(x), Derived2(x)` calls `Base(x)` first, since `Base` is the virtual base class. Then, it calls the constructors of `Derived1` and `Derived2`.

The output will be:

```
Base constructor: 42
Derived1 constructor
Derived2 constructor
Final constructor
```

### Summary:
1. With virtual inheritance, the constructor of the virtual base class is called only once by the most derived class in the hierarchy (`Final` in this case).
2. To pass parameters to the virtual base class constructor, you need to do this in the initialization list of the "last" derived class (`Final`).

So, in this example, the value passed during the creation of a `Final` object is forwarded to the `Base` constructor using the initialization list in the `Final` class.
