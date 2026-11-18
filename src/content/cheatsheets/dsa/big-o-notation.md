---
title: Big O Notation
description: Formal definitions, common complexity classes, rules for calculation, and practical code analysis examples.
category: dsa
subcategory: complexity
tags: [dsa, complexity, big-o, algorithms]
difficulty: beginner
featured: true
order: 13
draft: false
---

# Big O Notation

Big O notation formally classifies algorithms according to how their run time or space requirements grow as the input size $n$ approaches infinity.

## Formal Definition

An algorithm's time $T(n)$ is $O(f(n))$ if there exist positive constants $c$ and $n_0$ such that:
$$0 \le T(n) \le c \cdot f(n) \quad \text{for all } n \ge n_0$$

This establishes an **asymptotic upper bound** on resource consumption.

## Common Complexity Classes (Ranked from Best to Worst)

| Notation | Name | Practical Meaning | Common Examples |
| :--- | :--- | :--- | :--- |
| $O(1)$ | Constant | Execution time does not depend on input size | Hash map lookup, array index access |
| $O(\log n)$ | Logarithmic | Problem size is divided by a constant factor each step | Binary search, BST search |
| $O(n)$ | Linear | Operations grow proportionally to input size | Linear scan, counting elements |
| $O(n \log n)$ | Linearithmic | Efficient comparison sorting boundary | Merge sort, Heapsort, Quicksort (avg) |
| $O(n^2)$ | Quadratic | Nested loops over the input | Bubble sort, brute force pairs comparison |
| $O(2^n)$ | Exponential | Doubled operations for each added element | Recursive Fibonacci, generating all subsets |
| $O(n!)$ | Factorial | Generating all permutations | Traveling Salesperson brute force |

## Simplification Rules

1. **Drop Constant Factors**: $O(3n) \to O(n)$, $O(500) \to O(1)$.
2. **Drop Non-Dominant Terms**: $O(n^2 + 5n + 100) \to O(n^2)$.
3. **Multi-Variable Inputs**: If an algorithm processes two distinct arrays $A$ (length $n$) and $B$ (length $m$), time is $O(n + m)$ or $O(n \times m)$, not $O(n)$!

## Space Complexity

Space complexity measures total extra memory allocated by the algorithm relative to input size:

- **Auxiliary Space**: Temporary memory allocated during execution (excluding the input data itself).
- **Call Stack Space**: In recursive functions, each nested call frame consumes stack memory proportional to recursion depth. A balanced binary tree DFS takes $O(\log n)$ stack space; a skewed tree takes $O(n)$.
