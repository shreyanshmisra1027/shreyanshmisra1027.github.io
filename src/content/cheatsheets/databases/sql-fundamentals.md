---
title: SQL Fundamentals
description: Core relational database syntax covering SELECT, WHERE, GROUP BY, HAVING, ORDER BY, constraints, and ACID transactions.
category: databases
subcategory: sql
tags: [sql, database, relational, queries]
difficulty: beginner
featured: true
order: 28
draft: false
---

# SQL Fundamentals

Structured Query Language (SQL) is the standard declarative language for interacting with relational database management systems (RDBMS).

## SQL Query Execution Order

Understanding the logical order of query execution helps optimize and write correct queries:

1. `FROM` & `JOIN` (determine data sources)
2. `WHERE` (filter rows before aggregation)
3. `GROUP BY` (group rows into summary rows)
4. `HAVING` (filter grouped summary rows)
5. `SELECT` (evaluate expressions and project columns)
6. `DISTINCT` (eliminate duplicate rows)
7. `ORDER BY` (sort final output)
8. `LIMIT` / `OFFSET` (restrict result row count)

## Core SELECT Queries

```sql
SELECT
    department_id,
    COUNT(*) AS total_employees,
    AVG(salary) AS avg_salary
FROM employees
WHERE is_active = TRUE AND hire_date >= '2023-01-01'
GROUP BY department_id
HAVING COUNT(*) > 5
ORDER BY avg_salary DESC
LIMIT 10;
```

## DDL (Data Definition Language)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
```

## DML (Data Manipulation Language)

```sql
-- Insert
INSERT INTO users (username, email)
VALUES ('alice', 'alice@codedex.io');

-- Update
UPDATE users
SET email = 'new_alice@codedex.io'
WHERE id = 1;

-- Delete
DELETE FROM users
WHERE id = 1;
```

## Transactions & ACID Properties

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;
-- Or ROLLBACK on failure
```
- **Atomicity**: All statements succeed or none do.
- **Consistency**: Database transitions from one valid state to another.
- **Isolation**: Concurrent transactions cannot observe each other's intermediate state.
- **Durability**: Committed data survives system crashes and power loss.
