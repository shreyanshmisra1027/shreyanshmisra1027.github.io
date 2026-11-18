---
title: C++ STL Containers
description: Standard Template Library container reference including vector, map, unordered_map, set, deque, and priority_queue.
category: programming
subcategory: cpp
tags: [cpp, stl, containers, data-structures]
difficulty: intermediate
featured: true
order: 10
draft: false
---

# C++ STL Containers

The C++ Standard Template Library provides standardized, generic data structures optimized for performance and memory efficiency.

## Container Complexity Overview

| Container | Underlying Structure | Element Access | Insertion (End) | Insertion (Middle) | Search |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `std::vector` | Dynamic contiguous array | $O(1)$ | $O(1)$ amortized | $O(N)$ | $O(N)$ |
| `std::deque` | Chunked segmented array | $O(1)$ | $O(1)$ | $O(N)$ | $O(N)$ |
| `std::list` | Doubly linked list | $O(N)$ | $O(1)$ | $O(1)$ (with iterator) | $O(N)$ |
| `std::set` | Red-Black Tree (Self-balancing) | N/A | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ |
| `std::map` | Red-Black Tree (Key-Value) | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ |
| `std::unordered_map` | Hash Table | $O(1)$ avg | $O(1)$ avg | N/A | $O(1)$ avg |

## std::vector

The default container for sequential data:

```cpp
#include <vector>
#include <iostream>

std::vector<int> vec = {10, 20, 30};
vec.push_back(40);        // Insert at end
vec.emplace_back(50);     // In-place construct (avoids copy/move)

// Reserve capacity to avoid reallocations
vec.reserve(100);

// Element access
int val = vec[2];         // Fast unchecked access
int safe = vec.at(2);     // Bounds-checked (throws std::out_of_range)

// Erase element
vec.erase(vec.begin() + 1); // Erases 20
```

## std::map and std::unordered_map

```cpp
#include <map>
#include <unordered_map>
#include <string>

// Ordered map (Sorted by key using operator<)
std::map<std::string, int> userAges;
userAges["Alice"] = 28;
userAges["Bob"] = 32;

// Unordered map (Hash table, average O(1) lookups)
std::unordered_map<std::string, std::string> dnsCache;
dnsCache.insert({"codedex.io", "127.0.0.1"});

// Safe lookup without inserting default keys
auto it = dnsCache.find("codedex.io");
if (it != dnsCache.end()) {
    std::cout << "IP: " << it->second << "\n";
}
```

## std::priority_queue (Max-Heap / Min-Heap)

```cpp
#include <queue>
#include <vector>

// Default is Max-Heap (largest on top)
std::priority_queue<int> maxHeap;
maxHeap.push(30);
maxHeap.push(10);
maxHeap.push(50);
int topVal = maxHeap.top(); // 50
maxHeap.pop();

// Min-Heap (smallest on top)
std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
minHeap.push(30);
minHeap.push(10);
int minVal = minHeap.top(); // 10
```
