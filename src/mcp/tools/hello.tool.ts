export async function helloTool() {
    return {
      content: [
        {
          type: "text" as const,
          text: "Hello from GitHub MCP Agent 🚀",
        },
      ],
    };
  }