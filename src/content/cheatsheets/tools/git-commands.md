---
title: Git Commands
description: Complete reference for Git version control including configuration, branching, merging, rebasing, remote workflows, and recovery.
category: tools
subcategory: git
tags: [git, version-control, cli]
difficulty: beginner
featured: true
order: 22
draft: false
---

# Git Commands

Distributed version control system for tracking changes in source code.

## Configuration

```bash
# Set global identity
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Default branch name
git config --global init.defaultBranch main

# Useful aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --decorate --all"
```

## Repository Initialization

```bash
# Initialize new repo
git init

# Clone existing remote
git clone https://github.com/user/repo.git
git clone --depth 1 https://github.com/user/repo.git  # Shallow clone (history truncated)
```

## Staging and Committing

```bash
# Status of working tree
git status
git status -s  # Short format

# Stage files
git add file.txt           # Specific file
git add .                  # All changes in current dir
git add -p                 # Interactive patch staging

# Commit
git commit -m "message"
git commit -am "message"   # Auto-stage tracked files
git commit --amend         # Modify last commit
```

## Branching

```bash
# List branches
git branch                 # Local
git branch -r              # Remote
git branch -a              # All

# Create and switch
git branch feature/login
git checkout feature/login
git checkout -b feature/login  # Create and switch in one step

# Rename current branch
git branch -m new-name

# Delete branch
git branch -d feature/login     # Safe delete (merged)
git branch -D feature/login     # Force delete
```

## Merging and Rebasing

```bash
# Merge branch into current
git merge feature/login

# Merge with no fast-forward (preserves history)
git merge --no-ff feature/login

# Rebase current branch onto target
git rebase main

# Interactive rebase (squash, reorder, edit)
git rebase -i HEAD~3

# Abort rebase/merge
git rebase --abort
git merge --abort
```

## Remote Workflows

```bash
# Add remote
git remote add origin https://github.com/user/repo.git
git remote -v          # List remotes

# Fetch and pull
git fetch origin           # Update remote refs only
git pull origin main       # Fetch + merge

# Push
git push origin main
git push -u origin feature/login  # Set upstream
git push --force-with-lease       # Safe force push
```

## Recovery and Inspection

```bash
# View history
git log --oneline -10
git log --graph --all --oneline

# Show diff
git diff              # Unstaged changes
git diff --staged     # Staged changes
git diff HEAD         # All changes

# Unstage file
git restore --staged file.txt

# Discard working directory changes
git restore file.txt
git checkout -- file.txt  # Older syntax

# Reset commits
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged (default)
git reset --hard HEAD~1   # Discard changes completely

# Reflog (recover lost commits)
git reflog
git reset --hard HEAD@{5}
```

## Stashing

```bash
# Stash current changes
git stash
git stash push -m "WIP: feature x"

# List and apply stashes
git stash list
git stash pop          # Apply and drop
git stash apply        # Apply and keep
git stash drop stash@{0}
```

## Common Mistakes

1. **`git add .` in a repo with build artifacts** — use `.gitignore`
2. **Force pushing shared branches** — use `--force-with-lease` instead
3. **Committing directly to `main`** — use feature branches + PRs
4. **Large files in history** — use Git LFS for binaries > 100MB