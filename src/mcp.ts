// MCP SERVER
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";
// API SERVICES
import { getAPOD } from "./services/api-nasa-gov.js";
// SCHEMAS
import { nasaApiAPODRequestSchema } from "./schemas/api-nasa-gov/apod.js";
// CONSTANTS
import { NASA_API_KEY } from "./utils/constants.js";

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

mcpServer.registerTool(
  "nasa_apod",
  {
    title: "NASA Astronomy Picture of the Day",
    description:
      "Fetch NASA's Astronomy Picture of the Day (APOD) with optional parameters for date, date range, random count, or video thumbnails.",
    inputSchema: nasaApiAPODRequestSchema.omit({ api_key: true }).shape,
  },
  async (request) => {
    try {
      const apodData = await getAPOD(request);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(apodData, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching APOD data: ${
              error instanceof Error ? error.message : String(error)
            }`,
          },
        ],
      };
    }
  }
);

const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: undefined,
  enableJsonResponse: true,
});

await mcpServer.connect(transport);

export default transport;
