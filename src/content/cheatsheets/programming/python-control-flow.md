---
title: Python Control Flow
description: Conditional statements, loops, comprehensions, and control flow utilities in Python.
category: programming
subcategory: python
tags: [python, control-flow, basics]
difficulty: beginner
order: 3
draft: false
---

# Python Control Flow

A comprehensive guide to conditional and loop structures in Python.

## Conditional Statements

### if, elif, else

```python
x = 42

if x > 100:
    status = "Large"
elif x > 10:
    status = "Medium"
else:
    status = "Small"

# Ternary expression
status = "Large" if x > 100 else "Small"
```

### Nested Conditionals

```python
temperature = 25

if temperature > 30:
    condition = "Hot"
elif temperature >= 20:
    condition = "Comfortable"
else:
    condition = "Cold"

if temperature > 25 and condition == "Comfortable":
    print("Perfect weather")
```

### match-case (Python 3.10+)

```python
def http_status(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500:
            return "Server Error"
        case _:
            return "Unknown"
```

## Looping Constructs

### for Loops

```python
numbers = [1, 2, 3, 4, 5]

# Basic iteration
total = 0
for num in numbers:
    total += num
print(total)  # 15

# Iterating over ranges
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Enumerate: index and value
for i, value in enumerate(numbers):
    print(f"Index {i}: {value}")
```

### while Loops

```python
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1
```

## Loop Control Statements

### break

```python
for i in range(10):
    if i == 5:
        break  # Exit loop entirely
    print(i)
```

### continue

```python
for i in range(5):
    if i == 2:
        continue  # Skip to next iteration
    print(i)  # 0, 1, 3, 4
```

### pass

```python
for i in range(5):
    if i == 2:
        pass  # Do nothing, just placeholder
    print(i)
```

## Comprehensions

### List Comprehension

```python
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
even_squares = [n**2 for n in numbers if n % 2 == 0]
# [4, 16]
```

### Set Comprehension

```python
# Unique word lengths
words = ["hello", "world", "hi", "python"]
lengths = {len(w) for w in words}
print(lengths)  # {2, 4, 5, 5} → {2, 4, 5}
```

### Dict Comprehension

```python
names = ["Alice", "Bob", "Charlie"]
lengths = {name: len(name) for name in names}
# {'Alice': 5, 'Bob': 3, 'Charlie': 7}
```

### Generator Expression

```python
nums = [1, 2, 3, 4, 5]
total = sum(n for n in nums if n > 2)  # 2 + 3 + 4 + 5 = 14
```

## Loop Patterns

### Else Clause on Loops

```python
# Executed when loop completes normally (no break)
for i in range(5):
    if i == 10:
        break
else:
    print("Loop completed without breaking")
```

### Nested Loops with else

```python
for i in range(3):
    for j in range(3):
        if i * j == 6:
            print(f"Found: {i}*{j} = {i*j}")
            break
    else:
        continue
    break
```

## Generator Functions

```python
def count_up_to(max_num):
    num = 1
    while num <= max_num:
        yield num
        num += 1

for n in count_up_to(5):
    print(n)  # 1, 2, 3, 4, 5

# Generator expression
squares_gen = (n**2 for n in range(5))
print(list(squares_gen))  # [0, 1, 4, 9, 16]
```

## Common Mistakes

1. **Infinite loops** — forgetting to update the loop variable.
2. **Modifying list while iterating** — use list comprehension or copy first.
3. **Off-by-one errors** — with `range()`, indices start at 0.
4. **`range(start, stop)` excludes `stop`** — `range(5)` gives 0-4.
5. **Mutable default arguments** — same issue as functions.

## Best Practices

- Use `for` over `while` when the number of iterations is known.
- Prefer list/set/dict comprehensions over `map()`/`filter()` for simple transforms.
- Use `enumerate()` when you need index + value.
- Use `match-case` for complex pattern matching (Python 3.10+).
- Consider generator expressions for memory-efficient large iterables.

## References

- Python Docs: Control Flow — https://docs.python.org/3/tutorial/controlflow.html
- PEP 308 (Ternary Expressions)
- PEP 634 (Structural Pattern Matching)