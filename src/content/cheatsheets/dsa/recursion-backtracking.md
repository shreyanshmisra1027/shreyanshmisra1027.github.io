---
title: Recursion and Backtracking
description: Recursion fundamentals, base cases, stack frames, mutual recursion, and backtracking patterns for combinatorial problems.
category: dsa
subcategory: algorithms
tags: [dsa, recursion, backtracking, divide-conquer]
difficulty: intermediate
order: 19
draft: false
---

# Recursion and Backtracking

Techniques for solving problems by breaking them into smaller instances of the same problem.

## Recursion Fundamentals

Every recursive function needs two parts:

1. **Base Case**: The simplest instance that can be solved directly.
2. **Recursive Case**: Reduces the problem toward the base case.

```python
def factorial(n: int) -> int:
    if n <= 1:        # Base case: 0! = 1! = 1
        return 1
    return n * factorial(n - 1)  # Recursive case
```

## Backtracking Template

Used for combinatorial search problems: try each possibility, explore recursively, undo choices on failure.

```python
def backtrack(candidates, target, start, path, result):
    if target < 0:           # Invalid path, backtrack
        return
    if target == 0:           # Valid combination found
        result.append(list(path))
        return

    for i in range(start, len(candidates)):
        path.append(candidates[i])
        backtrack(candidates, target - candidates[i], i, path, result)
        path.pop()            # Undo choice
```

## Common Recursion Patterns

- **Fibonacci**: Naive $O(\phi^n)$, memoized $O(n)$, or iterative $O(n)$.
- **Tree Traversal**: Pre-order, in-order, post-order via DFS recursion.
- **Subset Generation**: Include/exclude each element at each step.
- **Permutation Generation**: Swap elements to generate new orderings.