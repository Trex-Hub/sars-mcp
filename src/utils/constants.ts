import dotenv from "dotenv";
dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;
export const DEVELOPMENT_MODE = "development";

// NASA's API
export const NASA_API_KEY = process.env.NASA_API_KEY
export const NASA_API_URL = "https://api.nasa.gov"