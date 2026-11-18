---
title: Java Fundamentals
description: Core Java programming syntax, JVM architecture, primitive types, collections, streams, and OOP concepts.
category: programming
subcategory: java
tags: [java, jvm, collections, oop]
difficulty: beginner
order: 12
draft: false
---

# Java Fundamentals

An enterprise-grade, strongly typed, class-based object-oriented programming language executed on the Java Virtual Machine (JVM).

## JVM Architecture Overview

- **Java Source (`.java`)** is compiled into platform-neutral **Bytecode (`.class`)** by `javac`.
- **JVM (Java Virtual Machine)** interprets bytecode and uses the **JIT (Just-In-Time) compiler** to compile hot execution paths directly to native machine code.
- **Garbage Collection (GC)** manages dynamic heap memory deallocation automatically.

## Minimal Program

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, CODEDEX!");
    }
}
```

## Primitive Types vs Wrapper Classes

| Primitive | Size | Wrapper Class | Default Value |
| :--- | :--- | :--- | :--- |
| `byte` | 1 byte | `Byte` | `0` |
| `int` | 4 bytes | `Integer` | `0` |
| `long` | 8 bytes | `Long` | `0L` |
| `double` | 8 bytes | `Double` | `0.0d` |
| `boolean` | 1 bit (effective) | `Boolean` | `false` |
| `char` | 2 bytes (UTF-16) | `Character` | `'\u0000'` |

## Collections Framework

```java
import java.util.*;

// List (ArrayList for fast random access, LinkedList for fast insertions)
List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");

// Set (HashSet eliminates duplicates)
Set<Integer> uniqueNums = new HashSet<>(Arrays.asList(1, 2, 2, 3));

// Map (HashMap for O(1) key-value mapping)
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
int aliceScore = scores.getOrDefault("Alice", 0);
```

## Java Streams API (Modern Java)

Functional pipelines for processing collections concisely:

```java
import java.util.List;
import java.util.stream.Collectors;

List<String> names = List.of("anna", "bob", "alex", "charlie");

List<String> filtered = names.stream()
    .filter(name -> name.startsWith("a"))
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());
// ["ALEX", "ANNA"]
```

## Record Classes (Java 16+)

Immutable data carrier with automatic equals, hashCode, and getters:

```java
public record User(String id, String email, boolean active) {}

User u = new User("usr_1", "alice@example.com", true);
System.out.println(u.email()); // Note: accessor is email(), not getEmail()
```
