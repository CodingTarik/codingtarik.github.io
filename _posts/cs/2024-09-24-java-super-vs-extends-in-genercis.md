---
Title: Java super vs extends in genercis
layout: post
title: Java super vs extends in genercis
---
In Java, when dealing with **generics**, the keywords `extends` and `super` serve important roles in defining type bounds for generic classes and methods. Here’s a detailed explanation of how they work in the context of generics:

### 1. `extends` in Generics

The `extends` keyword in generics is used to specify an **upper bound** for a type parameter. It allows you to restrict the types that can be used as arguments for a generic class or method to a specific class or interface (and its subclasses).

#### Key Points about `extends` in Generics:
- You can specify a single class or multiple interfaces that the type parameter must extend or implement.
- It allows you to use methods and properties of the specified superclass or interface in your generic code.

#### Example of `extends` in Generics:
```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

class Cage<T extends Animal> { // T must be an Animal or its subclass
    private T animal;

    public Cage(T animal) {
        this.animal = animal;
    }

    public void makeAnimalEat() {
        animal.eat(); // Can call methods of Animal
    }
}

public class Main {
    public static void main(String[] args) {
        Cage<Dog> dogCage = new Cage<>(new Dog());
        dogCage.makeAnimalEat(); // Output: This animal eats food.
    }
}
```
In this example:
- `Cage<T extends Animal>` means that `T` can be any type that is `Animal` or a subclass of `Animal`.
- Inside the `Cage` class, you can safely call the `eat()` method since `T` is guaranteed to be an `Animal` or subclass.

### 2. `super` in Generics

The `super` keyword in generics is used to specify a **lower bound** for a type parameter. This allows you to define a type that can be a superclass of a certain class, which is particularly useful when dealing with **wildcards** in generic method parameters.

#### Key Points about `super` in Generics:
- It allows you to accept parameters of a certain type or any of its superclasses.
- It is often used in methods where you want to add elements to a collection.

#### Example of `super` in Generics:
```java
import java.util.ArrayList;
import java.util.List;

class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("The cat meows.");
    }
}

public class Main {
    public static void addAnimals(List<? super Dog> list) { // Accepts List of Dog or any superclass of Dog
        list.add(new Dog()); // You can add Dog or its subclasses
    }

    public static void main(String[] args) {
        List<Animal> animals = new ArrayList<>();
        addAnimals(animals); // Works because Animal is a superclass of Dog
    }
}
```
In this example:
- `List<? super Dog>` means that the list can accept any type that is `Dog` or a superclass of `Dog`.
- You can safely add `Dog` objects to the list since `Dog` is a subclass of `Animal`.

### Summary
- **`extends` in Generics**: Used to specify an upper bound for a type parameter, allowing only types that are the specified class or subclasses to be used. It enables access to methods and properties of the specified superclass.
- **`super` in Generics**: Used to specify a lower bound for a type parameter, allowing a type that is the specified class or any of its superclasses. It is often used in methods that need to add elements to a collection.

These concepts are essential for effectively using generics in Java, allowing for more flexible and type-safe code while working with collections and custom data structures.
