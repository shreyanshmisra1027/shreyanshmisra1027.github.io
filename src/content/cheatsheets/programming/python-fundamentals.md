---
title: Python Fundamentals
description: Core concepts and syntax for Python programming.
category: programming
subcategory: python
tags: [python, basics]
difficulty: beginner
featured: true
order: 1
draft: false
---

# Python Fundamentals

A concise reference covering the essentials of Python.

## Installation

```bash
python3 --version
```

## Hello World

```python
print("Hello, World!")
```

## Variables

```python
x = 42          # integer
name = "Alice"  # string
pi = 3.14       # float
```

## Control Flow

```python
if x > 10:
    print("Large")
else:
    print("Small")
```

## Functions

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("Bob"))
```

## Common Mistakes

- Forgetting the colon (`:`) after `if`, `for`, `while`, `def`.
- Using mutable default arguments.

## References

- Official Python Docs: https://docs.python.org/3/