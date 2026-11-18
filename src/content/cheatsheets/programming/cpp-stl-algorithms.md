---
title: C++ STL Algorithms
description: Comprehensive reference for <algorithm> header functions including sorting, binary searching, transformations, and ranges.
category: programming
subcategory: cpp
tags: [cpp, stl, algorithms, sorting]
difficulty: intermediate
order: 11
draft: false
---

# C++ STL Algorithms

The Standard Library `<algorithm>` header contains battle-tested, highly optimized algorithms operating over iterator ranges.

## Sorting and Partitioning

```cpp
#include <vector>
#include <algorithm>

std::vector<int> v = {5, 2, 8, 1, 9, 3};

// Sort in ascending order: O(N log N)
std::sort(v.begin(), v.end()); // {1, 2, 3, 5, 8, 9}

// Custom comparator (Descending order)
std::sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;
});

// Stable sort preserves relative order of equivalent elements
std::stable_sort(v.begin(), v.end());
```

## Binary Search on Sorted Ranges

```cpp
#include <vector>
#include <algorithm>

std::vector<int> sorted = {10, 20, 20, 30, 40, 50};

// Check existence: O(log N)
bool exists = std::binary_search(sorted.begin(), sorted.end(), 30); // true

// lower_bound: first element >= target
auto lb = std::lower_bound(sorted.begin(), sorted.end(), 20); // iterator to first 20

// upper_bound: first element > target
auto ub = std::upper_bound(sorted.begin(), sorted.end(), 20); // iterator to 30

// Count occurrences in sorted array
int count = std::distance(lb, ub); // 2
```

## Element Search and Counting

```cpp
#include <vector>
#include <algorithm>

std::vector<int> nums = {1, 2, 3, 4, 5, 6};

// Find first matching element
auto it = std::find(nums.begin(), nums.end(), 4);

// Find first matching predicate
auto evenIt = std::find_if(nums.begin(), nums.end(), [](int n) {
    return n % 2 == 0;
});

// Any of, all of, none of
bool anyPositive = std::any_of(nums.begin(), nums.end(), [](int n) { return n > 0; });
```

## Transformation and Numeric (`<numeric>`)

```cpp
#include <vector>
#include <numeric>
#include <algorithm>

std::vector<int> vals = {1, 2, 3, 4};

// Accumulate (Sum)
int sum = std::accumulate(vals.begin(), vals.end(), 0); // 10

// In-place transform (Square every element)
std::transform(vals.begin(), vals.end(), vals.begin(), [](int n) {
    return n * n;
}); // {1, 4, 9, 16}
```
