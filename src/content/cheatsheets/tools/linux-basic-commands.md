---
title: Linux Basic Commands
description: Essential Linux shell commands for file navigation, process control, system inspection, and text processing.
category: tools
subcategory: linux
tags: [linux, bash, cli, terminal]
difficulty: beginner
featured: true
order: 24
draft: false
---

# Linux Basic Commands

Essential command-line utilities for navigation, file management, and system diagnosis in Linux environments.

## Navigation and File Management

```bash
pwd                       # Print working directory
ls -la                    # List all files with permissions and size
cd /var/log               # Change directory
mkdir -p path/to/dir      # Create directory tree
cp -r src/ dest/          # Copy directory recursively
mv old.txt new.txt        # Move/rename file
rm -rf temp_dir/          # Delete directory (use with caution!)
touch file.txt            # Create empty file or update timestamp
```

## Viewing and Processing Text

```bash
cat file.txt              # Print entire file
less file.txt             # Interactive pager (q to quit)
head -n 20 file.txt       # Print first 20 lines
tail -n 20 -f app.log     # Follow log output live
grep -rn "ERROR" /var/log # Recursive search with line numbers
wc -l file.txt            # Count lines in file
```

## System Inspection and Processes

```bash
top                       # Real-time task manager (or htop)
ps aux | grep node        # Find process by name
kill -9 <PID>             # Force kill process
df -h                     # Disk space usage human-readable
free -m                   # RAM usage in megabytes
uname -a                  # Linux kernel architecture and version
uptime                    # System uptime and load averages
```

## Network Utilities

```bash
ping -c 4 google.com      # Check connectivity
curl -I https://codedex.io# Inspect HTTP headers
ss -tulpn                 # Show listening TCP/UDP ports and sockets
ip addr show              # Display network interfaces and IP addresses
```
