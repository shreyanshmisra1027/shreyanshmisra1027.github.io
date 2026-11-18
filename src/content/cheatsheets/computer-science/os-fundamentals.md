---
title: Operating System Fundamentals
description: Core concepts of modern operating systems including virtual memory, page tables, CPU scheduling, and deadlocks.
category: computer-science
subcategory: operating-systems
tags: [os, systems, memory, deadlocks, scheduling]
difficulty: intermediate
order: 31
draft: false
---

# Operating System Fundamentals

An operating system acts as an intermediary between user applications and the physical hardware, managing memory, processor time, and I/O devices.

## Virtual Memory & Paging

Modern OS architectures decouple program addresses from physical RAM addresses using the **Memory Management Unit (MMU)**:

- **Virtual Address Space**: Each process perceives a contiguous memory range ($0$ to $2^{64}-1$ on 64-bit systems).
- **Page & Frame**: Virtual memory is sliced into **Pages** (commonly 4KB); physical RAM is sliced into **Frames**.
- **Page Table**: Translates virtual page numbers (VPN) into physical frame numbers (PFN).
- **TLB (Translation Lookaside Buffer)**: High-speed hardware CPU cache for recent virtual-to-physical address translations.
- **Page Fault**: Occurs when a process accesses a page not currently in physical RAM, triggering disk swap retrieval.

## CPU Scheduling Algorithms

| Algorithm | Preemptive | Key Advantage | Main Drawback |
| :--- | :--- | :--- | :--- |
| **First-Come, First-Served (FCFS)** | No | Simple | Convoy effect (long tasks block short tasks) |
| **Shortest Job First (SJF)** | Optional | Minimum average waiting time | Starvation of long jobs |
| **Round Robin (RR)** | Yes | Fair time-sharing for interactive systems | Frequent context-switch overhead if quantum is too small |
| **Multi-Level Feedback Queue (MLFQ)** | Yes | Adaptive priorities based on CPU vs I/O bound | Complex tuning |

## Deadlocks and the Coffman Conditions

A deadlock occurs when a set of concurrent processes are blocked because each holds a resource and waits for another resource held by another process.

All four conditions must hold simultaneously for a deadlock to exist:
1. **Mutual Exclusion**: At least one resource must be held in a non-shareable mode.
2. **Hold and Wait**: A process holds at least one resource and is waiting to acquire additional resources held by others.
3. **No Preemption**: Resources cannot be forcibly confiscated from a process holding them.
4. **Circular Wait**: A closed chain of processes exists such that each process holds a resource that is needed by the next process in the chain.

*Prevention Strategy: Impose a strict global ordering on resource acquisition.*
