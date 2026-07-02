export const summaryPrompt = (diff: string) => `
You are a Senior Software Engineer.

Your task is to summarize the following Git Pull Request.

Analyze ALL the code changes and provide:

## Purpose
Explain why this Pull Request exists.

## Major Changes
List the most important code changes.

## Files Impacted
Mention the important files.

## Breaking Changes
Mention if anything could break existing functionality.

## Risk Level
Choose one:
- Low
- Medium
- High

## Overall Summary
Write a short paragraph summarizing the Pull Request.

Git Diff:

${diff}
`;