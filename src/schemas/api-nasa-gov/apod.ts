import { z } from "zod";

export const nasaApiAPODRequestSchema = z.object({
  api_key: z.string().min(1),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .describe("The date of the APOD image to retrieve (YYYY-MM-DD format)"),
  start_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .describe(
      "The start of a date range in YYYY-MM-DD format, when requesting date for a range of dates. Cannot be used with date."
    ),
  end_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .describe(
      "The end of the date range in YYYY-MM-DD format, when used with start_date."
    ),
  count: z
    .number()
    .optional()
    .describe(
      "If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date."
    ),
  thumbs: z
    .boolean()
    .optional()
    .describe(
      "Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored."
    ),
});

export const nasaApiAPODResponseSchema = z.object({
  copyright: z
    .string()
    .optional()
    .describe("Copyright information for the image"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .describe("The date of the APOD in YYYY-MM-DD format"),
  explanation: z.string().describe("Detailed explanation of the image"),
  hdurl: z
    .string()
    .url()
    .describe("URL to the high definition version of the image"),
  media_type: z
    .enum(["image", "video"])
    .describe("The type of media (image or video)"),
  service_version: z.string().describe("Version of the APOD service"),
  title: z.string().describe("Title of the APOD"),
  url: z.string().url().describe("URL to the standard resolution image"),
});

export type nasaAPIAPODRequestType = z.infer<typeof nasaApiAPODRequestSchema>;
export type nasaAPIAPODResponseType = z.infer<typeof nasaApiAPODResponseSchema>;
