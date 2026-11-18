---
title: Python Lists and Dictionaries
description: Practical reference for Python list and dictionary operations, methods, and common patterns.
category: programming
subcategory: python
tags: [python, lists, dictionaries, intermediate]
difficulty: intermediate
order: 5
draft: false
---

# Python Lists and Dictionaries

A practical reference covering the most commonly used collection types in Python with methods and patterns.

## Lists (Mutable Ordered Sequences)

### Creation and Basic Operations

```python
# Empty and initialized lists
empty = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, True]

# Length
len(numbers)  # 5
```

### Indexing and Slicing

```python
nums = [10, 20, 30, 40, 50]

# Positive indexing
nums[0]   # 10
nums[1]   # 20
nums[-1]  # 5 (last element)
nums[-2]  # 40 (second-to-last)

# Slicing: [start:stop:step]
nums[1:4]   # [20, 30, 40]  (start inclusive, stop exclusive)
nums[:3]    # [10, 20, 30]  (from beginning)
nums[3:]    # [40, 50]    (to end)
nums[::2]   # [10, 30, 50]  (every second element)
nums[::-1]  # [50, 40, 30, 20, 10]  (reversed)
```

### Common List Methods

```python
nums = []

# Add elements
nums.append(5)              # [5]  (add to end)
nums.insert(0, 3)           # [3, 5]  (insert at index)
nums.extend([1, 2])         # [3, 5, 1, 2]  (extend with iterable)

# Remove elements
nums.remove(5)              # removes first occurrence of 5
nums.pop()                  # removes and returns last element (5)
nums.pop(0)                 # removes and returns element at index 0 (3)
nums.clear()                # []  (remove all)

# Modify elements
nums[0] = 10                # replace element at index

# Check membership
5 in nums                   # True / False

# Count and find index
nums.count(5)               # how many times 5 appears
nums.index(5)               # first index of 5 (raises ValueError if not found)
```

### List Comprehensions

```python
# Create list from expression
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]  # [0, 4, 16, 36, 64]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
```

### List Utilities

```python
nums = [3, 1, 4, 1, 5, 9, 2, 6]

# Sorting
sorted_nums = sorted(nums)          # new sorted list: [1, 1, 2, 3, 4, 5, 6, 9]
nums.sort()                         # in-place sort: [1, 1, 2, 3, 4, 5, 6, 9]

# Reversing
reversed_nums = nums[::-1]          # [6, 5, 4, 3, 2, 1, 1, 9]
nums.reverse()                      # in-place reverse

# Other utilities
max(nums)      # 9
min(nums)      # 1
sum(nums)      # 31
any([x > 10 for x in nums])        # False
all([x > 0 for x in nums])         # True
```

### Common Patterns

```python
# Flatten a nested list
nested = [[1, 2], [3, 4], [5, 6]]
flat = [item for sublist in nested for item in sublist]
# [1, 2, 3, 4, 5, 6]

# Chunk a list into n-sized groups
def chunker(seq, size):
    return [seq[i:i+size] for i in range(0, len(seq), size)]

chunks = chunker([1, 2, 3, 4, 5, 6, 7], 3)
# [[1, 2, 3], [4, 5, 6], [7]]
```

## Dictionaries (Mutable Key-Value Mappings)

### Creation and Basics

```python
# Empty and initialized
empty = {}
user = {"name": "Alice", "age": 30, "roles": ["admin", "user"]}

# Access, modify, delete
user["name"]      # "Alice"
user["email"] = "alice@example.com"  # add/update
del user["age"]   # remove key

# Check existence
"name" in user    # True
"phone" in user   # False

# Dictionary length
len(user)         # 3
```

### Dictionary Methods

```python
user = {"name": "Alice", "age": 30}

# Get with default
user.get("name")           # "Alice"
user.get("phone", "N/A")   # "N/A" (key doesn't exist)

# Keys, values, items
user.keys()      # dict_keys(['name'])
user.values()    # dict_values([30])
user.items()     # dict_items([('name', 'Alice')])

# Check if empty
user.clear()     # {}
bool(user)       # True if non-empty

# Set default if missing (equivalent to get)
user.setdefault("city", "New York")  # adds "city": "New York" if missing

# Update multiple keys
user.update({"age": 31, "city": "Boston"})
```

### Dictionary Comprehensions

```python
# Invert a dictionary
orig = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in orig.items()}
# {1: "a", 2: "b", 3: "c"}

# Filter by condition
active = {"alice": True, "bob": False, "carol": True}
active_ids = {k: v for k, v in active.items() if v}
# {"alice": True, "carol": True}

# Swap keys and values (with dedup handling)
orig = {"a": 1, "b": 1}  # duplicate values
inverted = {}
for k, v in orig.items():
    inverted.setdefault(v, []).append(k)
# {1: ["a", "b"]}
```

### Dictionary Operations

```python
# Merge dictionaries (Python 3.9+: | operator)
dict_a = {"a": 1, "b": 2}
dict_b = {"c": 3, "d": 4}
merged = dict_a | dict_b  # {"a": 1, "b": 2, "c": 3, "d": 4}

# Merge with precedence (Python 3.5+: ** unpacking)
merged = {**dict_a, **dict_b}

# Defaultdict (from collections)
from collections import defaultdict

# Group items by key
words = ["apple", "banana", "apple", "orange", "banana", "apple"]
groups = defaultdict(list)
for word in words:
    groups[word].append(word)

# groups = defaultdict(<class 'list'>, {'apple': ['apple', 'apple', 'apple'], 'banana': ['banana', 'banana'], 'orange': ['orange']})

# Counter (from collections)
from collections import Counter
counts = Counter(words)
# Counter({'apple': 3, 'banana': 2, 'orange': 1})
```

### Setdefault Pattern

```python
# Safely append to list values
groups = {}
words = ["apple", "banana", "apple", "cherry"]

for word in words:
    groups.setdefault(word, []).append(word)
# {"apple": ["apple", "apple"], "banana": ["banana"], "cherry": ["cherry"]}
```

### Dictionary Views

```python
user = {"name": "Alice", "age": 30, "city": "NYC"}

# Iterating views
for key in user.keys():
    pass

for value in user.values():
    pass

for k, v in user.items():
    pass

# Views are live (reflect changes)
user["new_key"] = "value"
# Iterating keys/values/items immediately after reflects the addition
```

## Advanced Patterns

### Nested Dictionaries

```python
config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "user": "admin",
        "password": "secret"
    },
    "cache": {
        "enabled": True,
        "ttl_seconds": 300
    }
}

# Access: config["database"]["host"]
# Update: config["cache"]["ttl_seconds"] = 600
```

### Default + Missing Key Handling

```python
# using .get() with sentinel
user = {"name": "Alice"}

# Old approach
age = user.get("age", 0)  # 0

# New approach (Python 3.8+ := walrus operator, or use default dict)
# Can use collections.UserDict or custom class for stricter typing
```

### Dictionary Views as Sets

```python
user = {"a": 1, "b": 2, "c": 3}

# Keys view can be used like a set
user.keys() & {"a", "b"}       # {"a", "b"}  (intersection)
user.keys() | {"d", "e"}       # {"a", "b", "c", "d", "e"}  (union)
user.keys() - {"a", "b"}       # {"c"}  (difference)
user.keys() ^ {"a", "d"}       # {"b", "c", "d"}  (symmetric difference)
```

### Copying Dictionaries

```python
original = {"x": 1, "y": [2, 3]}

# Shallow copy (new dict, but nested objects shared)
shallow = original.copy()
shallow["x"] = 10  # original["x"] still 1
shallow["y"].append(4)  # original["y"] also becomes [2, 3, 4] ← dangerous!

# Deep copy (fully independent)
import copy
deep = copy.deepcopy(original)
deep["y"].append(5)  # original["y"] remains [2, 3]
```

### Dictionary Unpacking in Function Calls

```python
def configure(**options):
    print(options)

params = {"host": "localhost", "port": 8080, "debug": True}
configure(**params)
# {"host": "localhost", "port": 8080, "debug": True}
```

### Key Functionalities

- **`in` operator**: O(1) average case for dict key lookup
- **`get(key, default)`**: Safe access without KeyError
- **`setdefault(key, default)`**: Insert if missing, return existing or default
- **`pop(key, default)`**: Remove and return key's value
- **`popitem()`**: Remove and return arbitrary (key, value) pair (LIFO in CPython 3.7+)
- **`defaultdict`**: Automatically initialize missing keys with factory
- **`Counter`**: Specialized dict for counting hashable objects

## Quick Reference Cheat Sheet

| Operation | Syntax | Result |
|-----------|--------|--------|
| Access | `d[key]` | Value or KeyError |
| Safe get | `d.get(key, default)` | Value or default |
| Add/update | `d[key] = val` | Updates or adds |
| Delete | `del d[key]` | Removes key |
| Pop | `d.pop(key, default)` | Removes + returns value |
| Popitem | `d.popitem()` | Removes last-inserted pair |
| Existence | `key in d` | True / False |
| Set default | `d.setdefault(key, val)` | Insert if missing |
| Update | `d.update(other)` | Merge dictionaries |
| Count | `Counter(iterable)` | Object frequency count |
| Default init | `defaultdict(factory)` | Auto-initialize missing keys |
| Copy shallow | `d.copy()` | New dict, shared nested |
| Deep copy | `copy.deepcopy(d)` | Fully independent copy |
| Merge | `d1 | d2` (3.9+) / `{**d1, **d2}` (3.5+) | Combine dicts |

## Common Mistakes

1. **`{}` creates a dict, not a set** — `set()` creates empty set.
2. **Mutable key sharing** — modifying a mutable value (list/dict) shared across keys affects all.
3. **`dict.keys()`, `dict.values()`, `dict.items()` views are live** — changes reflect immediately.
4. **Shallow copy pitfalls** — `d.copy()` doesn't deep-copy nested mutables.
5. **Confusing `in` for keys vs values** — `key in d` checks keys only; `val in d.values()` or `val in list(d.values())` for values.
6. **Overwriting with `.update()`** — existing keys are replaced; use `.setdefault()` to avoid.

## Best Practices

- Use `dict.get(key, default)` for safe key access instead of `dict[key]`.
- Prefer `defaultdict(list)` / `defaultdict(int)` / `defaultdict(float)` over `setdefault()` patterns.
- Use `Counter` for tallying/counting occurrences.
- Use `|` (Python 3.9+) or `{**d1, **d2}` for intentional merges.
- Use `copy.deepcopy()` when nested mutables are involved.
- Consider type hints: `Dict[str, List[int]]` / `Dict[str, Dict[str, str]]`.
- Leverage dictionary comprehensions for transformation and filtering.
- Use `setdefault()` when building dicts incrementally in loops.

## References

- Python Docs: Data Structures — https://docs.python.org/3/tutorial/datastructures.html
- Python Docs: Dictionary — https://docs.python.org/3/library/stdtypes.html#mapping-type-dict
- `collections` module — https://docs.python.org/3/library/collections.html
- PEP 560 (Default Arg Spec)
- PEP 604 (Union Types)