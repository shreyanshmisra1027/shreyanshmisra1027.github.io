---
title: Networking Fundamentals
description: Subnetting, CIDR notation, DNS resolution, IP addressing, and routing table lookup.
category: computer-science
subcategory: networking
tags: [networking, dns, subnetting, ip]
difficulty: intermediate
order: 35
draft: false
---

# Networking Fundamentals

IP addressing, subnet masks, CIDR blocks, and Domain Name System (DNS) resolution.

## IPv4 & CIDR Subnetting

CIDR (Classless Inter-Domain Routing) notation specifies network prefix length:
`192.168.1.0/24` means the first 24 bits are the network ID, leaving 8 bits for host addresses ($2^8 - 2 = 254$ usable hosts).

| CIDR Prefix | Subnet Mask | Usable Hosts |
| :--- | :--- | :--- |
| `/30` | `255.255.255.252` | 2 |
| `/28` | `255.255.255.240` | 14 |
| `/24` | `255.255.255.0` | 254 |
| `/16` | `255.255.0.0` | 65,534 |

## DNS Resolution Process

When a client queries `codedex.io`:
1. **Browser Cache**: Check local browser DNS cache.
2. **OS Cache**: Check operating system DNS resolver cache.
3. **Recursive Resolver (ISP / 8.8.8.8)**: Query local DNS resolver.
4. **Root Name Server (`.`)**: Returns TLD server for `.io`.
5. **TLD Name Server (`.io`)**: Returns Authoritative Name Server for `codedex.io`.
6. **Authoritative Name Server**: Returns final IP address (`192.0.2.1`).
