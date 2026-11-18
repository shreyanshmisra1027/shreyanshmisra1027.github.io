---
title: Sorting Algorithms
description: Comparison of sorting algorithms including Quicksort, Merge Sort, Heap Sort, with complexity analysis and when to use each.
category: dsa
subcategory: algorithms
tags: [dsa, sorting, algorithms]
difficulty: intermediate
order: 18
draft: false
---

# Sorting Algorithms

Fundamental algorithmic building blocks with different trade-offs in time, space, and stability.

| Algorithm | Time Complexity | Space | Stable | In-Place |
| :--- | :--- | :--- | :--- | :--- |
| **Merge Sort** | $O(n \log n)$ | $O(n)$ | Yes | No |
| **Quick Sort** | $O(n \log n)$ avg, $O(n^2)$ worst | $O(\log n)$ | No | Yes |
| **Heap Sort** | $O(n \log n)$ | $O(1)$ | No | Yes |
| **Insertion Sort** | $O(n^2)$ | $O(1)$ | Yes | Yes |
| **Counting Sort** | $O(n+k)$ | $O(k)$ | Yes | Yes |
| **Radix Sort** | $O(d(n+k))$ | $O(n+k)$ | Yes | Yes |

## When to Use Each

- **$O(n \log n)$ guaranteed**: Merge sort (stable, predictable)
- **Average case fast**: Quick sort (small constants in practice)
- **In-place requirement**: Heap sort (no extra memory)
- **Small arrays** ($n < 50$): Insertion sort (adaptive, nearly sorted)
- **Bounded integers**: Counting sort or radix sort (linear time)
