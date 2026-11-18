---
title: PostgreSQL Quick Reference
description: Advanced PostgreSQL features including JSONB querying, EXPLAIN ANALYZE, partial indexes, and CTEs.
category: databases
subcategory: postgresql
tags: [postgresql, sql, database, jsonb, explain]
difficulty: intermediate
order: 30
draft: false
---

# PostgreSQL Quick Reference

PostgreSQL is a powerful, open-source object-relational database system emphasizing extensibility and SQL compliance.

## JSONB Operations

PostgreSQL stores binary-encoded JSON with GIN indexing capability:

```sql
-- Query nested key
SELECT metadata->>'tier' AS user_tier
FROM accounts
WHERE metadata @> '{"status": "active"}';

-- Create GIN index for high-speed key/value lookups
CREATE INDEX idx_accounts_metadata ON accounts USING GIN (metadata);
```

## Common Table Expressions (CTEs)

```sql
WITH RegionalSales AS (
    SELECT region, SUM(amount) AS total_sales
    FROM orders
    GROUP BY region
)
SELECT region, total_sales
FROM RegionalSales
WHERE total_sales > (SELECT AVG(total_sales) FROM RegionalSales);
```

## Window Functions

Perform calculations across rows related to the current row without collapsing the result set:

```sql
SELECT
    employee_name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank,
    AVG(salary) OVER (PARTITION BY department) as avg_dept_salary
FROM employees;
```

## Query Profiling with EXPLAIN ANALYZE

```sql
EXPLAIN (ANALYZE, BUFFERS, COSTS)
SELECT * FROM users WHERE email = 'alice@example.com';
```
Look for:
- **Seq Scan vs Index Scan**: Sequential table scans indicate missing indexes on large datasets.
- **Actual Time vs Planned Cost**: Significant variance suggests out-of-date table statistics (run `ANALYZE users;`).
