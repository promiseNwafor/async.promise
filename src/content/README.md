# async.promise Content Guide

## Blog Post Framework

async.promise uses a unique content framework based on async/promise paradigms:

### 🔮 **Awaiting:** Posts
Explore upcoming AI tools, trends, and future possibilities.
- **Template**: `_template-awaiting.md`
- **Tags**: `["ai", "future-tech", "awaiting"]`
- **Focus**: What's coming next in AI/software engineering

### 🔧 **Resolving:** Posts  
Practical solutions for AI integration challenges.
- **Template**: `_template-resolving.md`
- **Tags**: `["ai-integration", "production", "resolving"]`
- **Focus**: Real-world implementation guides and solutions

### ⚠️ **Catching:** Posts
Critical analysis of AI limitations and reality checks.
- **Template**: `_template-catching.md` 
- **Tags**: `["ai-limitations", "critical-thinking", "catching"]`
- **Focus**: When AI falls short and human expertise is essential

### 🏗️ **Async AI:** Posts
Design patterns and architecture for AI-first development.
- **Template**: `_template-async-ai.md`
- **Tags**: `["design-patterns", "ai-architecture", "async-programming"]`
- **Focus**: Technical patterns and architectural approaches

## Creating New Posts

1. **Choose your template** based on the type of content
2. **Copy the appropriate template** to a new file in this directory
3. **Rename** following the pattern: `YYYY-MM-DD-your-post-slug.md`
4. **Fill in the frontmatter** with proper title, date, excerpt, and tags
5. **Write your content** following the template structure

## File Naming Convention

```
YYYY-MM-DD-category-descriptive-title.md
```

Examples:
- `2024-01-15-awaiting-gpt5-development-impact.md`
- `2024-01-10-resolving-openai-rate-limiting.md`  
- `2024-01-05-catching-ai-code-review-limitations.md`
- `2024-01-01-async-ai-circuit-breaker-pattern.md`

## Frontmatter Requirements

```yaml
---
title: "Category: Descriptive Title"
date: "YYYY-MM-DD"
excerpt: "Brief 1-2 sentence description for previews..."
tags: ["primary-tag", "secondary-tag", "category-tag"]
author: "async.promise"
---
```

## Content Guidelines

### Voice and Tone
- **Technical but accessible**: Explain complex concepts clearly
- **Balanced perspective**: Show both promises and limitations
- **Practical focus**: Include real code examples and solutions
- **Future-oriented**: Connect to the async nature of AI development

### Code Examples
- Use TypeScript when possible
- Include error handling and edge cases
- Show both naive and production-ready approaches
- Comment important sections

### Structure
- Start with a compelling hook
- Use clear headings and subheadings
- Include practical examples
- End with a call for discussion/engagement

## SEO and Discoverability

### Tags
- Use consistent tags across similar content
- Include category tags ("awaiting", "resolving", "catching")
- Add relevant technology tags ("ai", "typescript", "production")
- Limit to 3-5 tags per post

### Excerpts
- Keep under 160 characters
- Include the main benefit/insight
- Use action words when appropriate
- Tease the solution without giving it away

## Publishing Process

1. **Review content** against this guide
2. **Check links and code examples** work correctly
3. **Verify frontmatter** is complete and accurate
4. **Test locally** to ensure proper rendering
5. **Commit and deploy** following your git workflow

---

Happy writing! Remember: we're exploring the async promises of AI in software engineering. 🚀