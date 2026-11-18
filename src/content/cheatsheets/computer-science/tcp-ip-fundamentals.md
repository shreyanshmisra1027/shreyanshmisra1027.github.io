---
title: TCP/IP Fundamentals
description: The 4-layer TCP/IP model, TCP three-way handshake, flow control, congestion control, and UDP.
category: computer-science
subcategory: networking
tags: [networking, tcp, ip, protocols]
difficulty: intermediate
featured: true
order: 33
draft: false
---

# TCP/IP Fundamentals

The TCP/IP suite is the foundational networking framework powering the internet and modern distributed systems.

## The 4-Layer TCP/IP Model

| Layer | OSI Equivalent | Core Protocols | Function |
| :--- | :--- | :--- | :--- |
| **4. Application** | Application, Presentation, Session | HTTP, HTTPS, DNS, SSH, TLS | End-user application protocols |
| **3. Transport** | Transport | TCP, UDP | End-to-end reliable or datagram delivery |
| **2. Internet** | Network | IP (IPv4/IPv6), ICMP, ARP | Packet routing across networks |
| **1. Link** | Physical, Data Link | Ethernet, Wi-Fi | Physical hardware framing and mac addressing |

## TCP Three-Way Handshake

Establishes a reliable, connection-oriented socket stream:

```
Client                                     Server
  |                                          |
  | -------- SYN (seq=x) ------------------> |
  |                                          |
  | <------- SYN-ACK (seq=y, ack=x+1) ------ |
  |                                          |
  | -------- ACK (ack=y+1) ----------------> |
  |                                          |
[Connection Established]                 [Connection Established]
```

## TCP vs UDP

| Feature | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
| :--- | :--- | :--- |
| **Connection** | Connection-oriented (Handshake required) | Connectionless (Fire and forget) |
| **Reliability** | Guaranteed delivery (retransmits lost packets) | Best-effort (packets may drop or arrive out of order) |
| **Ordering** | Ordered byte stream via sequence numbers | Unordered |
| **Speed / Overhead** | Higher overhead (header + state management) | Minimal overhead (8-byte header) |
| **Use Cases** | Web traffic (HTTP/HTTPS), SSH, Database connections | Video streaming, DNS queries, Online multiplayer games, VoIP |

## Flow Control & Congestion Control

- **Flow Control (Sliding Window)**: Prevents a fast sender from overwhelming a slow receiver's buffer memory.
- **Congestion Control**: Prevents network routers from dropping packets due to overloading via algorithms like Slow Start, Congestion Avoidance, and Fast Recovery.
