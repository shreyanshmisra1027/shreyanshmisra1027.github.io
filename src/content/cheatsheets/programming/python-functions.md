---
title: Python Functions
description: Comprehensive reference to Python function definitions, parameters, annotations, and advanced function features.
category: programming
subcategory: python
tags: [python, functions, intermediate]
difficulty: intermediate
order: 4
draft: false
---

# Python Functions

A comprehensive reference to Python functions with signatures, parameter patterns, and advanced features.

## Function Definition

```python
def greet(name: str, greeting: str = "Hello") -> str:
    """Greet a person with an optional greeting.

    Args:
        name: The person's name.
        greeting: The greeting to use (defaults to "Hello").
        Return: Formatted greeting string.

    Example:
        >>> greet("Bob")
        'Hello, Bob!'
    """
    return f"{greeting}, {name}!"
```

### Positional vs Keyword Arguments

```python
def process(a, b, c):
    pass

# Positional
process(1, 2, 3)

# Keyword
process(a=1, b=2, c=3)

# Mixed
process(1, b=2, c=3)
```

### Variable-Length Arguments (*args, **kwargs)

```python
def summarize(*args, **kwargs):
    # args: tuple of positional arguments
    # kwargs: dict of keyword arguments
    print(f"Positional args: {args}")
    print(f"Keyword args: {kwargs}")

summarize(1, 2, 3, title="Demo", author="Me")
```

## Default Parameter Values

```python
def power(base, exponent=2):
    """base raised to exponent power."""
    return base ** exponent

power(3)       # 9  (3^2)
power(3, 3)    # 27 (3^3)
```

### Caution: Mutable Default Arguments

```python
# ❌ BAD - shared reference across calls
def append_to(item, lst=[]):
    lst.append(item)
    return lst

append_to(1)  # [1]
append_to(2)  # [1, 2] ← unexpected!

# ✅ GOOD - use None sentinel
def append_to_fixed(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

append_to_fixed(1)  # [1]
append_to_fixed(2)  # [2]
```

## Keyword-Only Arguments

```python
def divide(dividend, divisor, *,  # * means keyword-only after this
            preserve_precision: bool = False):
    """Divide dividend by divisor with optional precision handling."""
    result = dividend / divisor
    if preserve_precision:
        return round(result, 10)
    return result

divide(10, 3)                # 3.3333333333
divide(10, 3, preserve_precision=True)  # 3.3333333333
```

## Arbitrary Keyword Arguments (**kwargs)

```python
def build_profile(**kwargs):
    """Create a profile dict from arbitrary keyword arguments."""
    return kwargs

profile = build_profile(
    name="Alice",
    age=30,
    city="New York",
    occupation="Engineer"
)
```

## Decorators

### Basic Decorator

```python
def my_decorator(func):
    """Simple decorator that wraps a function."""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        result = func(*args, **kwargs)
        print(f"{func.__name__} finished.")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    return f"Hello, {name}!"

say_hello("Bob")
```

### Decorator with Arguments

```python
def repeat(n):
    """Decorator factory that repeats execution n times."""
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi!")

say_hi()  # Prints "Hi!" three times
```

### functools.wraps

```python
from functools import wraps

def simple_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        """Wrapper that preserves original function metadata."""
        print(f"Calling {func.__name__}...")
        return func(*args, **kwargs)
    return wrapper

@simple_decorator
def original_func(color: str = "blue") -> str:
    """The original documented function."""
    return f"The color is {color}"

print(original_func())           # "The color is blue"
print(original_func.__name__)    # "original_func" (preserved)
print(original_func.__doc__)     # "The original documented function." (preserved)
```

### Built-in Decorators

- `@staticmethod` — no `self` or `cls` needed
- `@classmethod` — first argument is `cls`
- `@property` — convert method to read-only attribute
- `@functools.lru_cache` — memoization/caching

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        """Area = πr²"""
        return 3.14159 * self.radius ** 2

    @area.setter
    def area(self, value):
        self.radius = (value / 3.14159) ** 0.5
```

## Recursion

```python
def factorial(n: int) -> int:
    """Calculate n! using recursion."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

def fibonacci(n: int) -> int:
    """Fibonacci sequence: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(factorial(5))   # 120
print(fibonacci(10))  # 55
```

### Tail Recursion (not natively optimized in Python)

```python
def factorial_tail(n: int, accumulator: int = 1) -> int:
    """Tail-recursive factorial (Python doesn't optimize it, but pattern is useful)."""
    if n <= 1:
        return accumulator
    return factorial_tail(n - 1, n * accumulator)
```

## Lambda Functions (Anonymous)

```python
# Simple one-liner
square = lambda x: x ** 2
print(square(5))  # 25

# Sorting with key
points = [(1, 5), (2, 3), (3, 1)]
points.sort(key=lambda p: p[1])  # Sort by y-coordinate: [(3, 1), (2, 3), (1, 5)]

# Filter with lambda
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4, 6]
```

## Map, Filter, Reduce

```python
from functools import reduce

# Map: apply function to each item
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))  # [1, 4, 9, 16, 25]

# Filter: keep items where predicate is True
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# Reduce: cumulative accumulation
total = reduce(lambda acc, x: acc + x, numbers, 0)  # 15
```

### Generator Expressions vs. map/filter

```python
# More Pythonic for simple transforms:
[n**2 for n in numbers]  # list comprehension
{n**2 for n in numbers}  # set comprehension
{k: k**2 for k in numbers}  # dict comprehension
```

## Closures

```python
def make_multiplier(multiplier):
    """Create a function that multiplies its input by multiplier."""
    def multiplier_func(number):
        return number * multiplier
    return multiplier_func

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
```

## Function Annotations and Type Hints

```python
from typing import List, Dict, Optional, Union

def process_data(items: List[Dict[str, Union[int, str]]]) -> Optional[Dict]:
    """Process a list of typed dicts and return a result dict."""
    total = sum(item.get("value", 0) for item in items)
    return {"total": total, "count": len(items)}

# Example usage
data = [{"value": 10}, {"value": 20}]
result = process_data(data)
```

## Recursive Type Hints (Python 3.7+ with `from __future__ import annotations`)

```python
from __future__ import annotations
from typing import List, Optional

def find_all(tree: Optional[TreeNode]) -> List[TreeNode]:
    """Find all nodes in a tree structure."""
    if tree is None:
        return []
    return [tree] + find_all(tree.left) + find_all(tree.right)
```

## Common Patterns

### Factory Functions

```python
def create_counter(start: int = 0):
    """Create a closure-based counter."""
    count = start
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = create_counter()
print(counter())  # 1
print(counter())  # 2
```

### Higher-Order Functions

```python
def apply_twice(func, value):
    """Apply func twice to value."""
    return func(func(value))

result = apply_twice(lambda x: x + 1, 5)  # 7
```

## Common Mistakes

1. **Mutable default arguments** — shared across all calls (see warnings above).
2. **Confusing `is` vs `==`** — `is` checks identity, `==` checks equality.
3. **Forgetting `return`** — functions return `None` implicitly.
4. **Overusing lambdas** — complex logic should use `def`.
5. **Not using type hints** — helpful for static analysis and documentation.
6. **Side effects in pure functions** — functions shouldn't modify external state.

## Best Practices

- Use type hints for public APIs and complex functions.
- Default to immutable arguments; use `None` sentinel for mutable ones.
- Prefer list comprehensions over `map()`/`filter()` for simple transforms.
- Use `functools.wraps` to preserve decorator metadata.
- Use `match-case` (Python 3.10+) for pattern matching instead of nested `if/elif`.
- Leverage decorators for cross-cutting concerns (logging, timing, authentication).

## References

- Python Docs: Defining Functions — https://docs.python.org/3/tutorial/controlflow.html#defining-functions
- Python Docs: Annotations — https://docs.python.org/3/tutorial/classes.html#annotations
- PEP 3107 (Function Annotations)
- PEP 484 (Type Hints)
- PEP 634/635/636 (Structural Pattern Matching)
- PEP 692 (Type Hinting Generics In Standard Collections)