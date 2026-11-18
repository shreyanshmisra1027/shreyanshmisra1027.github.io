---
title: C++ Functions
description: Function signatures, parameter passing mechanics, overloading, lambdas, and constexpr functions in C++.
category: programming
subcategory: cpp
tags: [cpp, functions, lambdas]
difficulty: intermediate
order: 8
draft: false
---

# C++ Functions

A guide to function mechanics, value/reference parameter passing, lambda expressions, and compile-time evaluation.

## Parameter Passing Semantics

```cpp
#include <string>
#include <iostream>

// 1. Pass-by-value: Creates an expensive copy for large structures
void printByValue(std::string s);

// 2. Pass-by-const-reference: Zero-copy, read-only (standard for objects)
void printByConstRef(const std::string& s) {
    std::cout << s << "\n";
}

// 3. Pass-by-reference: In-place mutation
void increment(int& count) {
    count++;
}

// 4. Pass-by-rvalue-reference (std::move): Move semantics transfer
void consume(std::string&& s) {
    std::string internal = std::move(s);
}
```

## Function Overloading

Functions can share names if their parameter types or count differ:

```cpp
int calculate(int a, int b) { return a + b; }
double calculate(double a, double b) { return a * b; }
```

## Lambda Expressions

Syntax: `[captures](parameters) -> return_type { body }`

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int threshold = 10;
std::vector<int> numbers{4, 12, 8, 15, 3};

// Lambda capturing 'threshold' by value
auto count = std::count_if(numbers.begin(), numbers.end(), [threshold](int n) {
    return n > threshold;
});

// Capturing by reference: [&] captures all outer variables by ref
auto modifier = [&threshold](int delta) {
    threshold += delta;
};
```

## Constexpr Functions

Evaluated at compile-time when called with constant arguments:

```cpp
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : (n * factorial(n - 1));
}

// Evaluated at compile-time
constexpr int f5 = factorial(5); // 120
static_assert(f5 == 120, "Compile-time assertion check");
```
