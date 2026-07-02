import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { summarizePRTool } from "./tools/summarize-pr.tool.js";
import { reviewPRTool } from "./tools/review-pr.tool.js";
import { securityReviewTool } from "./tools/security-review.tool.js";
import { reviewCommentTool } from "./tools/review-comment.tool.js";
import { z } from "zod";

const server = new McpServer({
  name: "github-mcp-agent",
  version: "1.0.0",
});

server.registerTool(
    "summarize_pr",
    {
      title: "Summarize Pull Request",
      description: "Generate an AI summary for a GitHub Pull Request.",
      inputSchema: {
        owner: z.string(),
        repo: z.string(),
        pullNumber: z.number(),
      },
    },
    summarizePRTool
  );

  server.registerTool(
    "review_pr",
    {
      title: "Review Pull Request",
      description: "AI code review for a GitHub Pull Request.",
      inputSchema: {
        owner: z.string(),
        repo: z.string(),
        pullNumber: z.number(),
      },
    },
    reviewPRTool
  );

  server.registerTool(
    "security_review",
    {
        title: "Security Review",
        description: "Find security vulnerabilities in a Pull Request.",
        inputSchema: {
            owner: z.string(),
            repo: z.string(),
            pullNumber: z.number(),
        },
    },
    securityReviewTool
);

server.registerTool(
    "review_comment",
    {
        title: "Review and Comment",
        description: "Generate an AI review and post it as a GitHub Pull Request review comment.",
        inputSchema: {
            owner: z.string(),
            repo: z.string(),
            pullNumber: z.number(),
        },
    },
    reviewCommentTool
);

export default server;