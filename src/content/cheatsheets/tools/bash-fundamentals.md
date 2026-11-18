---
title: Bash Fundamentals
description: Bash scripting fundamentals, variables, loops, conditional statements, error handling, and redirection.
category: tools
subcategory: bash
tags: [bash, scripting, linux, shell]
difficulty: intermediate
order: 26
draft: false
---

# Bash Fundamentals

Bash is the default Unix shell and command language for automation, scripting, and system administration.

## Script Boilerplate (Strict Mode)

Always start robust Bash scripts with error-handling flags:

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
# -e: Exit immediately if a command exits with a non-zero status
# -u: Treat unset variables as an error
# -o pipefail: Pipeline returns exit status of the last command to fail
```

## Variables and Quoting

```bash
NAME="Alice"
COUNT=42

# Always double quote variables to prevent word splitting and globbing
echo "Hello, ${NAME}"

# Command substitution
CURRENT_DATE=$(date +%Y-%m-%d)

# Read-only variables
readonly API_KEY="secret_key"
```

## Conditional Statements (`[[ ... ]]`)

```bash
if [[ -f "/etc/hosts" ]]; then
    echo "File exists"
fi

if [[ "$NAME" == "Alice" && "$COUNT" -gt 10 ]]; then
    echo "Conditions met"
fi
```

### File Test Operators
- `-f file`: True if file exists and is a regular file.
- `-d dir`: True if file exists and is a directory.
- `-z str`: True if string is empty (length 0).
- `-n str`: True if string is not empty.

## Loops and Iteration

```bash
# Iterating over a list
for item in apple banana cherry; do
    echo "Fruit: ${item}"
done

# While loop reading a file line-by-line safely
while IFS= read -r line; do
    echo "Line: ${line}"
done < "input.txt"
```

## Input/Output Redirection

```bash
command > output.txt    # Overwrite stdout to file
command >> output.txt   # Append stdout to file
command 2> error.log    # Redirect stderr to file
command > file 2>&1     # Redirect both stdout and stderr
command < input.txt     # Read stdin from file
```
