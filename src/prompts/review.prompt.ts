export const reviewPrompt = (diff: string) => `
You are a Senior Software Engineer performing a Pull Request review.

Return ONLY valid JSON.

Schema:

{
  "summary": "",
  "bugs": [],
  "securityIssues": [],
  "performanceIssues": [],
  "bestPractices": [],
  "suggestions": []
}

Rules:
- Output ONLY JSON.
- No markdown.
- No explanations.
- No code fences.
- Ensure the JSON is valid.

Git Diff:

${diff}
`;