# 🤝 CONTRIBUTING.md

Thank you for wanting to contribute to **CODEDEX**! To maintain the high quality and accuracy of the reference library, please follow these guidelines.

## ✍️ Adding a New Cheatsheet

All cheatsheets are stored as Markdown files in `src/content/cheatsheets/[category]/`.

### 1. Choose a Category
Ensure your content fits into one of the existing categories:
- `programming`
- `dsa`
- `tools`
- `databases`
- `computer-science`
- `cybersecurity`

### 2. Frontmatter Requirements
Every file **must** start with a Zod-validated frontmatter block. Example:

```markdown
---
title: "Your Cheatsheet Title"
description: "A concise one-sentence summary of the content."
category: programming
subcategory: "language-specific"
tags: [tag1, tag2]
difficulty: intermediate
order: 10
draft: false
---
```

### 3. Content Standards
- **Accuracy**: Ensure all code snippets are tested and accurate.
- **Density**: Use tables and concise lists over long paragraphs.
- **Formatting**: Use standard GitHub Flavored Markdown (GFM).
- **Code Blocks**: Always specify the language for syntax highlighting (e.g., \`\`\`python).

## 🛠️ Development Workflow

1. **Fork** the repository.
2. **Create a Feature Branch**: `git checkout -b feat/add-new-reference`.
3. **Local Testing**: Run `npm run dev` to preview your changes.
4. **Build Verification**: Run `npm run build` to ensure your frontmatter is valid and the site compiles.
5. **Submit a PR**: Provide a clear description of what was added or fixed.

## 🎨 Styling Contributions
If you are proposing changes to the design system (`src/styles/global.css`), please ensure they:
- Maintain the monochromatic, high-contrast palette.
- Are fully responsive across mobile and desktop.
- Do not introduce layout shifts.

## 📜 Code of Conduct
Be respectful, technical, and constructive in all discussions and PR reviews.
