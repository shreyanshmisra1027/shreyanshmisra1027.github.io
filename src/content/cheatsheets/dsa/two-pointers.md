---
title: Two Pointers
description: Pointer manipulation techniques for array problems including container with most water, 3Sum, trapping rain water, and palindrome validation.
category: dsa
subcategory: algorithms
tags: [dsa, two-pointers, algorithms, arrays]
difficulty: intermediate
order: 20
draft: false
---

# Two Pointers

A technique using two pointers that meet or cross to solve array/string problems in a single pass.

## Container With Most Water

Maximize water between vertical lines (Heights) using pointers that converge:

```python
def maxArea(height: list[int]) -> int:
    left = 0
    right = len(height) - 1
    max_area = 0

    while left < right:
        h_left = height[left]
        h_right = height[right]
        width = right - left
        area = min(h_left, h_right) * width

        max_area = max(max_area, area)

        # Move pointer pointing to shorter line (key insight)
        if h_left < h_right:
            left += 1
        else:
            right -= 1

    return max_area
```

## Valid Palindrome (Skip Non-Alphanumeric)

```python
def isPalindrome(s: str) -> bool:
    left = 0
    right = len(s) - 1

    while left < right:
        # Skip non-alphanumeric from left
        while left < right and not s[left].isalnum():
            left += 1
        # Skip non-alphanumeric from right
        while left < right and not s[right].isalnum():
            right -= 1

        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1

    return True
```
