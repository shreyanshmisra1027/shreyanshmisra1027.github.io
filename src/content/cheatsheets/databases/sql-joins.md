---
title: SQL Joins
description: Visual and practical reference for INNER, LEFT, RIGHT, FULL OUTER, CROSS, and self joins in relational databases.
category: databases
subcategory: sql
tags: [sql, database, joins, relational]
difficulty: intermediate
featured: true
order: 29
draft: false
---

# SQL Joins

SQL joins allow combining rows from two or more tables based on a related column between them.

## Types of Joins

| Join Type | Description | Result Behavior |
| :--- | :--- | :--- |
| `INNER JOIN` | Matches existing on both sides | Keeps only rows that have matches in both tables |
| `LEFT JOIN` | All left rows + matching right rows | Non-matching right rows populated with `NULL` |
| `RIGHT JOIN` | All right rows + matching left rows | Non-matching left rows populated with `NULL` |
| `FULL OUTER JOIN` | Union of left and right joins | Retains all rows from both tables, filling `NULL` |
| `CROSS JOIN` | Cartesian product | Produces $N \times M$ rows combining every pair |

## Visual Syntax Examples

### INNER JOIN

```sql
SELECT
    u.id,
    u.username,
    o.order_total,
    o.created_at
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

### LEFT JOIN (Find Users Without Orders)

```sql
SELECT
    u.id,
    u.username
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL; -- Filters to orphan rows
```

### Self Join (Hierarchical Data)

```sql
SELECT
    e.name AS employee_name,
    m.name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

## Performance & Optimization

- Always ensure foreign keys and joined columns have indexes (e.g., `o.user_id`).
- Beware of unintended Cartesian explosions if joining on non-unique keys without grouping.
- Prefer explicit `JOIN ... ON` syntax over legacy comma joins (`FROM table1, table2 WHERE ...`).
