---
title: Python Arrays and Strings
description: Practical reference for Python array and string operations, methods, and patterns.
category: programming
subcategory: python
tags: [python, arrays, strings, intermediate]
difficulty: intermediate
order: 6
draft: false
---

# Python Arrays and Strings

A practical reference for Python array and string operations, methods, and patterns.

## Arrays (Using Lists)

Python doesn't have a built-in array type like C/C++, but lists serve as the primary array-like structure.

### Creation and Initialization

```python
# Empty list
empty_list = []

# Initialize with values
numbers = [1, 2, 3, 4, 5]
strings = ["apple", "banana", "cherry"]

# From iterable
numbers = list(range(10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Indexing and Slicing

```python
arr = [10, 20, 30, 40, 50, 50]

# Positive indexing
first = arr[0]      # 10
second = arr[1]   # 20
last = arr[-1]    # 50
second_last = arr[-2]  # 50

# Slicing: [start:stop:step]
first_three = arr[:3]      # [10, 20, 30]
last_two = arr[-2:]  # [50, 50]
every_other = arr[::2]  # [10, 30, 50]
reverse = arr[::-1]  # [50, 40, 30, 20, 10]
```

### Common List Methods

```python
numbers = [1, 2, 3, 4, 5]

# Add elements
numbers.append(5)        # [1, 2, 3, 4, 5, 5]
numbers.insert(2, 99)    # [1, 2, 99, 3, 4, 5]
numbers.extend([6, 7])     # [1, 2, 99, 3, 4, 5, 6, 7]

# Remove elements
numbers.remove(3)          # removes first 3 → [1, 2, 4, 5, 6, 7]
numbers.pop()              # removes and returns 7 → [1, 2, 4, 5, 6]
numbers.pop(0)             # removes 1 → [2, 4, 5, 6]
numbers.clear()            # []

# Modify elements
numbers[0] = 100           # [100, 2, 4, 5, 6]

# Check membership
5 in numbers                # True
7 in numbers                # False

# Count and find index
numbers.count(4)            # 1
numbers.index(6)            # 4 (first occurrence)
```

### List Comprehensions

```python
# Create new list from existing
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
even_numbers = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Nested list comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
```

### List Patterns

```python
# Flatten nested list
nested = [[1, 2], [3, 4], [5, 6]]
flat = [item for sublist in nested for item in sublist]
# [1, 2, 3, 4, 5, 6]

# Chunk a list into n-sized groups
def chunker(seq, size):
    return [seq[i:i+size] for i in range(0, len(seq), size)]

chunks = chunker([1, 2, 3, 4, 5, 6, 7], 3)
# [[1, 2, 3], [4, 5, 6], [7]]
```

### Common Patterns

```python
# Find duplicates
duplicates = [x for x in numbers if numbers.count(x) > 1]

# Find index of first occurrence
first_index = numbers.index(4) if 4 in numbers else -1

# Check if all elements satisfy condition
all_positive = all(x > 0 for x in numbers)

# Find max/min with index
max_val = max(numbers)
max_index = numbers.index(max_val)

# Sort in place
numbers.sort()  # ascending
numbers.sort(reverse=True)  # descending

# Reverse in place
numbers.reverse()

# Reverse with slicing (creates new list)
reversed_numbers = numbers[::-1]
```

### Performance Considerations

- Lists are dynamic arrays - appending to end is O(1) amortized
- Inserting at beginning is O(n) due to shifting
- Searching is O(n) - use sets/dicts for membership testing
- Lists are ordered and allow duplicates

## Strings

### String Basics

```python
text = "Hello, World!"

# Length
len(text)  # 12

# Access characters by index
first_char = text[0]      # 'H'
last_char = text[-1]      # '!'
third_char = text[2]      # 'l'

# String slicing
substring = text[0:5]     # "Hello"
words = text.split()      # ['Hello,', 'World!']
```

### String Methods

```python
# Basic operations
text.upper()      # "HELLO, WORLD!"
text.lower()      # "hello, world!"
text.strip()      # "Hello, World!" (removes whitespace)
text.replace("o", "0")  # "Hell0, W0rld!"

# Text processing
text.split()        # ['Hello,', 'World!']
text.join(sep)      # "Hello, World!" if sep=", "
text.strip()        # removes leading/trailing whitespace

# Text case
text.title()        # "Hello, World!"
text.capitalize()   # "Hello, world!" (first char upper, rest lower)

# Text formatting
f"{name} is {age} years old"  # f-string formatting
```

### String Immutability

```python
text = "hello"
text[0] = "h"  # TypeError: 'str' object does not support item assignment

# Create new string
new_text = text.upper()  # "HELLO"
```

### String Formatting

```python
name = "Alice"
age = 30

# f-strings (Python 3.6+)
message = f"{name} is {age} years old"

# format() method
message = "{} is {} years old".format(name, age)

# % formatting (older style)
message = "%s is %d years old" % (name, age)
```

### Common String Operations

```python
text = "  Hello, World!  "

# Strip whitespace
clean = text.strip()  # "Hello, World!"

# Split and join
words = text.split()  # ['Hello,', 'World!']
sentence = " ".join(words)  # "Hello, World!"

# Find and replace
new_text = text.replace("o", "0")  # "  Hell0, W0rld!"

# Find substring
position = text.find("World")  # 7 (returns -1 if not found)
```

### Common Patterns

```python
# Count occurrences
counts = {}
for char in text:
    counts[text] = counts.get(text, 0) + 1

# Find all occurrences of substring
positions = [i for i in range(len(text)) if text.startswith("o", i)]

# Check if string contains substring
"World" in text  # True

# Case-insensitive search
"world" in text.lower()  # True
```

## Performance Considerations

- String operations are generally O(n) where n is string length
- String immutability means concatenation creates new strings
- Use `io.StringIO` for efficient string building in loops
- For frequent substring searches, consider compiled regex or built-in methods
- Lists are more efficient for numeric array operations; consider `array` module for homogeneous numeric data