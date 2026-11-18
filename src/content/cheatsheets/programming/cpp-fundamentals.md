---
title: C++ Fundamentals
description: Comprehensive reference for modern C++ syntax, basic types, memory model, and compilation.
category: programming
subcategory: cpp
tags: [cpp, modern-cpp, basics]
difficulty: beginner
featured: true
order: 6
draft: false
---

# C++ Fundamentals

A high-performance systems programming language that gives you low-level memory control with high-level abstractions.

## Compilation Model

```bash
# Standard compile with warnings and modern standard (C++20)
g++ -std=c++20 -Wall -Wextra -O2 main.cpp -o main
./main
```

## Hello World Program

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, CODEDEX!\n";
    return 0; // 0 indicates success
}
```

## Fundamental Types & Sizes

| Type | Typical Size | Description | Value Range |
| :--- | :--- | :--- | :--- |
| `bool` | 1 byte | Boolean logical value | `true` or `false` |
| `char` | 1 byte | Character or small integer | -128 to 127 |
| `int` | 4 bytes | Signed integer | -2,147,483,648 to 2,147,483,647 |
| `double` | 8 bytes | Double-precision IEEE 754 | ~15-17 decimal digits |
| `size_t` | 8 bytes | Unsigned size type (architecture dependent) | 0 to $2^{64}-1$ |

## Variables and Initialization

```cpp
int a = 5;          // Copy initialization
int b(5);          // Direct initialization
int c{5};          // Uniform list initialization (C++11, prevents narrowing conversions)
auto d = 42;       // Type deduced by compiler as int
const double PI{3.141592653589793}; // Read-only constant
constexpr int MAX_USERS{1000};      // Compile-time evaluated constant
```

## Control Flow

### If-Else with Initializer (C++17)

```cpp
if (int status = processData(); status == 0) {
    std::cout << "Success\n";
} else {
    std::cout << "Error: " << status << "\n";
}
```

### Range-Based For Loop

```cpp
#include <vector>
#include <iostream>

std::vector<int> numbers{1, 2, 3, 4, 5};

for (const auto& num : numbers) {
    std::cout << num << " ";
}
```

## Namespaces

Avoid `using namespace std;` in header files to prevent symbol collisions:

```cpp
namespace math::geometry {
    constexpr double calculateArea(double radius) {
        return 3.1415926535 * radius * radius;
    }
}

double area = math::geometry::calculateArea(5.0);
```

## Common Mistakes

- **Narrowing conversion**: Writing `int x = 3.14;` silently truncates. Use `int x{3.14};` to produce a compiler error.
- **Uninitialized variables**: Built-in primitives outside namespace scope have indeterminate values if uninitialized.
- **Header includes**: Always use include guards (`#pragma once`) in header files.
