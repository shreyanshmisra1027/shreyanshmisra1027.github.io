---
title: C++ Pointers and References
description: In-depth reference on raw pointers, references, smart pointers (unique_ptr, shared_ptr), and memory management.
category: programming
subcategory: cpp
tags: [cpp, memory, pointers, smart-pointers]
difficulty: intermediate
order: 7
draft: false
---

# C++ Pointers and References

Understanding memory addresses, references, raw pointers, and modern RAII smart pointers in C++.

## References vs Pointers

| Feature | Reference (`Type&`) | Raw Pointer (`Type*`) |
| :--- | :--- | :--- |
| **Rebindable** | No (bound at initialization) | Yes (`ptr = &other`) |
| **Null state** | Cannot be null (safely) | Can be `nullptr` |
| **Syntax** | Direct access (`ref = 10`) | Dereference operator (`*ptr = 10`) |
| **Arithmetic** | No pointer arithmetic | Yes (`ptr++`, `ptr + 5`) |

```cpp
int val = 42;
int& ref = val;       // lvalue reference
int* ptr = &val;      // pointer holding address of val

ref = 100;           // val is now 100
*ptr = 200;          // val is now 200
```

## Smart Pointers (C++11 RAII)

Never use manual `new` and `delete` in modern C++. Use standard library smart pointers from `<memory>` to automate resource cleanup and prevent memory leaks.

### std::unique_ptr (Exclusive Ownership)

Zero-overhead smart pointer that exclusively owns a dynamically allocated object:

```cpp
#include <memory>
#include <iostream>

struct Resource {
    void compute() { std::cout << "Working...\n"; }
};

void run() {
    // Preferred creation method (C++14)
    auto ptr = std::make_unique<Resource>();
    ptr->compute();

    // Cannot copy unique_ptr!
    // auto copy = ptr; // COMPILER ERROR

    // Transfer ownership via move semantics
    auto transferred = std::move(ptr);
    // ptr is now nullptr, transferred owns Resource
} // Resource automatically deleted when transferred goes out of scope
```

### std::shared_ptr (Shared Ownership)

Reference-counted smart pointer. Resource is freed when the last shared pointer pointing to it is destroyed or reset:

```cpp
#include <memory>

auto sp1 = std::make_shared<int>(100);
std::cout << sp1.use_count() << "\n"; // 1

{
    auto sp2 = sp1; // increments reference count
    std::cout << sp1.use_count() << "\n"; // 2
} // sp2 destroyed, reference count drops to 1

std::cout << sp1.use_count() << "\n"; // 1
```

### std::weak_ptr (Breaking Reference Cycles)

A non-owning observer of a `std::shared_ptr`. Does not increment the reference count:

```cpp
#include <memory>

std::shared_ptr<int> sp = std::make_shared<int>(42);
std::weak_ptr<int> wp = sp; // Non-owning

if (auto locked = wp.lock()) {
    std::cout << *locked << "\n"; // Object still exists
}
```

## Common Memory Pitfalls

- **Dangling pointer**: Accessing memory after it has been deleted or after a local stack variable goes out of scope.
- **Double free**: Calling `delete` twice on the same heap address.
- **Memory leak**: Allocating with `new` and losing the address pointer without freeing. Modern C++ solves this completely using RAII containers and smart pointers.
