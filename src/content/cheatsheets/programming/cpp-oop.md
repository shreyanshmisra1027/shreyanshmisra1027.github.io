---
title: C++ Object-Oriented Programming
description: Classes, constructors, Rule of Zero/Three/Five, encapsulation, inheritance, and runtime polymorphism.
category: programming
subcategory: cpp
tags: [cpp, oop, classes, inheritance]
difficulty: intermediate
order: 9
draft: false
---

# C++ Object-Oriented Programming

Core concepts of classes, inheritance, encapsulation, and virtual table runtime polymorphism in C++.

## Class Definition & Member Initializer Lists

```cpp
#include <string>
#include <utility>

class Entity {
private:
    std::string name;
    int health;

public:
    // Member initializer list avoids double initialization
    Entity(std::string name, int health)
        : name(std::move(name)), health(health) {}

    // Const-qualified member method (guarantees no mutations)
    [[nodiscard]] const std::string& getName() const {
        return name;
    }

    void takeDamage(int amount) {
        health -= amount;
    }
};
```

## The Rule of Five

If a class manages an acquired resource (raw handles, sockets), explicitly define or delete the special member functions:

```cpp
class ResourceHolder {
public:
    ResourceHolder();                                 // Default constructor
    ~ResourceHolder();                                // Destructor
    ResourceHolder(const ResourceHolder& other);            // Copy constructor
    ResourceHolder& operator=(const ResourceHolder& other); // Copy assignment
    ResourceHolder(ResourceHolder&& other) noexcept;            // Move constructor
    ResourceHolder& operator=(ResourceHolder&& other) noexcept; // Move assignment
};
```
*Note: In modern code, prefer the **Rule of Zero**: use standard smart containers (`std::vector`, `std::unique_ptr`) so the compiler generates clean constructors/destructors automatically.*

## Polymorphism and Virtual Methods

Runtime dynamic dispatch requires `virtual` and a virtual destructor:

```cpp
#include <iostream>
#include <memory>

class Shape {
public:
    virtual ~Shape() = default; // Essential for correct cleanup
    virtual double area() const = 0; // Pure virtual function (Abstract class)
};

class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double area() const override { // 'override' verifies matching base signature
        return width * height;
    }
};

void printArea(const Shape& shape) {
    std::cout << "Area: " << shape.area() << "\n";
}
```
