import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import server from "./server.js";

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("✅ GitHub MCP Server Started");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});