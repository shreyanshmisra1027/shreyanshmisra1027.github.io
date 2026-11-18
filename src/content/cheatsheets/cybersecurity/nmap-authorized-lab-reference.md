---
title: Nmap Authorized Lab Reference
description: Defensive reference for network discovery, port scanning techniques, service detection, and OS fingerprinting in authorized lab environments.
category: cybersecurity
subcategory: network-security
tags: [security, nmap, networking, defensive, auditing]
difficulty: intermediate
order: 40
draft: false
---

# Nmap Authorized Lab Reference

A technical reference for authorized network discovery, service auditing, and vulnerability verification in isolated lab environments.

> **Legal & Ethical Notice**: Network scanning without explicit prior written authorization from the system owner is illegal and unethical. Use this reference solely within private local labs, authorized security competitions (CTFs), or internal defensive audits.

## Core Scan Techniques

| Flag | Scan Type | Description | Privileges |
| :--- | :--- | :--- | :--- |
| `-sS` | TCP SYN (Stealth) | Half-open scan; does not complete 3-way handshake | Root / Administrator |
| `-sT` | TCP Connect | Completes full 3-way handshake; standard fallback | Unprivileged user |
| `-sU` | UDP Scan | Scans open UDP ports (DNS, DHCP, SNMP) | Root / Administrator |
| `-sV` | Version Detection | Probes open ports to identify software versions | None |
| `-O` | OS Fingerprinting | Analyzes TCP/IP stack implementation nuances | Root / Administrator |

## Common Scan Workflows (Lab Environment)

### Quick Asset Discovery (Ping Sweep)
```bash
# Discover active hosts on local subnet without port scanning
nmap -sn 192.168.1.0/24
```

### Comprehensive Defensive Audit
```bash
# Aggressive service detection on top 1000 ports
nmap -sV -sC -O -oA lab_audit 192.168.1.50
# -sC: Runs default safe NSE auditing scripts
# -oA: Saves output in normal, XML, and grepable formats
```

### Specific Port Ranges
```bash
nmap -p 22,80,443,8080 192.168.1.50   # Specific ports
nmap -p 1-65535 192.168.1.50          # Full port range (slow)
nmap -F 192.168.1.50                  # Fast scan (top 100 ports)
```

## Timing and Performance (`-T0` to `-T5`)

- **`-T2` (Polite)**: Conserves bandwidth and minimizes impact on sensitive legacy hardware.
- **`-T3` (Normal)**: Default timing template.
- **`-T4` (Aggressive)**: Assumes a fast, reliable modern network; speeds up lab scans.

## Nmap Scripting Engine (NSE) Categories

- `safe`: Scripts not designed to crash services or exploit bugs (e.g., banner grabbing).
- `discovery`: Queries public directory services, database names, and open shares.
- `version`: Extended version determination.

```bash
# Run safe discovery scripts against an authorized lab web server
nmap --script "discovery and safe" -p 80,443 192.168.1.50
```
