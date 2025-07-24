// API SERVICES
import { ApiService } from ".";
// TYPES
import { nasaAPIAPODRequestType } from "@/schemas/api-nasa-gov/apod";
// CONSTANTS
import {
  NASA_API_URL as baseURL,
  NASA_API_KEY as apiKey,
} from "@/utils/constants";
// LOGGER
import logger from "@/utils/logger";

const nasaApiService = new ApiService(baseURL);

export const getAPOD = async (
  params: Omit<nasaAPIAPODRequestType, "api_key">
) => {
  let query = `?api_key=${apiKey}`;

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      query += `&${key}=${value}`;
    }
  });

  try {
    const response = await nasaApiService.get(`/planetary/apod${query}`);
    logger.info(response);
    return response.data;
  } catch (error) {
    logger.error(error);
  }
};
