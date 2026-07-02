export const summaryPrompt = (diff: string) => `
You are a Senior Software Engineer.

Analyze the following GitHub Pull Request.

Return ONLY valid JSON.

Schema:

{
  "purpose": "",
  "risk": "Low | Medium | High",
  "majorChanges": [],
  "filesImpacted": [],
  "breakingChanges": [],
  "summary": ""
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