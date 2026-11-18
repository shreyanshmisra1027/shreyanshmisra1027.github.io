---
title: Git Branching and Merging
description: Advanced Git workflows including branch strategies, merge conflicts, rebase vs merge, cherry-pick, and GitHub flow.
category: tools
subcategory: git
tags: [git, branching, merging, workflows]
difficulty: intermediate
order: 23
draft: false
---

# Git Branching and Merging

Advanced workflows for team collaboration and clean history management.

## Branch Strategies

### GitHub Flow (Trunk-based, CI/CD Friendly)

```
main (always deployable)
  ├── feature/auth       → PR → merge to main
  ├── feature/api        → PR → merge to main
  └── hotfix/security    → PR → merge to main
```

### Git Flow (Release-based)

```
main (releases only)
  └── develop (integration branch)
        ├── feature/x    → merge to develop
        ├── release/1.0  → merge to main + develop
        └── hotfix/1.0.1 → merge to main + develop
```

## Merge Conflict Resolution

```bash
# Conflict markers in file
<<<<<<< HEAD
// current branch code
=======
// incoming branch code
>>>>>>> feature/branch

# Resolve by editing file, then
git add conflicted-file.txt
git commit
```

## Rebase vs Merge

| Aspect | Merge | Rebase |
| :--- | :--- | :--- |
| **History** | Preserves actual chronology (merge commits) | Linear, cleaner history |
| **Safety** | Non-destructive | Rewrites history (dangerous on shared branches) |
| **Conflicts** | Resolved once in merge commit | Resolved per-commit during replay |

**Golden Rule**: Never rebase commits that exist on a remote shared branch.

```bash
# Safe local rebase before pushing
git rebase main

# Interactive rebase to squash local commits
git rebase -i HEAD~3
```

## Cherry-Picking

Apply a specific commit from one branch to another:

```bash
# Cherry-pick single commit
git cherry-pick abc1234

# Cherry-pick range of commits
git cherry-pick abc1234..def5678
```

## Squash and Merge

Combine feature branch commits into single commit on main:

```bash
# On GitHub/GitLab: use "Squash and merge" button in PR
# Or locally:
git checkout main
git merge --squash feature/branch
git commit -m "feat: new feature implementation"
```