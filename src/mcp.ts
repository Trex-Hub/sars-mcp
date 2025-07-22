// MCP SERVER
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";

const mcpServer = new McpServer({
  name: "sars-mcp",
  version: "1.0.0",
});

mcpServer.registerTool(
  "wake_up",
  {
    title: "Wake Up",
    description: "A simple tool that confirms the server is awake and ready.",
    inputSchema: z.object({}).shape,
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "I'm awake, Boss 🫡 ",
        },
      ],
    };
  }
);

const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: undefined,
  enableJsonResponse: true,
});

await mcpServer.connect(transport);

export default transport;
