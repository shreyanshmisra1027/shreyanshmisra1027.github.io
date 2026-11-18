---
title: Python Data Types
description: Comprehensive reference for Python built-in data types including numeric, string, sequence, and mapping types.
category: programming
subcategory: python
tags: [python, data-types, basics]
difficulty: beginner
order: 2
draft: false
---

# Python Data Types

A practical reference to Python's built-in data types with syntax and examples.

## Numeric Types

### int (Integer)

Arbitrary precision signed integers.

```python
age = 42
temperature = -273
big_number = 10**1000  # Python handles arbitrary precision
```

### float (Floating Point)

IEEE 754 double-precision (64-bit) floating point.

```python
pi = 3.14159
scientific = 1.602e-19
nan = float('nan')
inf = float('inf')
```

### complex

Complex numbers with real and imaginary parts.

```python
z = 3 + 4j
print(z.real)   # 3.0
print(z.imag)   # 4.0
```

## Boolean Type

### bool

Subclass of `int` with values `True` (1) and `False` (0).

```python
is_valid = True
is_empty = False

# Truthiness
bool(0)        # False
bool([])       # False
bool("hello")  # True
```

## Sequence Types

### str (String)

Unicode text sequences. Immutable.

```python
name = "Alice"
multiline = """Line 1
Line 2"""
raw = r"C:\path\to\file"  # raw string (no escape processing)

# Operations
len(name)           # 5
name[0]             # 'A'
name[::-1]          # 'ecilA'
name.upper()        # 'ALICE'
"name is {name}"    # f-string formatting
```

**Common methods:** `strip()`, `split()`, `join()`, `replace()`, `find()`, `startswith()`, `endswith()`, `isalpha()`, `isdigit()`.

### list

Ordered, mutable sequence of heterogeneous elements.

```python
numbers = [1, 2, 3, 4]
mixed = [1, "two", 3.0, [4, 5]]

# Operations
numbers.append(5)           # [1, 2, 3, 4, 5]
numbers.extend([6, 7])      # extend list
numbers.insert(0, 0)        # insert at index
numbers.pop()               # remove and return last
numbers.remove(3)           # remove first occurrence
numbers.sort()              # in-place sort
numbers.reverse()           # in-place reverse
```

### tuple

Ordered, immutable sequence.

```python
point = (3, 4)
single = (1,)   # trailing comma required for single element

# Unpacking
x, y = point
*rest, last = numbers
```

### range

Immutable sequence of numbers (memory efficient).

```python
range(5)        # 0, 1, 2, 3, 4
range(1, 5)     # 1, 2, 3, 4
range(0, 10, 2) # 0, 2, 4, 6, 8
```

## Mapping Type

### dict (Dictionary)

Mutable key-value mapping. Keys must be hashable.

```python
user = {"name": "Alice", "age": 30, "roles": ["admin"]}

# Operations
user["age"]           # 30
user.get("email", "N/A")  # default if missing
user["email"] = "alice@example.com"
del user["age"]
user.keys()           # dict_keys(['name', 'roles', 'email'])
user.values()         # dict_values([...])
user.items()          # dict_items([('name', 'Alice'), ...])

# Dictionary comprehensions
squares = {x: x*x for x in range(5)}
```

## Set Types

### set

Mutable, unordered collection of unique hashable elements.

```python
primes = {2, 3, 5, 7}
empty = set()  # {} creates empty dict

# Operations
primes.add(11)
primes.discard(2)  # no error if missing
primes.remove(3)   # KeyError if missing

# Set operations
a = {1, 2, 3}
b = {3, 4, 5}
a | b      # union: {1, 2, 3, 4, 5}
a & b      # intersection: {3}
a - b      # difference: {1, 2}
a ^ b      # symmetric difference: {1, 2, 4, 5}
```

### frozenset

Immutable, hashable set (can be used as dict keys or set elements).

```python
fs = frozenset([1, 2, 3])
```

## Binary Types

### bytes

Immutable sequence of 8-bit values (0-255).

```python
b = b"hello"
b = bytes([0x48, 0x65, 0x6c, 0x6c, 0x6f])  # from list of ints
```

### bytearray

Mutable version of bytes.

```python
ba = bytearray(b"hello")
ba[0] = 0x4a  # b"Jello"
```

### memoryview

View into binary data without copying.

```python
data = b"hello world"
view = memoryview(data)
view[0:5]   # memoryview(b"hello")
```

## None Type

### NoneType

Singleton representing absence of value.

```python
result = None
if result is None:
    print("No value")
```

## Type Conversion

```python
int("42")         # 42
float("3.14")     # 3.14
str(42)           # "42"
list("abc")       # ['a', 'b', 'c']
tuple([1, 2, 3])  # (1, 2, 3)
set([1, 1, 2])    # {1, 2}
dict([('a', 1)])  # {'a': 1}
bool([])          # False
```

## Quick Reference Table

| Type | Mutable | Ordered | Example |
|------|---------|---------|---------|
| int | No | N/A | `42` |
| float | No | N/A | `3.14` |
| bool | No | N/A | `True` |
| str | No | Yes | `"text"` |
| list | Yes | Yes | `[1, 2]` |
| tuple | No | Yes | `(1, 2)` |
| dict | Yes | Yes* | `{"a": 1}` |
| set | Yes | No | `{1, 2}` |
| frozenset | No | No | `frozenset({1})` |
| bytes | No | Yes | `b"data"` |
| bytearray | Yes | Yes | `bytearray(b"x")` |

*Dict preserves insertion order as of Python 3.7+

## Common Mistakes

1. **`{}` creates a dict, not a set** — use `set()` for empty set.
2. **List aliasing** — `b = a` creates reference, use `b = a.copy()` or `b = a[:]`.
3. **Mutable default arguments** — `def f(x=[])` shares same list across calls.
4. **String immutability** — `s[0] = 'x'` raises TypeError.
5. **Float precision** — `0.1 + 0.2 == 0.3` is `False`; use `decimal` for financial math.

## References

- Python Docs: Built-in Types — https://docs.python.org/3/library/stdtypes.html