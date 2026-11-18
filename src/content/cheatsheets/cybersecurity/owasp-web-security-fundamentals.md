---
title: OWASP Web Security Fundamentals
description: Core web vulnerabilities from the OWASP Top 10, root causes, prevention strategies, and defensive code examples.
category: cybersecurity
subcategory: web-security
tags: [security, owasp, xss, sqli, csrf, defensive]
difficulty: intermediate
featured: true
order: 39
draft: false
---

# OWASP Web Security Fundamentals

Defensive security guide to identifying and remediating critical web application security risks based on the OWASP Top 10.

## 1. Broken Access Control (A01)

Occurs when authorization checks are missing, bypassed, or poorly enforced (e.g., IDOR - Insecure Direct Object References).

### Vulnerable Pattern
```python
# Attacker modifies id in URL: /api/invoices/999
@app.route('/api/invoices/<int:id>')
def get_invoice(id):
    return db.query(Invoice).filter_by(id=id).first() # Missing user ownership check!
```

### Remediation
```python
@app.route('/api/invoices/<int:id>')
@login_required
def get_invoice(id):
    # Enforce that current_user owns the requested invoice
    invoice = db.query(Invoice).filter_by(id=id, user_id=current_user.id).first()
    if not invoice:
        abort(404)
    return invoice
```

## 2. Injection (SQLi, Command Injection) (A03)

Occurs when untrusted user data is concatenated directly into interpreter commands.

### Remediation: Always Use Parameterized Queries
```python
# ❌ VULNERABLE: String concatenation
cursor.execute(f"SELECT * FROM users WHERE username = '{username}'")

# ✅ SECURE: Parameterized query (Prepared Statement)
cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
```

## 3. Cross-Site Scripting (XSS)

Occurs when an application includes untrusted data in a web page without proper validation or escaping, allowing browser execution of malicious JavaScript.

- **Stored XSS**: Payload saved in database and served to other users.
- **Reflected XSS**: Payload reflected immediately in URL or error responses.
- **DOM XSS**: Unsafe JavaScript writes to the DOM (`innerHTML = userInput`).

### Defensive Controls
- **Context-Aware Output Encoding**: HTML entity encode before rendering.
- **Content Security Policy (CSP)**: `default-src 'self'; script-src 'self'; object-src 'none';`
- **HttpOnly Cookies**: Prevents client-side scripts from reading sensitive session cookies via `document.cookie`.

## 4. Cross-Site Request Forgery (CSRF)

Forces an authenticated victim's browser to send forged requests to a vulnerable application.

### Defensive Controls
- **SameSite Cookies**: Set `SameSite=Lax` or `SameSite=Strict` on session cookies.
- **Anti-CSRF Tokens**: Cryptographically secure, unpredictable token validated on state-changing requests (POST/PUT/DELETE).

---
> **Disclaimer**: This documentation is strictly for defensive software engineering, authorized penetration testing, and educational research. Unauthorized tampering with computer systems is illegal.
