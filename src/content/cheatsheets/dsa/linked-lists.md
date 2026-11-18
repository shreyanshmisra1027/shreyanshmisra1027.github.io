---
title: Linked Lists
description: Singly and doubly linked lists, pointer manipulation, fast-slow pointers, and cycle detection.
category: dsa
subcategory: linear-structures
tags: [dsa, linked-list, pointers, algorithms]
difficulty: intermediate
order: 15
draft: false
---

# Linked Lists

Linked lists store items in nodes that contain data and pointers to successor (and predecessor) nodes.

## Node Structure

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

## Reversing a Linked List ($O(n)$ Time, $O(1)$ Space)

```python
def reverse_list(head: ListNode | None) -> ListNode | None:
    prev = None
    curr = head

    while curr:
        nxt = curr.next  # Temporarily store next
        curr.next = prev  # Reverse pointer
        prev = curr       # Advance prev
        curr = nxt        # Advance curr

    return prev
```

## Fast & Slow Pointers (Cycle Detection & Middle Node)

Floyd's Cycle-Finding Algorithm detects cycles in $O(n)$ time and $O(1)$ space:

```python
def has_cycle(head: ListNode | None) -> bool:
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next          # Moves 1 step
        fast = fast.next.next     # Moves 2 steps
        if slow == fast:
            return True           # Cycle detected

    return false
```
