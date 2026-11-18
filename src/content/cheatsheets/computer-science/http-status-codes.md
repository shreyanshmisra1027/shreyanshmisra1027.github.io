---
title: HTTP Status Codes
description: Complete reference for HTTP status code classes (1xx to 5xx) with common meanings and debugging scenarios.
category: computer-science
subcategory: web-protocols
tags: [http, web, api, status-codes]
difficulty: beginner
order: 34
draft: false
---

# HTTP Status Codes

HTTP status codes are standard responses issued by servers in response to client requests made over the web.

## Status Code Ranges

| Range | Class | Meaning |
| :--- | :--- | :--- |
| **1xx** | Informational | Request received, continuing process |
| **2xx** | Success | Action successfully received, understood, and accepted |
| **3xx** | Redirection | Further action must be taken to complete request |
| **4xx** | Client Error | Request contains bad syntax or cannot be fulfilled |
| **5xx** | Server Error | Server failed to fulfill a valid request |

## Common Status Codes

### 2xx Success
- **`200 OK`**: Standard success response for GET/PUT.
- **`201 Created`**: Resource successfully created (used in POST).
- **`204 No Content`**: Success with no response body (common in DELETE).

### 3xx Redirection
- **`301 Moved Permanently`**: Permanent URL redirection (updates SEO bookmarks).
- **`302 Found`**: Temporary URL redirection.
- **`304 Not Modified`**: Cached version is valid; no body re-transferred.

### 4xx Client Error
- **`400 Bad Request`**: Malformed request syntax or invalid parameters.
- **`401 Unauthorized`**: Missing or invalid authentication credentials (Bearer token).
- **`403 Forbidden`**: Authenticated but lacks required permissions.
- **`404 Not Found`**: Requested resource does not exist.
- **`409 Conflict`**: Request conflicts with current server state (e.g., duplicate unique key).
- **`429 Too Many Requests`**: Rate limiting exceeded.

### 5xx Server Error
- **`500 Internal Server Error`**: Generic catch-all server crash or unhandled exception.
- **`502 Bad Gateway`**: Upstream proxy/gateway received an invalid response.
- **`503 Service Unavailable`**: Server overloaded or undergoing maintenance.
- **`504 Gateway Timeout`**: Upstream server failed to respond in time.
