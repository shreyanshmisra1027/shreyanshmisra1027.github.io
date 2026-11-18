---
title: Hashing vs Encryption
description: Fundamental differences between cryptographic hashing and encryption, when to use each, and common misconceptions.
category: cybersecurity
subcategory: cryptography
tags: [cryptography, hashing, encryption, security]
difficulty: beginner
order: 37
draft: false
---

# Hashing vs Encryption

These two cryptographic primitives serve fundamentally different purposes and are not interchangeable.

## Core Difference

| Property | Hashing | Encryption |
| :--- | :--- | :--- |
| **Reversibility** | **One-way** (irreversible) | **Two-way** (reversible with key) |
| **Purpose** | Integrity verification, fingerprinting | Confidentiality, data protection |
| **Key Required** | No (keyless) | Yes (symmetric or asymmetric) |
| **Output Size** | Fixed (e.g., 256 bits for SHA-256) | Variable (proportional to input) |
| **Same Input → Same Output** | Yes (deterministic) | Only if same key/IV/nonce |

## When to Use Hashing

- **Password Storage**: `hash(password + salt)` — never encrypt passwords.
- **File Integrity**: Compare `SHA-256(file)` to known hash.
- **Digital Signatures**: Hash message, then sign the hash.
- **Content Addressing**: Git commits, IPFS, deduplication.
- **Bloom Filters & Hash Tables**: Fast membership testing.

## When to Use Encryption

- **Data in Transit**: TLS/HTTPS protects data between client and server.
- **Data at Rest**: Disk encryption (LUKS, BitLocker), database field encryption.
- **Confidential Payloads**: Encrypting API responses, JWT contents, PII.

## Common Misconceptions

1. **"We'll just encrypt the passwords"** → Wrong. If server is breached, the key is accessible, decrypting all passwords. **Hash with salt (bcrypt, Argon2, PBKDF2).**

2. **"Hashing with a secret key makes it encryption"** → No, this is HMAC (message authentication), not encryption.

3. **"SHA-256 is encryption"** → No, it is a hash function. There is no "decrypt SHA-256".

4. **"Base64 encoding is encryption"** → Base64 is encoding (binary-to-text), not encryption. It provides zero confidentiality.

## Password Hashing Best Practices

```python
# Modern algorithms with built-in salting and work factor:
import bcrypt

# Hashing
password_hash = bcrypt.hashpw(b"password123", bcrypt.gensalt(rounds=12))

# Verification
if bcrypt.checkpw(b"password123", password_hash):
    print("Valid password")
```

**Recommended Algorithms (2024):**
1. **Argon2id** (Winner of Password Hashing Competition)
2. **bcrypt** (Battle-tested, widely available)
3. **PBKDF2** (Legacy compatibility, NIST approved)

Avoid: MD5, SHA-1, SHA-256 (raw), unsalted hashes.