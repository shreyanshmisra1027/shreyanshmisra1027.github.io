---
title: Cryptography Fundamentals
description: Core cryptographic primitives including symmetric encryption, asymmetric encryption, digital signatures, and key exchange.
category: cybersecurity
subcategory: cryptography
tags: [cryptography, encryption, security, mathematics]
difficulty: intermediate
featured: true
order: 36
draft: false
---

# Cryptography Fundamentals

Cryptography provides confidentiality, integrity, authentication, and non-repudiation through mathematical transformations.

## Symmetric Encryption (Secret Key)

Single key used for both encryption and decryption. Fast and suitable for bulk data.

| Algorithm | Key Size | Block Size | Status |
| :--- | :--- | :--- | :--- |
| **AES (Advanced Encryption Standard)** | 128 / 192 / 256 bits | 128 bits | Standard (FIPS 197) |
| **ChaCha20** | 256 bits | Stream | Preferred for software implementations |

### AES Modes of Operation

- **GCM (Galois/Counter Mode)**: Authenticated encryption (confidentiality + integrity). **Preferred default.**
- **CBC (Cipher Block Chaining)**: Requires HMAC for integrity; vulnerable to padding oracle attacks if misused.
- **CTR (Counter Mode)**: Stream cipher mode; requires nonce to never be reused.

## Asymmetric Encryption (Public Key)

Mathematically related key pairs: Public key (encryption/verification) and Private key (decryption/signing).

| Algorithm | Key Size | Use Case |
| :--- | :--- | :--- |
| **RSA** | 2048 / 3072 / 4096 bits | Legacy, digital signatures, key exchange (PKCS#1 v1.5 / OAEP) |
| **ECC (Elliptic Curve Cryptography)** | 256 bits (P-256) | Modern, smaller keys, faster; ECDH, ECDSA, EdDSA |

## Cryptographic Hash Functions

Deterministic, one-way function mapping arbitrary input to fixed-size output.

| Algorithm | Output Size | Status |
| :--- | :--- | :--- |
| **SHA-256** | 256 bits | Standard (FIPS 180-4) |
| **SHA-3 (Keccak)** | 256 / 512 bits | Standard (FIPS 202) |
| **BLAKE3** | 256 bits | Fast, parallelizable |

### Properties Required
- **Preimage Resistance**: Hard to find input for given hash.
- **Second Preimage Resistance**: Hard to find different input with same hash.
- **Collision Resistance**: Hard to find any two inputs with same hash.

## Digital Signatures

Provides authentication, integrity, and non-repudiation:

```
Signing:    Signature = Sign(private_key, hash(message))
Verification: Verify(public_key, message, Signature) → Valid / Invalid
```

Common schemes: **RSA-PSS**, **ECDSA**, **Ed25519 (EdDSA)**.

## Key Exchange Protocols

Establishes a shared secret over an insecure channel:

- **Diffie-Hellman (DH / ECDH)**: Ephemeral variant (DHE/ECDHE) provides Forward Secrecy.
- **TLS 1.3** mandates ephemeral key exchange (ECDHE) for all handshakes.

---

> **Disclaimer**: This reference is for educational and defensive learning purposes only. Implement cryptographic operations using audited libraries (libsodium, OpenSSL, Go crypto, Rust ring) — never "roll your own crypto".