import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { summarizePRTool } from "./tools/summarize-pr.tool.js";
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

export default server;