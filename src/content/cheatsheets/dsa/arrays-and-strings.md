---
title: Arrays and Strings
description: Essential patterns for array manipulation, string algorithms, prefix sums, Kadane's algorithm, and anagram detection.
category: dsa
subcategory: linear-structures
tags: [dsa, arrays, strings, kadane, prefix-sum]
difficulty: intermediate
order: 14
draft: false
---

# Arrays and Strings

Fundamental sequential data structures in computer science and common algorithmic problem-solving techniques.

## Prefix Sum Pattern

Precomputing cumulative sums enables answering range sum queries in $O(1)$ time:

```python
def build_prefix_sum(nums: list[int]) -> list[int]:
    prefix = [0] * (len(nums) + 1)
    for i, x in enumerate(nums):
        prefix[i + 1] = prefix[i] + x
    return prefix

# Query sum of nums[L...R] inclusive in O(1)
def query_range(prefix: list[int], L: int, R: int) -> int:
    return prefix[R + 1] - prefix[L]
```

## Kadane's Algorithm (Maximum Subarray Sum)

Finds the contiguous subarray within a one-dimensional array of numbers which has the largest sum in $O(n)$ time:

```python
def max_subarray_sum(nums: list[int]) -> int:
    max_so_far = nums[0]
    current_max = nums[0]

    for num in nums[1:]:
        current_max = max(num, current_max + num)
        max_so_far = max(max_so_far, current_max)

    return max_so_far
```

## String Manipulation Patterns

### Frequency Array Anagram Check

Strings consisting of ASCII characters can be compared in $O(n)$ time and $O(1)$ space using fixed-size frequency tables:

```python
def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    counts = [0] * 26
    for char_s, char_t in zip(s, t):
        counts[ord(char_s) - ord('a')] += 1
        counts[ord(char_t) - ord('a')] -= 1

    return all(c == 0 for c in counts)
```
