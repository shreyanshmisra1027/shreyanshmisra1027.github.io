---
title: Binary Search
description: Standard binary search, left/right boundaries, and search space reduction patterns.
category: dsa
subcategory: search-algorithms
tags: [dsa, binary-search, algorithms]
difficulty: intermediate
featured: true
order: 17
draft: false
---

# Binary Search

Efficiently searches a sorted search space in $O(\log n)$ time and $O(1)$ space.

## Standard Binary Search

```python
def binary_search(nums: list[int], target: int) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2  # Prevents integer overflow

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

## Finding Left Boundary (Lower Bound)

```python
def find_left_bound(nums: list[int], target: int) -> int:
    left = 0
    right = len(nums)

    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left if left < len(nums) and nums[left] == target else -1
```
