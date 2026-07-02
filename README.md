# 🚀 GitHub MCP AI Agent

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express"/>
  <img src="https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google"/>
  <img src="https://img.shields.io/badge/MCP-Model_Context_Protocol-00C853?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/GitHub-Octokit-181717?style=for-the-badge&logo=github"/>
</p>

---

## 📌 Overview

**GitHub MCP AI Agent** is an AI-powered backend application that integrates the **GitHub REST API**, **Google Gemini AI**, and the **Model Context Protocol (MCP)** to automate Pull Request analysis.

The project enables developers and AI clients to:

- Generate AI-powered Pull Request summaries
- Perform intelligent code reviews
- Detect common security vulnerabilities
- Expose these capabilities through MCP tools

The project demonstrates how Large Language Models can be integrated into developer workflows using modern backend architecture.

---

# ✨ Features

### 🤖 AI Pull Request Summary

Generate concise summaries for GitHub Pull Requests.

- Purpose
- Major Changes
- Risk Level
- Breaking Changes
- Overall Summary

---

### 🔍 AI Code Review

Automatically reviews Pull Requests using Gemini AI.

Reviews include:

- Code Quality
- Potential Bugs
- Best Practices
- Performance Suggestions
- Improvement Recommendations

---

### 🔐 AI Security Review

Analyzes Pull Requests for common security issues including:

- SQL Injection
- Cross-Site Scripting (XSS)
- Hardcoded Secrets
- Authentication Issues
- Authorization Issues
- Command Injection

---

### ⚡ GitHub Integration

Integrated with GitHub REST API using Octokit.

Supports:

- Repository Details
- Pull Requests
- Pull Request Files
- Authenticated User
- AI Review Comment Generation

---

### 🧠 MCP Server

Implements a Model Context Protocol (MCP) server exposing AI capabilities as tools.

Available MCP tools:

- summarize_pr
- review_pr
- security_review

---

# 🏗️ Architecture

```text
                    GitHub Repository
                           │
                           │
                    GitHub REST API
                           │
                           ▼
                  ┌──────────────────┐
                  │  GithubService   │
                  └──────────────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │    AIService     │
                  └──────────────────┘
                           │
                    Prompt Engineering
                           │
                           ▼
                     Google Gemini AI
                           │
                           ▼
                 AI Generated Analysis
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
        REST API                   MCP Server
```

---

# 📂 Project Structure

```text
github-mcp-agent/

src/

├── config/
│   ├── gemini.ts
│   └── github.ts
│
├── controllers/
│   ├── ai.controller.ts
│   └── github.controller.ts
│
├── services/
│   ├── ai.service.ts
│   └── github.service.ts
│
├── prompts/
│   ├── review.prompt.ts
│   ├── summary.prompt.ts
│   └── security.prompt.ts
│
├── routes/
│   ├── ai.routes.ts
│   └── github.routes.ts
│
├── mcp/
│   ├── index.ts
│   ├── server.ts
│   └── tools/
│       ├── summarize-pr.tool.ts
│       ├── review-pr.tool.ts
│       └── security-review.tool.ts
│
└── app.ts
```

---

# 🛠 Tech Stack

| Category | Technology |
|------------|------------|
| Language | TypeScript |
| Runtime | Node.js |
| Backend | Express.js |
| AI | Google Gemini |
| GitHub Integration | Octokit |
| Protocol | MCP |
| Environment | dotenv |

---

# 🔧 MCP Tools

| Tool | Description |
|-------|-------------|
| summarize_pr | Generate AI summary of a Pull Request |
| review_pr | Perform AI code review |
| security_review | Detect security vulnerabilities |

---

# 🌐 REST APIs

## AI APIs

### Generate Pull Request Summary

```
POST /ai/summarize-pr
```

Example Request

```json
{
    "owner":"username",
    "repo":"repository",
    "pullNumber":1
}
```

---

### AI Code Review

```
POST /ai/review-pr
```

---

### Security Review

```
POST /ai/security-review
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/github-mcp-agent.git
```

Move into the project

```bash
cd github-mcp-agent
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Run MCP Server

```bash
npm run mcp
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
GITHUB_TOKEN=your_github_token

GEMINI_API_KEY=your_gemini_api_key
```

---

# 📷 Screenshots

## AI Pull Request Summary

> *(Add screenshot here)*

---

## AI Code Review

> *(Add screenshot here)*

---

## Security Review

> *(Add screenshot here)*

---

## MCP Inspector

> *(Add screenshot here)*

---

# 📈 Current Capabilities

- ✅ GitHub REST API Integration
- ✅ Gemini AI Integration
- ✅ AI Pull Request Summary
- ✅ AI Code Review
- ✅ AI Security Review
- ✅ MCP Server
- ✅ Service-Oriented Architecture
- ✅ TypeScript Backend

---

# 🚀 Future Improvements

- Structured JSON AI Responses
- Repository Health Analyzer
- Repository Chat
- Docker Support
- Deployment
- Swagger/OpenAPI Documentation
- GitHub Webhooks
- Unit Testing

---

# 💡 Key Learnings

Through this project I gained hands-on experience with:

- Building scalable Express APIs
- Service-oriented backend architecture
- GitHub REST API integration using Octokit
- Prompt engineering with Large Language Models
- Google Gemini AI SDK
- Model Context Protocol (MCP)
- TypeScript backend development
- Environment variable management

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Manshi Singh**

If you found this project useful, feel free to ⭐ the repository.
