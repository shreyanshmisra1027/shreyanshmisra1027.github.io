---
title: Stacks and Queues
description: LIFO and FIFO data structures, monotonic stack patterns, and queue implementations.
category: dsa
subcategory: linear-structures
tags: [dsa, stack, queue, monotonic-stack]
difficulty: intermediate
order: 16
draft: false
---

# Stacks and Queues

LIFO and FIFO linear structures with powerful algorithmic applications.

## Monotonic Stack Pattern

Used to find the next greater or smaller element in an array in $O(n)$ time:

```python
def next_greater_elements(nums: list[int]) -> list[int]:
    res = [-1] * len(nums)
    stack = []  # Stores indices

    for i, num in enumerate(nums):
        while stack and nums[stack[-1]] < num:
            idx = stack.pop()
            res[idx] = num
        stack.append(i)

    return res
```

## Valid Parentheses Matching

```python
def is_valid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}

    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)

    return not stack
```
