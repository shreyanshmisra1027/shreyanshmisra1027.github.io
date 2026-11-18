---
title: Sliding Window
description: Fixed and variable window techniques for substring, subarray, and permutation problems.
category: dsa
subcategory: algorithms
tags: [dsa, sliding-window, algorithms]
difficulty: intermediate
order: 21
draft: false
---

# Sliding Window

Efficient technique for maintaining a subarray or substring window that satisfies constraints.

## Fixed Size Window

When window size `k` is constant, maintain running sum/min/max:

```python
def max_sum_subarray_k(nums: list[int], k: int) -> int:
    if len(nums) < k:
        return -1

    window_sum = sum(nums[:k])
    max_sum = window_sum

    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum
```

## Variable Size Window

Expand right until condition breaks, then shrink left:

```python
def min_subarray_len(target: int, nums: list[int]) -> int:
    left = 0
    total = 0
    min_len = float('inf')

    for right, val in enumerate(nums):
        total += val
        while total >= target:
            min_len = min(min_len, right - left + 1)
            total -= nums[left]
            left += 1

    return 0 if min_len == float('inf') else min_len
```

## Longest Substring Without Repeating Characters

```python
def lengthOfLongestSubstring(s: str) -> int:
    seen = {}
    left = 0
    max_len = 0

    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)

    return max_len
```