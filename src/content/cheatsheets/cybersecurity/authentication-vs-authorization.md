---
title: Authentication vs Authorization
description: Distinguishing identity verification (AuthN) from access control (AuthZ), with protocols, tokens, and models.
category: cybersecurity
subcategory: access-control
tags: [auth, security, oauth, jwt, access-control]
difficulty: beginner
order: 38
draft: false
---

# Authentication vs Authorization

Two distinct but complementary security controls often confused in system design.

## Core Distinction

| Aspect | **Authentication (AuthN)** | **Authorization (AuthZ)** |
| :--- | :--- | :--- |
| **Question** | "Who are you?" | "What are you allowed to do?" |
| **Timing** | Occurs first (gate entry) | Occurs after successful authentication |
| **Artifact** | Session cookie, JWT, API Key | Role, policy, scope, permission claim |
| **Failure Response** | `401 Unauthorized` | `403 Forbidden` |

## Common Authentication Protocols

- **Session/Cookie**: Server stores state; client holds session ID.
- **JWT (JSON Web Token)**: Stateless, self-contained claims (Base64URL encoded header.payload.signature).
- **OAuth 2.0 / OIDC**: Delegated authorization framework; returns Access Token (AuthZ) and ID Token (AuthN).
- **mTLS (Mutual TLS)**: Certificate-based machine-to-machine authentication.

## Common Authorization Models

| Model | Description | Example Use Case |
| :--- | :--- | :--- |
| **RBAC (Role-Based Access Control)** | Permissions grouped into roles assigned to users | Standard enterprise apps |
| **ABAC (Attribute-Based Access Control)** | Decisions based on attributes (user, resource, environment) | Fine-grained cloud IAM (AWS IAM) |
| **ReBAC (Relationship-Based Access Control)** | Permissions derived from graph relationships | Social apps, file sharing (Google Zanzibar) |

## JWT Token Structure

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   // Header (alg, typ)
eyJzdWIiOiIxMjM0Iiwicm9sZSI6ImFkbWluIn0. // Payload (claims: sub, role, exp)
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c // Signature (HMAC or RSA)
```

> **Security Note**: JWTs are **not encrypted** by default (JWS). Anyone can decode the payload. Never put secrets in the payload. Use JWE (JSON Web Encryption) if encryption is required.