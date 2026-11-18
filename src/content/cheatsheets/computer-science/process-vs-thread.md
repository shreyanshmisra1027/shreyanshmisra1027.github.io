---
title: Process vs Thread
description: Architectural comparison between operating system processes and threads, memory sharing, context switching, and IPC.
category: computer-science
subcategory: concurrency
tags: [concurrency, processes, threads, ipc, systems]
difficulty: intermediate
order: 32
draft: false
---

# Process vs Thread

Processes and threads are the two fundamental units of execution in modern multitasking operating systems.

## Comparative Architecture

| Property | Process | Thread (within a process) |
| :--- | :--- | :--- |
| **Definition** | An executing instance of a program | The smallest schedulable unit of CPU execution |
| **Address Space** | Isolated private address space (protected) | Shares code, data, heap with sibling threads |
| **Creation Cost** | Heavy (allocates page tables, file descriptors) | Lightweight (allocates private stack and registers) |
| **Context Switch Overhead** | High (flushes TLB, swaps page tables) | Low (registers and stack pointer only, TLB intact) |
| **Communication** | Inter-Process Communication (Pipes, Sockets, Shared Memory) | Shared memory variables (requires synchronization) |
| **Failure Isolation** | High (one process crash does not kill others) | Low (unhandled crash in one thread terminates parent process) |

## Memory Layout of a Process

```
High Memory Addresses (0xFFFFFFFF...)
┌─────────────────────────────────┐
│ Kernel Space (Invisible to user)│
├─────────────────────────────────┤
│ Stack (Grows Downward)          │  <-- Local variables, call frames (per-thread)
│    ↓                            │
│                                 │
│    ↑                            │
│ Heap (Grows Upward)             │  <-- Dynamic allocations (shared by threads)
├─────────────────────────────────┤
│ BSS Segment                     │  <-- Uninitialized global/static data
├─────────────────────────────────┤
│ Data Segment                    │  <-- Initialized global/static data
├─────────────────────────────────┤
│ Text Segment (Code)             │  <-- Read-only compiled machine instructions
└─────────────────────────────────┘
Low Memory Addresses (0x00000000...)
```

## Concurrency & Synchronization Primitives

- **Mutex (Mutual Exclusion)**: Binary lock granting single-thread access to a critical section.
- **Spinlock**: Busy-waits in a loop until the lock becomes available; optimal only for very short hold durations.
- **Semaphore**: Counter-based signaling primitive allowing up to $N$ simultaneous resource accessors.
- **Race Condition**: Undefined behavior occurring when multiple concurrent threads read and write shared state without synchronization.
