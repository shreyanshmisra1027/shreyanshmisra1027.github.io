---
title: Linux File Permissions
description: Linux permission model, chmod numeric and symbolic syntax, chown, chgrp, umask, and SUID/SGID bits.
category: tools
subcategory: linux
tags: [linux, permissions, chmod, chown, security]
difficulty: intermediate
featured: true
order: 25
draft: false
---

# Linux File Permissions

The UNIX discretionary access control (DAC) model governs reading, writing, and executing files and directories.

## Permission String Layout

A listing like `-rwxr-xr--` is divided into four components:

| Type Indicator | User (Owner) | Group | Others |
| :--- | :--- | :--- | :--- |
| `-` (regular file) / `d` (dir) | `rwx` (Read, Write, Exec) | `r-x` (Read, Exec) | `r--` (Read only) |

## Numeric (Octal) Modes

Each permission has a numeric weight:
- **Read (`r`)**: 4
- **Write (`w`)**: 2
- **Execute (`x`)**: 1

```bash
chmod 755 script.sh # Owner: rwx (7), Group: r-x (5), Others: r-x (5)
chmod 644 file.txt  # Owner: rw- (6), Group: r-- (4), Others: r-- (4)
chmod 600 id_rsa    # Owner: rw- (6), Group: --- (0), Others: --- (0)
```

## Symbolic Modes

```bash
chmod u+x script.sh       # Add execute permission for user (owner)
chmod g-w shared.txt      # Remove write permission from group
chmod o-rwx secret.txt    # Deny all access to others
chmod a+r public.txt      # Add read permission for all
```

## Directory Permissions Behavior

- **`r` (Read)**: Allows listing files in the directory (`ls`).
- **`w` (Write)**: Allows creating, deleting, and renaming files inside (requires `x`).
- **`x` (Execute)**: Allows entering the directory (`cd`) and accessing file metadata inside.

## Ownership: chown and chgrp

```bash
chown alice file.txt             # Change owner
chown alice:developers app/      # Change owner and group
chown -R www-data:www-data /var/www # Recursive ownership change
```
